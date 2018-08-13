import React, { Component } from 'react';

class Availabilities extends Component{

	render(){
		const {availabilities} = this.props;
		const availabilitiesList = availabilities.map((availability, index) => {
			
			return(
			<tr key={index} >
				<td>{availability.unitNameNumber}</td>
				<td>{availability.recordType}</td>
				<td>{availability.availableArea} sf</td>
			</tr>
		)
		})
		
		return(availabilitiesList)
	}
}

export default Availabilities