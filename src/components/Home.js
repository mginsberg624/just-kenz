import React from 'react'
import Header from "./Header"
import ArtTile from "./ArtTile"
import mag from "../assets/mag.png"
import './Home.css'



export default class HomePage extends React.Component {

    
    render() {
      return (
        <div>
            <Header/>
            <div class="main-content">
                <div class = "image-container">
                        <img class = "home-image" src = {mag}/>
                </div>
            </div>    
        </div>
      )
    }
  }
