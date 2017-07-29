import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import ethTicket from '../../eth_ticket.png';
import './betInput.css';

const BetInput = ({ value, onChange }) =>
    (<div>
      <Grid fluid>
        <Row>
          <Col xs={12} md={12}>
            <div className="ticketWrapper">
              <img src={ethTicket} className="orbTicketImg" alt="" />
              <div className="betInputWrapper">
                <input className="betInput" defaultValue={`${'$ '}${value} @ 20:00`} />
                <button
                  className="betInputIncButton"
                  type="button"
                  onClick={() => onChange(((Math.round((value * 10)) + 1) / 10).toFixed(2))}
                >+
                </button>
                <button
                  className="betInputIncButton"
                  type="button"
                  onClick={() => onChange(((Math.round((value * 10)) - 1) / 10).toFixed(2))}
                >-
                </button>
              </div>
              <button className="ticketButton" type="submit">Buy Ticket</button>
            </div>
            <p className="priceTag">ticket price: 0.001 ETH = $ 2.00</p>
          </Col>
        </Row>
      </Grid>
    </div>);

export default BetInput;
