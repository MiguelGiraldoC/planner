import React, { Fragment, useState } from 'react'
import styles from './FormInputIconText.module.css'
import userIcon from '../../../assets/iconUser.svg'
import passwordIcon from '../../../assets/iconPassword.svg'

const FormInputIconText = React.forwardRef((props, ref) => {
	const [isFocus, setIsFocus] = useState('false')
	const icon = props.icon === 'user' ? userIcon : passwordIcon
	return (
		<div className={styles.input}>
			<img
				src={icon}
				className={
					!isFocus
						? `${styles['input-icon-unfilled']}`
						: `${styles['input-icon-filled']}`
				}
			></img>
			<input
				ref={ref}
				placeholder={props.placeholder}
				to='/login'
				className={styles['input-content']}
				type={props.type}
				required={props.required}
				onFocus={() => setIsFocus((prev) => setIsFocus(!prev))}
				onBlur={() => setIsFocus((prev) => setIsFocus(!prev))}
			/>
		</div>
	)
})

export default FormInputIconText
