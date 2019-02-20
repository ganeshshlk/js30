import React, {Component} from 'react';
import './drum.css';


class Drum extends Component{
	constructor(){
		super();
    	window.addEventListener('keydown',this.playSound);
	}
	
	playSound(e){
		var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
		if(!audio) return;
		audio.currentTime=0;
		audio.play();
	}
	generateComp(){
		var drumName=['A','S','D','F','G','H','J','K','L'];
		var sounds=["boom.wav","clap.wav","hihat.wav","kick.wav","openhat.wav","ride.wav","snare.wav","tink.wav","tom.wav"];	
		var keyMap=[65,83,68,70,71,72,74,75,76];

		var drums=drumName.map((e,i)=>{
			return (
			<div className="drum" onClick={(e)=>this.playSound({keyCode:keyMap[i]})} key={i}>
				<p>{e}</p>
				<p>{sounds[i].replace(".wav","")}</p>
				<audio data-key={keyMap[i]} src={"sounds/"+sounds[i]}></audio>
			</div>
			)
		});

		return drums;
	}
	render(){
		return(
			this.generateComp()
		);
	}
}

export default Drum;