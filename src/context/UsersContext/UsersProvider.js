import UsersContext from './UsersContext'
import { useReducer } from 'react'

const defaultUsersState = {
	users: JSON.parse(localStorage.getItem('users') || '[]'),
	currentUser: localStorage.getItem('currentUser')
		? JSON.parse(localStorage.getItem('currentUser'))
		: null,
	err: '',
}

const usersReducer = (state, action) => {
	const storageUsers = state.users

	if (action.type === 'ADD_NEW_USERS') {
		const newUser = action.payload
		const indexOfUser = state.users.findIndex(
			(user) => user.email === newUser.email
		)
		if (indexOfUser === -1) {
			storageUsers.push(newUser)
			localStorage.setItem('users', JSON.stringify(storageUsers))
			localStorage.setItem('currentUser', JSON.stringify(newUser))
			return {
				...state,
				currentUser: newUser,
				users: storageUsers,
			}
		} else {
			return {
				...state,

				err: 'Email or password are invalid',
			}
		}
	}

	if (action.type === 'LOGIN') {
		const { username, password } = action.payload

		const user = state.users.find(
			(user) => user.email === username && user.password === password
		)

		localStorage.setItem('currentUser', JSON.stringify(user))
		if (user) {
			return {
				...state,
				currentUser: user,
			}
		} else {
			return {
				...state,

				err: 'Email or password are invalid',
			}
		}
	}

	if (action.type === 'LOGOUT') {
		console.log('log out')
		localStorage.removeItem('currentUser')
		return {
			...state,
			currentUser: null,
		}
	}
	return state
}

const UsersProvider = (props) => {
	const [usersState, dispatch] = useReducer(usersReducer, defaultUsersState)

	const addNewUserHandler = (user) => {
		dispatch({ type: 'ADD_NEW_USERS', payload: user })
	}
	const userLoginHandler = (data) => {
		dispatch({ type: 'LOGIN', payload: data })
	}

	const userLogoutHandler = () => {
		dispatch({ type: 'LOGOUT' })
	}

	const usersContext = {
		users: usersState.users,
		currentUser: usersState.currentUser,
		err: usersState.err,
		addNewUser: addNewUserHandler,
		userLogin: userLoginHandler,
		userLogout: userLogoutHandler,
	}

	return (
		<UsersContext.Provider value={usersContext}>
			{props.children}
		</UsersContext.Provider>
	)
}

export default UsersProvider
