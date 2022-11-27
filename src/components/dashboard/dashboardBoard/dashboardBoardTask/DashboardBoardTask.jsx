import React, { useContext } from 'react'
import NotesContext from '../../../../context/NotesContext/NotesContext'

import styles from './DashboardBoardTask.module.css'

import TasksRow from './tasksRow/TasksRow'
function DashboardBoardTask(props) {
	const groupByTime = props.notes.reduce((group, note) => {
		const { time } = note
		group[time] = group[time] ?? []
		group[time].push(note)
		return group
	}, {})

	const orderedTask = Object.keys(groupByTime)
		.sort()
		.reduce((obj, key) => {
			obj[key] = groupByTime[key]
			return obj
		}, {})

	const entries = Object.entries(orderedTask)

	return (
		<div className={`${styles.boardTask} `}>
			{entries.map((entry) => (
				<TasksRow key={entry[0]} time={entry[0]} tasks={entry[1]}></TasksRow>
			))}
		</div>
	)
}

export default DashboardBoardTask
