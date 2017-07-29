/**
 * Created by renefuchtenkordt on 04.07.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { blue500, orange500 } from 'material-ui/styles/colors';
import { Col, Row } from 'react-flexbox-grid';
import { CountdownClock } from '../';

const Countdown = props =>
    (
      <div>
        <Row>
          <Col xs={6} md={6}>
            <CountdownClock
              seconds={props.countdownAsSeconds}
              color={blue500}
              description={'Current round'}
            />
          </Col>
          <Col xs={6} md={6}>
            <CountdownClock
              seconds={props.countdownAsSeconds - 600}
              color={orange500}
              description={'Time to place bets'}
            />
          </Col>
        </Row>
      </div>
    );

Countdown.propTypes = {
  countdownAsSeconds: PropTypes.number.isRequired,
};
export default Countdown;
