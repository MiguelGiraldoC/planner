import React, { Fragment, useContext, useEffect, useState } from 'react'
import UsersContext from '../../../context/UsersContext/UsersContext'

import styles from './DashboardHeader.module.css'
import DashboardClock from './dashboardClock/DashboardClock'

import DashboardWeather from './dashboardWeather/DashboardWeather'
import DashboardLogout from './dashboardLogout/DashboardLogout'
function DashboardHeader() {
	const userCtx = useContext(UsersContext)
	const { currentUser } = userCtx

	return (
		<Fragment>
			<div className={styles.dashboardHeader}>
				<div className={styles['dashboardHeader-elements']}>
					<div className={styles['dashboardHeader-elements-name']}>
						<h2>Weekly Planner</h2>
						<p>Use this planner to organize your daily issues.</p>
					</div>
					<div className={styles['dashboardHeader-elements-widget']}>
						<DashboardClock></DashboardClock>
						<DashboardWeather
							region={currentUser.region}
							country={currentUser.country}
						></DashboardWeather>
					</div>
					<DashboardLogout></DashboardLogout>
				</div>
			</div>
		</Fragment>
	)
}

export default DashboardHeader
