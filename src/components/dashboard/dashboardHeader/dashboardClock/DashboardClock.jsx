import React, { useEffect, useState } from 'react'
import styles from './DashboardClock.module.css'
function DashboardClock() {
	const [date, setDate] = useState(new Date())
	function refreshDashboardClock() {
		setDate(new Date())
	}

	useEffect(() => {
		const timerId = setInterval(refreshDashboardClock, 1000)
		return function cleanup() {
			clearInterval(timerId)
		}
	}, [])
	return (
		<div className={styles.dashboardClock}>
			<p className={styles['dashboardClock-time']}>
				{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
			</p>
			<p className={styles['dashboardClock-date']}>{date.toDateString()}</p>
		</div>
	)
}

export default DashboardClock
