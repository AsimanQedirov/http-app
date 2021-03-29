import React, { Component } from 'react'
import { MyConsumer } from '../../../Context/Context';
import { LoremIpsum } from 'react-lorem-ipsum';
import '../Cards/Card.css'
export default class Card extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="worker">Our Worker</h4>
                <LoremIpsum />
                <MyConsumer>
                    {
                        value => {
                            const { cards } = value;
                            return <div className="row py-3 py-md-5">
                                {
                                    cards.map((card) => <div key={card.id} className="col-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="card my-2 my-sm-2 my-md-2 my-lg-0">
                                            <div className="mother"><img src={card.image} className="card-img-top img-fluid" alt="cards" /></div>
                                            <div className="card-body">
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text">{card.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        }
                    }
                </MyConsumer>
            </div>
        )
    }
}
