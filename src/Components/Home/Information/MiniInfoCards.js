import React, { Component } from 'react';
import './MiniInfoCards.css';
export default class MiniInfoCards extends Component {

    render() {
        const info = this.props.information;
        return (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                {
                    <div className="card info my-2 my-sm-2 my-md-2 my-lg-0" >
                        <div className="card-body">
                            <h4 className="card-title">{info.title}</h4>
                            <p className="card-text">{info.body}</p>
                        </div>
                        <div className="card-footer">
                            <button>View</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
