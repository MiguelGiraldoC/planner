import React from 'react'

const UsersContext = React.createContext({
	users: JSON.parse(localStorage.getItem('users') || '[]'),
	currentUser: localStorage.getItem('currentUser')
		? JSON.parse(localStorage.getItem('currentUser'))
		: null,
	err: '',
	addNewUser: (user) => {},
	userLogin: ({ username, email }) => {},
	userLogout: () => {},
})

export default UsersContext
