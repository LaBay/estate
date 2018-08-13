import React, { Component } from 'react';
import Availabilities from '../Availabilities/Availabilities.js';
import Geo from '../Geo/Geo.js';
import "./EstateItemStyle.css";
import estateFace from '../../images/face.png';
import city from '../../images/city.png';

class EstateItem extends Component{

	render(){
		const estateFeature = this.props.estateFeature;
		console.log(estateFeature);

		const itemList = estateFeature.map(item => {
			return(
				<li key={item.name} className="item_">
					<div className="header">
						<h1>{item.name}</h1>
						<p>{item.address}</p>
					</div>
					<div className="map-block">
						<img src={estateFace} alt={item.name} />
						<Geo address={item.address} />
					</div>
					<div className="details">
						<h3>property details</h3>
						<table>
							<tbody>
								<tr>
									<th>Property Type</th>
									<td>{item.propType}</td>
									<th>Website</th>
									<td><a 
											href={"https://"+item.website} 
											target="_blank">{item.website}
										</a>
									</td>
								</tr>
								<tr>
									<th>Total building area</th>
									<td>{new Intl.NumberFormat('en').format(item.totalBuildingArea)}</td>
									<th>Property Class</th>
									<td>{item.propClass}</td>
								</tr>
								<tr>
									<th>Tenancy</th>
									<td>{item.tenancy}</td>
									<th>Year Built</th>
									<td>{item.yearBuilt}</td>
								</tr>
								<tr>
									<th>No. of Tenant</th>
									<td>{item.numberOfTenant}</td>
									<th>Floors</th>
									<td>{item.floors}</td>
								</tr>
							</tbody>
						</table>
		
					</div>
					
					<div className="description-wrapper">
						<p><span className="description-header">Description: </span><span>{item.description}</span></p>

					</div>


					<div className="availabilities" >
						<h2>availabilities</h2>
						<span>{item.availabilities.length} records</span>
						<table >
							<tbody>
								<tr>
									<th>Unit Name/Number</th>
									<th>Record Type</th>
									<th>Available Area</th>
								</tr>
								<Availabilities availabilities={item.availabilities}/>
							</tbody>
						</table>
						<img className="city" src={city} alt="City" />
					</div>
				</li>
			)
		})

		return(
			<ul className="item-wrapper">{itemList}</ul>)
		}
		
	
}

export default EstateItem;