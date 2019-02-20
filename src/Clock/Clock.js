import React, {Component} from 'react';
import './clock.css';


class Clock extends Component{
	constructor(){
		super();
		this.state={
			hour:{transform:"rotate(0deg)"},
			min:{transform:"rotate(0deg)"},
			sec:{transform:"rotate(0deg)"},
		}
		
	}

	componentDidMount(){
		this.updateDate();
	}

	updateDate=()=>{
		let date=new Date();
		let sec=date.getSeconds()*6;
		let min=date.getMinutes()*6;
		let hour=(date.getHours()%12)*30 + date.getMinutes()/2 ;
		//let hour=((date.getHours() / 12) * 360) + ((min/60)*30)
		this.setState({
			hour:{transform:`rotate(${hour}deg)`},
			min:{transform:`rotate(${min}deg)`},
			sec:{transform:`rotate(${sec}deg)`}
		});
		setTimeout(this.updateDate, 1000);
	}
	
	render(){
		return(
			<div className="clock">
			<div className="hour" style={this.state.hour}></div>
			<div className="minute" style={this.state.min}></div>
			<div className="second" style={this.state.sec}></div>
			</div>
		);
	}
}

export default Clock;