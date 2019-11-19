import React from 'react';
import ReactDOM from 'react-dom';	
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
/*	constructor (props) {
		super(props);

		this.state = { 
			lat: null
		};
	} */

	//constructor dll bisa diganti dengan
	state = { lat: null, errMessage: ''}

	componentDidMount () {
		window.navigator.geolocation.getCurrentPosition(
		position => this.setState({ 
				lat: position.coords.latitude, //from console.log(position)
				errMessage: ''
		 	}),
		err => this.setState({errMessage: err.message})
		);
	}

	renderContent() {
		if(this.state.lat && !this.state.errMessage){
			return(
				<SeasonDisplay lat={this.state.lat}	/>
			);
		}

		if(!this.state.lat && this.state.errMessage){
			return(
				<div>{this.state.errMessage} </div>
			);
		}

		return <Spinner />;
	}

	//harus ada render
	render() {
		return <div className="border red">
			{this.renderContent()}
		</div>
	}
}

ReactDOM.render (
	<App />,
	document.querySelector('#root')
	);