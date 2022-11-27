import React, { Fragment } from 'react'
import styles from './DashboardIconButton.module.css'
function DashboardIconButton(props) {
	const styleClass = props.style
	return (
		<Fragment>
			<button
				type={props.type}
				onClick={props.handleClick}
				className={`${styles.button} ${styles[styleClass]} `}
			>
				{props.label}
			</button>
		</Fragment>
	)
}

export default DashboardIconButton
