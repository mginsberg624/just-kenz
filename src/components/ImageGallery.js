import React from 'react'
import ImageTile from "./ImageTile"
import practice from "../assets/practice.png"
import './ImageGallery.css'


export default class ImageGallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    getClass(title) {
        console.log("Getting class")
        if(title === this.state.selected) {
            console.log("returning selected")
            return "selected"
        }
    }
    
    handleClick(imageName) {
        console.log("setting state to image name", imageName)
        this.setState({selected: imageName})
    }

    renderImageTile(title, src) {
        return (
            <div 
                onClick={() => this.handleClick(title)}
                className={this.getClass(title)}
            >
                <ImageTile 
                    title={title}
                    src={src}
                />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderImageTile("practice", practice)}
                {this.renderImageTile("second", practice)}
            </div>
        )
    }
}