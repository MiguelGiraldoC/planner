export const isTextValid = (text) => {
	if (text.trim() !== '' || text.trim().length !== 0) {
		return true
	}
	return false
}

export const isEmailValid = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

export const isPasswordValid = (password) => {
	const re = /^[A-Za-z]\w{7,14}$/

	return re.test(password)
}

export const isConfirmPasswordCorrect = (password, confirmPassword) => {
	return password === confirmPassword
}
