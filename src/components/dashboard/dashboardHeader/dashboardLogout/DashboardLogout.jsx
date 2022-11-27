import React, { useContext } from 'react'
import styles from './DashboardLogout.module.css'
import compassLogo from '../../../../assets/compassLogoBlack.svg'
import iconUser from '../../../../assets/iconUser.svg'
import DashboardIconButton from '../../../ui/dashboardButtons/dashboardIconButton/DashboardIconButton'
import UsersContext from '../../../../context/UsersContext/UsersContext'
import { useHistory } from 'react-router-dom'

function DashboardLogout() {
	const userCtx = useContext(UsersContext)
	const history = useHistory()

	const handleLogout = () => {
		userCtx.userLogout()
		history.push('/')
	}

	return (
		<div className={styles['dashboardLogout-logo']}>
			<img src={compassLogo} alt='Compass logo' />
			<DashboardIconButton
				style='logout'
				label='Log out'
				handleClick={handleLogout}
			></DashboardIconButton>
		</div>
	)
}

export default DashboardLogout
