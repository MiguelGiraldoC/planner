import React, { useContext, useState } from 'react'
import NotesContext from '../../../context/NotesContext/NotesContext'
import styles from './DayTab.module.css'
function DayTab(props) {
	const notesCtx = useContext(NotesContext)

	const label = props.day[0].toUpperCase() + props.day.substring(1)
	const onChangeDayHandler = () => {
		notesCtx.changeNoteDay(props.day)
	}

	return (
		<div
			className={`${styles.tab} ${styles[props.day]}`}
			onClick={onChangeDayHandler}
			tabIndex={props.index}
			onFocus={() => console.log('sda')}
		>
			<p>{label}</p>
		</div>
	)
}

export default DayTab
