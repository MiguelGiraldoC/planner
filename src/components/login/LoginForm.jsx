import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import styles from './LoginForm.module.css'

import FormInputIconText from '../ui/formInputIconText/FormInputIconText'
import FormButton from '../ui/formButton/FormButton'
import { Link, useHistory } from 'react-router-dom'
import {
	isEmailValid,
	isConfirmPasswordCorrect,
	isPasswordValid,
} from '../../utils/validations/validations'
import UsersContext from '../../context/UsersContext/UsersContext'
function LoginForm() {
	const userCtx = useContext(UsersContext)
	const { currentUser } = userCtx
	const history = useHistory()
	const usernameInputRef = useRef()
	const passwordInputRef = useRef()

	console.log(userCtx.err)
	useEffect(() => {
		if (currentUser) {
			console.log('Login form')
			console.log(currentUser)
			history.push('/dashboard')
		}
	}, [currentUser])

	const handleSubmit = (evt) => {
		evt.preventDefault()
		const username = usernameInputRef.current.value
		const password = passwordInputRef.current.value

		userCtx.userLogin({ username, password })
	}
	return (
		<section className={styles['login-container']} onSubmit={handleSubmit}>
			<h1>Welcome,</h1>
			<p>To continue browsing safely, log in to the network.</p>
			<h2>Login</h2>
			<form className={styles['login-form']}>
				<FormInputIconText
					ref={usernameInputRef}
					placeholder='user name'
					margin='login'
					icon='user'
					type='email'
					required={true}
				></FormInputIconText>
				<FormInputIconText
					ref={passwordInputRef}
					placeholder='password'
					margin='login'
					icon='password'
					type='password'
					required={true}
				></FormInputIconText>
				<FormButton label='Log in'></FormButton>
				<Link to={'/register'} className={styles['login-link']}>
					Create new account
				</Link>
			</form>
		</section>
	)
}

export default LoginForm
