import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import DashboardIconButton from '../../ui/dashboardButtons/dashboardIconButton/DashboardIconButton'
import DashboardInputs from '../../ui/dashboardInputs/DashboardInputs'
import DashboardSelect from '../../ui/dashboardSelect/DashboardSelect'
import styles from './DashboardActions.module.css'
import NotesContext from '../../../context/NotesContext/NotesContext'
import UsersContext from '../../../context/UsersContext/UsersContext'
function DashboardActions() {
	const notesCtx = useContext(NotesContext)
	const userCtx = useContext(UsersContext)
	const { currentUser } = userCtx
	const taskContentInputRef = useRef()
	const taskDayInputRef = useRef()
	const taskTimeInputRef = useRef()

	const ceilTime = (time) => {
		const splited = time.split(':')
		let ceilMinutes = Math.ceil(+splited[1] / 5) * 5
		let hours = ''

		console.log(ceilMinutes)
		if (ceilMinutes >= 60) {
			hours = +splited[0] + 1

			console.log('h: ' + hours)
			ceilMinutes = '00'
			if (hours < 10) {
				hours = '0' + '' + hours.toString()
			} else {
				if (hours > 23) {
					hours = '00'
				}
			}
		} else {
			hours = splited[0]
			if (ceilMinutes <= 9) {
				ceilMinutes = '0' + ceilMinutes
				return hours + ':' + ceilMinutes
			} else {
				return hours + ':' + ceilMinutes
			}
		}
	}

	const handleSubmit = (evt) => {
		evt.preventDefault()
		const content = taskContentInputRef.current.value
		const day = taskDayInputRef.current.value
		const timeString = taskTimeInputRef.current.value

		const time = ceilTime(timeString)
		console.log(time)
		const newNote = {
			content,
			day,
			time,
			userEmail: currentUser.email,
		}

		notesCtx.addNewNote(newNote)
	}

	const handleDelete = (evt) => {
		evt.preventDefault()
		notesCtx.deleteAllNotes()
	}

	return (
		<Fragment>
			<form onSubmit={handleSubmit} className={styles.actions}>
				<div className={styles['actions-inputs']}>
					<DashboardInputs
						ref={taskContentInputRef}
						type='text'
						style='input-note'
						placeholder='Task or issue'
						required={true}
					></DashboardInputs>
					<DashboardSelect ref={taskDayInputRef}></DashboardSelect>
					<DashboardInputs
						ref={taskTimeInputRef}
						type='time'
						style='input-time'
						required={true}
					></DashboardInputs>
				</div>
				<div className={styles['actions-buttons']}>
					<DashboardIconButton
						type='submit'
						label='Add to calendar'
						style='actionAdd'
					></DashboardIconButton>
					<DashboardIconButton
						label='Delete all'
						style='actionDelete'
						handleClick={handleDelete}
					></DashboardIconButton>
				</div>
			</form>
		</Fragment>
	)
}

export default DashboardActions
