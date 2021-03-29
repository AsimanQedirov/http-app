import React, { Component } from 'react'
import Slider from './Slider/Slider';
import './Home.css'
import Card from './Cards/Card';
import Info from './Information/Info';
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Slider />
                <Card />
                <Info />
            </div>

        )
    }
}
