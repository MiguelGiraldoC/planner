import React, { useContext } from 'react'
import styles from './DashboardBoard.module.css'
import DashboardBoardDays from './dashboardBoardDays/DashboardBoardDays'
import NotesContext from '../../../context/NotesContext/NotesContext'
import UsersContext from '../../../context/UsersContext/UsersContext'
import DashboardBoardTask from './dashboardBoardTask/DashboardBoardTask'
function DashboardBoard() {
	const notesCtx = useContext(NotesContext)
	const userCtx = useContext(UsersContext)
	const { notesByDay } = notesCtx
	const { email } = userCtx.currentUser

	const filteredNotes = notesByDay.filter((note) => note.userEmail === email)

	return (
		<div className={styles.board}>
			<DashboardBoardDays></DashboardBoardDays>
			<DashboardBoardTask notes={filteredNotes}></DashboardBoardTask>
		</div>
	)
}

export default DashboardBoard
