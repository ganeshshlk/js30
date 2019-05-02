import React, {Component} from 'react';
import './CssVar.css';

class CssVar extends Component{

    constructor(){
        super();
        this.state={
            spacing:20,
            blur:10,
            base:"#ffc600"
        }
    }    

    handleControl=(e)=>{
        
        let suffix=e.target.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
        let val={};
        val[`${e.target.name}`]=e.target.value
        this.setState(val);
    }

    render(){
        return(
            <div>
                <div className="controls">
                <label htmlFor="spacing">Spacing:</label>
                <input id="spacing" type="range" name="spacing" min="10" max="200" value={this.state.spacing} data-sizing="px" onChange={this.handleControl}/>

                <label htmlFor="blur">Blur:</label>
                <input id="blur" type="range" name="blur" min="0" max="25" value={this.state.blur} data-sizing="px" onChange={this.handleControl}/>

                <label htmlFor="base">Base Color</label>
                <input id="base" type="color" name="base" value={this.state.base} onChange={this.handleControl}/>
                </div>

                <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500"/>
            </div>
            
        );
    }
}

export default CssVar