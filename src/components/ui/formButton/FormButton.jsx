import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './FormButton.module.css'
function FormButton(props) {
	/* 	const history = useHistory()
	const handleClick = () => {
		history.push(`${props.to}`)
	} */
	const margin =
		props.margin === 'register' ? 'margin-register' : 'margin-login'
	return (
		<Fragment>
			<button
				/* onClick={handleClick} */
				type={props.type}
				className={`${styles.button} ${styles[margin]} `}
			>
				{props.label}
			</button>
		</Fragment>
	)
}

export default FormButton
