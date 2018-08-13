import React, { Component } from 'react';
import EstateItem from './components/EstateItem/EstateItem.js'

import './App.css';

let dataURL = 'https://raw.githubusercontent.com/LaBay/data_estate/master/data.json';




class App extends Component {
	state = {
		data: []
}

	componentDidMount(){
		fetch(dataURL)
			 .then(response => response.json()
			).then(json => {
				this.setState({
					data: json
				})
			}
					
			).catch(ex => {
				console.log('parsing failed', ex)
			})
	}

	render() {

		if(this.state.data.length === 0){ 
			return (
				<div className="App">
					<i className="far fa-hourglass fa-spin "></i>
				</div>
			);
		}else{
			const a = this.state.data
			console.log(a)
			return (
 				<div className="App">
 					<EstateItem estateFeature={this.state.data}/>				
				</div>
			);
		}
	}
}

export default App;

// console.log(App)
