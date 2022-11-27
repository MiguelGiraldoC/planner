import React, { useEffect, useState } from 'react'
import styles from './DashboardWeather.module.css'
import getWeather from '../../../../services/getWeather'

function DashboardWeather(props) {
	const [weather, setWeather] = useState({})
	useEffect(() => {
		getWeather(props.region).then((weather) => setWeather(weather))
	}, [])

	return (
		<div className={styles.dashboardWeather}>
			<p className={styles['dashboardWeather-location']}>
				{props.country} - {props.region}
			</p>
			<div className={styles['dashboardWeather-weatherContainer']}>
				<img
					className={styles['dashboardWeather-weatherContainer-icon']}
					src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
					alt=''
				/>
				<p className={styles['dashboardWeather-weatherContainer-temp']}>
					{weather.temp}°
				</p>
			</div>
		</div>
	)
}

export default DashboardWeather
