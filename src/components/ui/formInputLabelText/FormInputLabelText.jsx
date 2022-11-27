import React from 'react'
import styles from './FormInputLabelText.module.css'

const FormInputLabelText = React.forwardRef((props, ref) => {
	return (
		<div className={styles.input}>
			<label className={styles['input-label']}>{props.label}</label>
			<div className={styles['input-container']}>
				<input
					ref={ref}
					placeholder={props.placeholder}
					type={props.type}
					className={styles['input-content']}
					required={props.required}
				/>
				{props.error !== '' && <p>{props.error}</p>}
			</div>
		</div>
	)
})

export default FormInputLabelText
