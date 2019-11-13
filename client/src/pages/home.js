import React, { Component } from 'react'

class Home extends Component {


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Home</p>
                <img style={imageStyle} alt="home" src="https://memeshappen.com/media/created/home-sweet-home--meme-53151.jpg" />
            </div>
        )

    }
}

export default Home
