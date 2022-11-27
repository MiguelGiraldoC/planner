import React, { Fragment } from 'react'
import styles from './DashboardSelect.module.css'
import { daysOfTheWeek } from '../../../utils/daysOfTheWeek'
const DashboardSelect = React.forwardRef((props, ref) => {
	const options = daysOfTheWeek.map((day) => (
		<option value={day} key={day}>
			{day[0].toUpperCase() + day.substring(1)}
		</option>
	))

	return (
		<Fragment>
			<select className={styles.select} name='days' ref={ref}>
				{options}
			</select>
		</Fragment>
	)
})

export default DashboardSelect
