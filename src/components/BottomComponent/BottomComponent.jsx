import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
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

const BottomComponent = props =>
    (
      <div className="bottomComponent">
        <div className="bottomComponent__container">
          <Grid fluid>
            <Row className="bottomComponent__row">
              <Col xs={12} md={12}>
                <h2
                  className="bottomComponent__headline"
                  style={{
                    color: props.muiTheme.palette.accent1Color,
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
                    value={formatDollar(280.50)}
                  />
                  <InfoTag
                    icon={'shopping_cart'}
                    text={contentEn.bottomComponent.infoTags[1]}
                    value={contentEn.bottomComponent.values[1]}
                  />
                  <InfoTag
                    icon={'timelapse'}
                    text={contentEn.bottomComponent.infoTags[2]}
                    value={'here'}
                  />
                  <InfoTag
                    icon={'monetization_on'}
                    text={contentEn.bottomComponent.infoTags[3]}
                    value={ethToDollar(props.ETH_USD_NOW[0].val, 60)}
                  />
                  <InfoTag
                    icon={'timer_off'}
                    text={contentEn.bottomComponent.infoTags[4]}
                    value={'here'}
                  />
                  <Timer timestamp={props.deadlineDuration} id={'deadlineTimer'} /><br />
                  <Timer timestamp={props.payoutDuration} id={'payoutTimer'} /><br />
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
                  <HistoryList />
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
  payoutDuration: state.momentTime.payoutDuration,
  deadlineDuration: state.momentTime.deadlineDuration,
  ETH_USD_NOW: state.cryptoExchange.ETH_USD_NOW,
});

export default connect(mapStateToProps)(muiThemeable()(BottomComponent));
