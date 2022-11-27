import React, { Fragment, useContext } from 'react'
import NotesContext from '../../../../../context/NotesContext/NotesContext'
import styles from './Task.module.css'

function Task(props) {
	const notesCtx = useContext(NotesContext)
	const handleDelete = (id) => {
		notesCtx.deleteNote(id)
	}
	return (
		<Fragment>
			<div className={`${styles.task}`}>
				<p className={styles['task-content']}>{props.content}</p>
				<button
					className={styles['task-button']}
					onClick={() => handleDelete(props.id)}
				>
					Delete
				</button>
			</div>
		</Fragment>
	)
}

export default Task
