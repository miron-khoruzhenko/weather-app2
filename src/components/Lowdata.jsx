import React from 'react'
import sunnyIco from '../imgs/icons2/Scorcher Dark21.png'

export const Lowdata = () => {
  return (
	<div className='flex items-end text-white absolute bottom-28 left-20'>
		<h1 id="temperature" className="text-9xl">26&deg;</h1>
		<div className="city-date mx-8">
			<h2 className="city-name text-6xl mb-1">London</h2>
			<span className="date text">20:08 - Thuesday, 15 Jan '23</span>
		</div>
		<div className="flex justify-center flex-col">
			<div className="weather-icon"><img src={sunnyIco} alt="" /></div>
			<span className="weather-status">Sunny</span>
		</div>
	</div>
  )
}
