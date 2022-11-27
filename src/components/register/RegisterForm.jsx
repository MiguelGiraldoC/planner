import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './RegisterForm.module.css'
import FormButton from '../ui/formButton/FormButton'
import FormInputLabelText from '../ui/formInputLabelText/FormInputLabelText'
import {
	isTextValid,
	isEmailValid,
	isConfirmPasswordCorrect,
	isPasswordValid,
} from '../../utils/validations/validations'

import FormCountryRegionDrop from '../ui/formCountryDrop/FormCountryRegionDrop'
import UsersContext from '../../context/UsersContext/UsersContext'
import { useHistory } from 'react-router-dom'

function RegisterForm() {
	const userCtx = useContext(UsersContext)
	const { currentUser } = userCtx
	// states of the form
	const [country, setCountry] = useState('')
	const [region, setRegion] = useState('')
	const [isNameValid, setIsNameValid] = useState('')
	const [isLastNameValid, setIsLastNameValid] = useState('')
	const [isEmailEnteredValid, setIsEmailEnteredValid] = useState('')
	const [isPasswordEnteredValid, setIsPasswordEnteredValid] = useState('')
	const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState('')
	const history = useHistory()
	// input refs
	const nameInputRef = useRef()
	const lastNameInputRef = useRef()
	const birthDateInputRef = useRef()
	const emailInputRef = useRef()
	const passwordInputRef = useRef()
	const passwordConfirmInputRef = useRef()

	useEffect(() => {
		if (currentUser) {
			console.log('Register Form current user')
			console.log(userCtx)
			history.push('/dashboard')
		}
	}, [currentUser])

	const validateForm = (firstName, lastName, email, password, confPassword) => {
		let isValidateForm = true
		if (isTextValid(firstName)) {
			setIsNameValid('')
		} else {
			setIsNameValid('The name is invalid')
			isValidateForm = false
		}

		if (isTextValid(lastName)) {
			setIsLastNameValid('')
		} else {
			setIsLastNameValid('The last name is invalid')
			isValidateForm = false
		}

		if (isEmailValid(email)) {
			setIsEmailEnteredValid('')
		} else {
			setIsEmailEnteredValid('The email is invalid')
			isValidateForm = false
		}

		if (isPasswordValid(password)) {
			setIsPasswordEnteredValid('')
		} else {
			setIsPasswordEnteredValid(
				'Password length must be greater than 8 characters.'
			)
			isValidateForm = false
		}

		if (isConfirmPasswordCorrect(confPassword, password)) {
			setIsConfirmPasswordValid('')
		} else {
			setIsConfirmPasswordValid('Passwords are not same')
			isValidateForm = false
		}

		return isValidateForm
	}

	const handleSubmitForm = (evt) => {
		evt.preventDefault()
		const firstName = nameInputRef.current.value
		const lastName = lastNameInputRef.current.value
		const email = emailInputRef.current.value
		const password = passwordInputRef.current.value
		const confPassword = passwordConfirmInputRef.current.value

		if (validateForm(firstName, lastName, email, password, confPassword)) {
			const newUser = {
				firstName,
				lastName,
				email,
				password,
				country,
				region,
			}
			userCtx.addNewUser(newUser)
		}
	}
	return (
		<section className={styles['login-container']}>
			<h1>Welcome,</h1>
			<p>Please, register to continue</p>
			<form className={styles['login-form']} onSubmit={handleSubmitForm}>
				<FormInputLabelText
					ref={nameInputRef}
					placeholder='first name'
					label='first name'
					type='text'
					margin='register'
					required={true}
					error={isNameValid}
				></FormInputLabelText>
				<FormInputLabelText
					ref={lastNameInputRef}
					label='last name'
					placeholder='last name'
					type='text'
					margin='register'
					required={true}
					error={isLastNameValid}
				></FormInputLabelText>
				<FormInputLabelText
					ref={birthDateInputRef}
					label='birth date'
					type='date'
					margin='register'
				></FormInputLabelText>
				<FormCountryRegionDrop
					country={country}
					setCountry={setCountry}
					region={region}
					setRegion={setRegion}
				></FormCountryRegionDrop>
				<FormInputLabelText
					ref={emailInputRef}
					label='e-mail'
					placeholder='e-mail'
					type='email'
					margin='register'
					error={isEmailEnteredValid}
				></FormInputLabelText>
				<FormInputLabelText
					ref={passwordInputRef}
					label='password'
					placeholder='password'
					type='password'
					margin='register'
					required={true}
					error={isPasswordEnteredValid}
				></FormInputLabelText>
				<FormInputLabelText
					ref={passwordConfirmInputRef}
					label='password'
					placeholder='confirm password'
					type='password'
					required={true}
					margin='register'
					error={isConfirmPasswordValid}
				></FormInputLabelText>

				<FormButton
					type='submit'
					to='/login'
					margin='register'
					label='Register Now'
				></FormButton>
			</form>
		</section>
	)
}

export default RegisterForm
