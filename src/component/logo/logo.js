import React from 'react';
import './logo.css'
import Tilt from 'react-tilt';
import img from './braines.png'

const logo = () => {
    return (
        <div className='ma4 mt0'>

            <Tilt className="Tilt br2 shadow  " options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                <img className='pa3' src={img} alt="logo" />
                </div>
            </Tilt>

        </div>
    )
}

export default logo
