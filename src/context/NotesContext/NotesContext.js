import React from 'react'

const actualNotes = JSON.parse(localStorage.getItem('notes') || '[]')
const actualDayNotes = actualNotes.filter((note) => note.day === 'monday')
const NotesContext = React.createContext({
	notes: actualNotes,
	notesByDay: actualDayNotes,
	day: 'monday',
	addNewNote: (note, user) => {},
	changeNoteDay: (day) => {},
	deleteNote: (idNote) => {},
	deleteAllNotes: () => {},
})

export default NotesContext
