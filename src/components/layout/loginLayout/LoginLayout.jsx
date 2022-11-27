import React from 'react'
import styles from './LoginLayout.module.css'
// assets
import FormImg from '../../../assets/loginFormImg.png'
import compassLogo from '../../../assets/compassLogo.svg'
function LoginLayout(props) {
	return (
		<div className={styles.login}>
			<div className={styles['login-container']}>{props.children}</div>

			<div className={styles['login-image']}>
				<img
					className={styles['login-image-bg']}
					src={FormImg}
					alt='Image representating a computer with compass logo'
				/>
				<img
					className={styles['login-image-logo']}
					src={compassLogo}
					alt='Compass logo'
				/>
			</div>
		</div>
	)
}

export default LoginLayout
