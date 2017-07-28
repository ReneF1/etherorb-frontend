import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid';
import eth_ticket from '../../eth_ticket.png'
import './betInput.css'

class BetInput extends Component {
    render() {
        const {input: {value, onChange}} = this.props
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="ticketWrapper">
                                <img src={eth_ticket} className="orbTicketImg"/>
                                <div className="betInputWrapper">
                                    <input className="betInput" value={"$" + " " + value + " @ 20:00"}/>
                                    <button className="betInputIncButton" type="button"
                                            onClick={() => onChange(((Math.round((value * 10)) + 1) / 10).toFixed(2))}>+
                                    </button>
                                    <button className="betInputIncButton" type="button"
                                            onClick={() => onChange(((Math.round((value * 10)) - 1) / 10).toFixed(2))}>-
                                    </button>
                                </div>
                                <button className="ticketButton" type="submit">Buy Ticket</button>
                            </div>
                            <p className="priceTag">ticket price: 0.001 ETH = $ 2.00</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}


export default BetInput