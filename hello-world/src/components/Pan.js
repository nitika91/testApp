import React, {Component} from "react";

/*pan_4th_letter = {
				  C: "Company",
			      P: "Personal",
			      H: "Hindu Undivided Family (HUF)",
			      F: "Firm",
			      A: "Association of Persons (AOP)",
			      T: "AOP (Trust)",
			      B: "Body of Individuals 		(BOI)",
			      L: "Local Authority",
			      J: "Artificial Juridical Person",
			      G: "Govt"
   		  		};
*/
class Pan extends Component {
	constructor(props) {
		super(props);
		this.input_blur = this.input_blur.bind();
	}

	/*if type == 'Personal' then name = lastName else name = entityName*/
	input_blur(e, name,isCheck5thChar) {
		let c2 = "[A-Z]";
		// if (name.length > 0) {
			let c1 = name.charAt(0);
		// }
		regExpStr = "[A-Z]{3}([CHFATBLJGP])";
		// if (isCheck5thChar){
		// 	regExpStr += c1 + ")[0-9]{4}[A-Z]";
		// } else {
		// 	regExpStr += c2 + "|(?<!p)"+c2+")[0-9]{4}[A-Z]";
		// }
		let errors = {};
		 const regExpStr = "[A-Z]{3}([CHFATBLJGP])(?:(?<=p)"+ c1 +"|(?<!p)"+c2+")[0-9]{4}[A-Z]";
         var panRegExp = new RegExp(regExpStr, "i");
             if (panRegExp.test(e.target.value) == false) {
                alert("Invalid Pan No");
             } else {
	            alert("Correct Pan No");
	         }
	}
	render() {
		const { value } = this.props;
		console.log(value);
		return (
		 <div className="form">
         <label htmlFor="Pan">Pan Number</label>
         <input type="text" name="pan" id="pan" MaxLength="10" onBlur={(e)=>{this.input_blur(e, value)}}/>
       </div>
		)
	}
}
export default Pan;