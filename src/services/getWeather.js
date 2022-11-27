import axios from 'axios'

const apiKey = 'cc653f00fb4bdd1ff7e767a0ae2c3d16'

const removeAccents = (region) => {
	return region.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
export default function getWeather(region) {
	const regionPlain = removeAccents(region)
	const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${regionPlain}&units=metric&appid=${apiKey}`

	return axios.get(apiURL).then((response) => {
		const temp = Math.floor(response.data.main.temp)
		const icon = response.data.weather[0].icon

		return { temp, icon }
	})
}
