import React from 'react'
import './TestClassComponent.css'
import practice from '../assets/practice.png'

export default class TestClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          myName: props.mikenziesName,
        };
    }

    changeName() {
        if(this.state.myName === "ginsberg") {
            this.setState({myName: "mikenzie"})
        }
        else {
            this.setState({myName: "ginsberg"})
        }
    }

    render() {
        return (
            <div 
                className="ginsberg"
                onClick={() => this.changeName()}
            >
                <img src={practice}/>
                my class's name is {this.state.myName}
            </div>
        )
    }
}