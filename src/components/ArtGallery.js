import React from 'react'
import ArtTile from './ArtTile'
import {art} from "../assets/Art"
import Header from './Header'
import Grid from '@material-ui/core/Grid';



export default class ArtGallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
      }


    handleClick(name) {
        console.log("setting state to image name", name)
        if(this.state.selected != this.props.name) {
        this.setState({selected: name})
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


    renderArt() {
        return art.map((art, i) => {
            return (
                <ArtTile
                    name = {art["name"]}
                    logo = {art["logo"]}
                    description = {art["description"]}
                    key={i}
                />
            )
        })

    }

    render() {
        return(
        <div>
            <Header></Header>
            <Grid className = "image-gallery"
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                {this.renderArt()}
            </Grid>
        </div>
        
        )
       }
}