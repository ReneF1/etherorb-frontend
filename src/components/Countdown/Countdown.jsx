/**
 * Created by renefuchtenkordt on 04.07.17.
 */
import React, {Component} from 'react';
import {blue500,orange500} from 'material-ui/styles/colors';
import {Col, Row} from 'react-flexbox-grid';
import {CountdownClock} from '../'

class countdown extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={6}>
                        <CountdownClock seconds={this.props.countdownAsSeconds} color={blue500}
                                        description={"Current round"}/>
                    </Col>
                    <Col xs={6} md={6}>
                        <CountdownClock seconds={this.props.countdownAsSeconds - 600} color={orange500} description={"Time to place bets"}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default countdown;
