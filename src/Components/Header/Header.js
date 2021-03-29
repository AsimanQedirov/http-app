import React, { Component } from 'react';
import img from "../../images/logo.png";
import { Link } from 'react-router-dom';
import './Header.css';
import { GrMenu, GrClose} from 'react-icons/gr';
import Li from './Li';
import { motion } from 'framer-motion';

const variantMenu = {
    open: {
        opacity: 1,
        x: 0,
        height: '100%',
        display: 'block',
    },
    closed: {
        opacity: 0,
        x: '-100%',
        display: 'none'
    }
}
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.headerRef = React.createRef()
    }
    state = {
        isOpen: false,
        clientH: 0
    }
    changeBoolean = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    componentDidMount() {
        this.setState({ clientH: this.headerRef.current.clientHeight })
    }
    render() {
        console.log(this.props)
        return (
            <header ref={this.headerRef}>
                <div className="logo">
                    <Link to="/"><img src={img} alt="logo" /></Link>
                </div>
                <div className="form">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="write here..." aria-describedby="basic-addon2" />
                            <button><i className="fas fa-search" id="basic-addon2"></i></button>
                        </div>
                    </form>
                </div>
                <div className="buttons">
                    <Link to="/user"><motion.i 
                    whileHover={{
                        rotate:[0,20,-20,20,-20,0]
                    }}
                    className="far fa-user"></motion.i></Link>
                    <motion.button className={'svg'}
                        whileTap = {{rotate : 360}}
                        onClick={this.changeBoolean}>{this.state.isOpen ? <GrClose /> : <GrMenu />}</motion.button>
                </div> <motion.nav style={{ top: this.state.clientH }} variants={variantMenu}
                    initial={false}
                    transition={{ type: 'spring', duration: 0.5 }}
                    animate={this.state.isOpen ? "open" : "closed"}
                    className="navbar-nav">
                    <ul className="nav-links">
                        {
                            Li.map((li) => {
                                return <motion.li whileHover={{translateX : 5}} key={li.id} className="nav-item"><i className={li.icon}></i><Link to={`/${li.url.toLowerCase()}`}>{li.url}</Link></motion.li>
                            })
                        }
                    </ul>
                </motion.nav>
                <div className="full-div" onClick={this.changeBoolean}></div>
            </header>
        )
    }
}
