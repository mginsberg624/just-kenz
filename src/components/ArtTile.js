import React from 'react'
import Grow from '@material-ui/core/Grow';
import Popover from '@material-ui/core/Popover';



export default class ArtTile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
      }


    handleClick(name) {
        console.log("setting state to image name", name)
        if(this.state.selected == null) {
        this.setState({selected: name})
    } else {
        this.setState({selected: null})
    }
        
    }

    getClass(name) {
        console.log("Getting class")
        if(name === this.state.selected) {
            console.log("returning selected")
            return "selected"
        }
        console.log(this.state, this.props.name) 
        return "image-container"        
    }
    
    render() {
        const isClicked = this.state.selected ===this.props.name;
        let description;
        if(isClicked){
            description = 
            
            <div className="gallery-tile-text">
                <h2>{this.props.name}</h2>
                <span>{this.props.description}</span>
            </div>
            
        } 

        return (
            <Grow in={isClicked}>
            <div onClick={() => this.handleClick(this.props.name)} className={this.getClass(this.props.name)}>
                <img src={this.props.logo} class = "gallery-tile-logo" />
                {description}
            </div>
            </Grow>

        )
    }
}

