import React from 'react'

export const Sidedata = () => {
  return (
	<div className="h-screen w-1/3 bg-gray-700/40 absolute top-0 right-0">
		<div className="search-loc">
			<input type="text" className='bg-transparent'/>
			<img src="" alt="" />
		</div>
		<div className="city-list">
			<ul className="">
				<li className="">Birmingham</li>
				<li className="">Manchester</li>
				<li className="">New York</li>
				<li className="">California</li>
			</ul>
		</div>
		<div className="weather-details">
			<table className="">
				<tr className="data-cloud">
					<td className="">Cloudy</td>
					<td className="">12%</td>
				</tr>
				<tr className="data-humidity">
					<td className="">Humidity</td>
					<td className="">78%</td>
				</tr>
				<tr className="data-wind">
					<td className="">Wind</td>
					<td className="">1km/h</td>
				</tr>
				<tr className="data-rain">
					<td className="">Rain</td>
					<td className="">0mm</td>
				</tr>
			</table>
		</div>
	</div>
  )
}
