import React from 'react'
import styles from './DashboardContainer.module.css'
import DashboardHeader from '../dashboardHeader/DashboardHeader'
import DashboardActions from '../dashboardActions/DashboardActions'
import DashboardBoard from '../dashboardBoard/DashboardBoard'

function DashboardContainer() {
	return (
		<div className={styles.dashboard}>
			<DashboardHeader></DashboardHeader>
			<DashboardActions></DashboardActions>
			<DashboardBoard></DashboardBoard>
		</div>
	)
}

export default DashboardContainer
