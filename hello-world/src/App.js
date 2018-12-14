import React from 'react';
import Pan from './components/Pan';
import Name from './components/Name';
import './App.css';


class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lname: null
		}
		this.onNameChange = this.onNameChange.bind(this);
	}

	onNameChange(givenName) {
		console.log('--->', givenName);
		this.setState({lname : givenName})
	}
  	render(){
  		return(
  			<div style={{ width: 'max-content' }}>
  				<Name onNameChange={this.onNameChange}/>
   				<Pan value={this.state.lname} />
  			</div>
  		)
  }
}

export default App;
