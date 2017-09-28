import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import shortid from 'shortid';
import './BottomComponent.css';
import { ethToDollar, formatDollar } from '../../shared/formater';
import { InfoTag, Chart, HistoryList, BottomCTA, Timer } from '../';
import { contentEn } from '../../assets';

const chartData = [
    { Time: '13:00', ETHxUSD: 220 },
    { Time: '13:10', ETHxUSD: 225 },
    { Time: '13:20', ETHxUSD: 223 },
    { Time: '13:30', ETHxUSD: 231 },
    { Time: '13:40', ETHxUSD: 243, Prediction: 243 },
    { Time: '13:50' },
    { Time: '14:00', Prediction: 250 },
];

const historyListData = [
  {
    address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
    prediction: '$ 222.10',
    timestamp: '1504524903805',
    id: shortid.generate(),
  },
  {
    address: '0xeB3a84E326DE0cF8976fDfB0231AD31Ed8f19f28',
    prediction: '$ 227.50',
    timestamp: '1504524908741',
    id: shortid.generate(),
  },
  {
    address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
    prediction: '$ 229.70',
    timestamp: '1504524913061',
    id: shortid.generate(),
  },
  {
    address: '0xFa705A686fe2d02D11cFc35fB5fEE40594ABD1B1',
    prediction: '$ 212.30',
    timestamp: '1504524916965',
    id: shortid.generate(),
  },
  {
    address: '0x35A1eea8AE6f734EfE14fc3715Ab51785D8D1D84',
    prediction: '$ 217.90',
    timestamp: '1504524920701',
    id: shortid.generate(),
  },
  {
    address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
    prediction: '$ 218.90',
    timestamp: '1504524924943',
    id: shortid.generate(),
  },
  {
    address: '0xf67757E7C326b5c1Bb8C0012B2644661011580E7',
    prediction: '$ 205.00',
    timestamp: '1504524929105',
    id: shortid.generate(),
  },
];

const BottomComponent = ({ contract, payoutDuration, deadlineDuration, ETH_USD_NOW, muiTheme }) =>
    (
      <div className="bottomComponent">
        <div className="bottomComponent__container">
          <Grid fluid>
            <Row className="bottomComponent__row">
              <Col xs={12} md={12}>
                <h2
                  className="bottomComponent__headline"
                  style={{
                    color: muiTheme.palette.accent1Color,
                  }}
                >{contentEn.bottomComponent.headline}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__buttonWrapper bottomComponent__paddingWrapper">
                  <InfoTag
                    icon={'av_timer'}
                    text={contentEn.bottomComponent.infoTags[0]}
                    value={contract.prediction ?
                        formatDollar(contract.prediction) : formatDollar(0)}
                  />
                  <InfoTag
                    icon={'shopping_cart'}
                    text={contentEn.bottomComponent.infoTags[1]}
                    value={contract.poolSize}
                  />
                  <InfoTag
                    icon={'timelapse'}
                    text={contentEn.bottomComponent.infoTags[2]}
                    value={<Timer timestamp={payoutDuration} id={'payoutTimer'} />}
                  />
                  <InfoTag
                    icon={'monetization_on'}
                    text={contentEn.bottomComponent.infoTags[3]}
                    value={ethToDollar(ETH_USD_NOW[0].val, contract.potSize || 0)}
                  />
                  <InfoTag
                    icon={'timer_off'}
                    text={contentEn.bottomComponent.infoTags[4]}
                    value={<Timer timestamp={deadlineDuration} id={'deadlineTimer'} />}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__paddingWrapper">
                  <Chart chartData={chartData} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__paddingWrapper">
                  <HistoryList data={historyListData} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__paddingWrapper">
                  <BottomCTA />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );

BottomComponent.propTypes = {
  contract: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  ETH_USD_NOW: PropTypes.arrayOf(PropTypes.shape),
  deadlineDuration: PropTypes.number,
  payoutDuration: PropTypes.number,
};
BottomComponent.defaultProps = {
  ETH_USD_NOW: [
    {
      val: '',
      timestamp: '',
    },
  ],
  deadlineDuration: 0,
  payoutDuration: 0,
};

const mapStateToProps = state => ({
  contract: state.betReducer,
  payoutDuration: state.momentTime.payoutDuration,
  deadlineDuration: state.momentTime.deadlineDuration,
  ETH_USD_NOW: state.cryptoExchange.ETH_USD_NOW,
});

export default connect(mapStateToProps)(muiThemeable()(BottomComponent));
