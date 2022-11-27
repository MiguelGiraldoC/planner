import React, { useContext } from 'react'
import NotesContext from '../../../../../context/NotesContext/NotesContext'
import Task from '../task/Task'
import styles from './TasksRow.module.css'
function TasksRow(props) {
	const notesCtx = useContext(NotesContext)
	const tasks = props.tasks.map((task, index) => (
		<Task
			key={task.id}
			id={task.id}
			content={task.content}
			day={task.day}
		></Task>
	))

	return (
		<div className={styles.tasksRow}>
			<div className={`${styles['tasksRow-time']} ${styles[notesCtx.day]}`}>
				<p>{props.time}</p>
			</div>
			<div className={styles['tasksRow-tasks']}>{tasks}</div>
		</div>
	)
}

export default TasksRow
