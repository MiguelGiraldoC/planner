import React, { useState } from 'react'
import './FormCountryRegionDrop.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
function FormCountryRegionDrop(props) {
	return (
		<div className='selectDropDown'>
			<div className='selectDropDown-container'>
				<label className='selectDropDown-label'>Country</label>

				<CountryDropdown
					value={props.country}
					onChange={(val) => props.setCountry(val)}
					classes='selectDropDown-box'
				/>
			</div>
			<div className='selectDropDown-container'>
				<label className='selectDropDown-label'>Ciy</label>
				<RegionDropdown
					country={props.country}
					value={props.region}
					onChange={(val) => props.setRegion(val)}
					classes='selectDropDown-box'
				/>
			</div>
		</div>
	)
}

export default FormCountryRegionDrop
