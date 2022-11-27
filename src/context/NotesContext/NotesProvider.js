import NotesContext from './NotesContext'
import { useReducer } from 'react'
import { act } from 'react-dom/test-utils'

const actualNotes = JSON.parse(localStorage.getItem('notes') || '[]')

const actualDayNotes = actualNotes.filter((note) => note.day === 'monday')

const defaulNotesState = {
	notes: actualNotes,
	day: 'monday',
	notesByDay: actualDayNotes,
}

const notesReducer = (state, action) => {
	const storageNotes = state.notes

	if (action.type === 'ADD_NEW_NOTE') {
		const newNote = action.payload
		newNote.id = storageNotes.length * Math.floor(Math.random() * 1000)

		storageNotes.push(newNote)
		const notesByDatUpdated = storageNotes.filter(
			(note) => note.day === newNote.day
		)
		localStorage.setItem('notes', JSON.stringify(storageNotes))
		console.log(newNote)
		return {
			...state,
			notes: storageNotes,
			notesByDay: notesByDatUpdated,
			day: newNote.day,
		}
	}
	if (action.type === 'DELETE_NOTE') {
		const notesAfterDelete = storageNotes.filter(
			(note) => note.id !== action.payload
		)
		const notesUpdated = notesAfterDelete.filter(
			(note) => note.day === state.day
		)
		localStorage.setItem('notes', JSON.stringify(notesAfterDelete))

		return {
			...state,
			notes: notesAfterDelete,
			notesByDay: notesUpdated,
		}
	}
	if (action.type === 'DELETE_ALL_NOTES') {
		console.log('remove')
		const notesUpdated = storageNotes.filter((note) => note.day !== state.day)
		console.log(notesUpdated)
		return {
			...state,
			notes: notesUpdated,
			notesByDay: [],
		}
	}
	if (action.type === 'CHANGE_NOTE_DAY') {
		return {
			...state,
			day: action.payload,
			notesByDay: storageNotes.filter((note) => note.day === action.payload),
		}
	}
	return state
}

const NotesProvider = (props) => {
	const [notesState, dispatch] = useReducer(notesReducer, defaulNotesState)

	const addNewNoteHandler = (note) => {
		dispatch({ type: 'ADD_NEW_NOTE', payload: note })
	}

	const deleteNoteHandler = (idNote) => {
		dispatch({ type: 'DELETE_NOTE', payload: idNote })
	}

	const deleteAllNotesHandler = () => {
		// its for day no evry note
		dispatch({ type: 'DELETE_ALL_NOTES' })
	}
	const changeNoteDayHandler = (day) => {
		dispatch({ type: 'CHANGE_NOTE_DAY', payload: day })
	}

	const notesContext = {
		notes: notesState.notes,
		notesByDay: notesState.notesByDay,
		day: notesState.day,
		addNewNote: addNewNoteHandler,
		deleteNote: deleteNoteHandler,
		deleteAllNotes: deleteAllNotesHandler,
		changeNoteDay: changeNoteDayHandler,
	}

	return (
		<NotesContext.Provider value={notesContext}>
			{props.children}
		</NotesContext.Provider>
	)
}
export default NotesProvider
