import React, { Fragment } from 'react'
import styles from './DashboardInputs.module.css'
const DashboardInputs = React.forwardRef((props, ref) => {
	const styleClass = props.style

	const handleOnfocus = (evt) => {
		evt.target.showPicker()
	}
	return (
		<Fragment>
			<input
				className={`${styles.input} ${styles[styleClass]}`}
				type={props.type}
				placeholder={props.placeholder}
				required={props.required}
				ref={ref}
				onFocus={handleOnfocus}
			/>
		</Fragment>
	)
})

export default DashboardInputs
