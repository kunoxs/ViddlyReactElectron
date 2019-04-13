import React, { Component } from 'react';
import ImageFader from './ImageFader';

class SmartBg extends Component {
    render() {
        return(
            <div className="SmartBg">
                <ImageFader />
                <img className="Thumbnail" src="./img/monsters.jpg" alt="test"/>
            </div>
        );
    }
} 

export default SmartBg;