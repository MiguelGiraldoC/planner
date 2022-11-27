import React from 'react'
import styles from './DashboardBoardDays.module.css'
import { daysOfTheWeek } from '../../../../utils/daysOfTheWeek'
import DayTab from '../../../ui/dayTab/DayTab'
function DashboardBoardDays() {
	return (
		<div className={styles.days}>
			{daysOfTheWeek.map((day, index) => (
				<DayTab tabIndex={index} key={index} day={day}></DayTab>
			))}
		</div>
	)
}

export default DashboardBoardDays
