import React, { Component } from 'react'
import axios from 'axios';
const HugeContext = React.createContext();
export default class MyContext extends Component {
    state = {
        slider: [],
        cards : [],
        informations : [],
        sideBar : false
    }
    componentDidMount = async () => {
        const response = await axios.get('http://localhost:5000/slider')
        this.setState({slider : response.data})
        const response1 = await axios.get('http://localhost:5000/cards')
        this.setState({cards : response1.data})
        const response2 = await axios.get('http://localhost:5000/informations');
        this.setState({informations : response2.data})
    }
    render() {
        return (
            <HugeContext.Provider value={this.state}>
                {this.props.children}
            </HugeContext.Provider>
        )
    }
}
const MyConsumer = HugeContext.Consumer;
export { MyConsumer };


