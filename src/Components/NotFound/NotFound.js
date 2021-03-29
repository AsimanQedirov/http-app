import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import './NotFound.css'
export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(null)
    }
    render() {
        return (
            <motion.div ref={this.myRef} className="notFound">
                <h1 className="display-1 text-center">Oops !</h1>
                <h4>That page doesn't exist or is unavailable</h4>
                <div className="gif">
                </div>
                <motion.button drag dragConstraints={this.myRef}><Link to="/home">Home</Link></motion.button>
            </motion.div>
        )
    }
}
