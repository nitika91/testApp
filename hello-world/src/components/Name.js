import React, {Component} from "react";
class Name extends Component {
	constructor(props) {
       super(props);
       this.input_blur = this.input_blur.bind(this);
	}

	input_blur(e) {
		console.log(e);
		this.props.onNameChange(e)

	}

	render() {
		return (
		 <div className="form">
         <label htmlFor="name">FirstName</label>
         <input type="text" name="fname"  MaxLength="20"/>
         <label htmlFor="name">LastName</label>
         <input type="text" name="lname" id="name" MaxLength="20" onBlur={(e)=>{this.input_blur(e.target.value)}}/>
     
       </div>
		)
	}
}
export default Name;