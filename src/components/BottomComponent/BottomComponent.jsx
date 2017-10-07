import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import './BottomComponent.css';
import { ethToDollar, formatDollar } from '../../shared/formater';
import { InfoTag, Chart, HistoryList, BottomCTA, Timer } from '../';
import { contentEn } from '../../assets';

const BottomComponent = ({
                             contract,
                             payoutDuration,
                             deadlineDuration,
                             ETH_USD_NOW,
                             ETH_USD_HOUR,
                             muiTheme,
                             nextHour }) =>
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
                    value={ethToDollar(ETH_USD_NOW.open, contract.potSize || 0)}
                  />
                  <InfoTag
                    icon={'timer_off'}
                    text={contentEn.bottomComponent.infoTags[4]}
                    value={
                      <Timer timestamp={deadlineDuration} id={'deadlineTimer'} />
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__paddingWrapper">
                  <Chart
                    chartData={ETH_USD_HOUR}
                    prediction={contract.prediction}
                    nextHour={nextHour}
                  />
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
  contract: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  ETH_USD_NOW: PropTypes.shape(),
  ETH_USD_HOUR: PropTypes.arrayOf(PropTypes.object),
  deadlineDuration: PropTypes.number,
  payoutDuration: PropTypes.number,
  nextHour: PropTypes.shape(),
};
BottomComponent.defaultProps = {
  ETH_USD_NOW: {
    open: '',
  },
  ETH_USD_HOUR: [],
  deadlineDuration: 0,
  payoutDuration: 0,
  nextHour: {},
};

const mapStateToProps = state => ({
  contract: state.betReducer,
  payoutDuration: state.momentTime.payoutDuration,
  deadlineDuration: state.momentTime.deadlineDuration,
  ETH_USD_NOW: state.cryptoExchange.ETH_USD_NOW,
  ETH_USD_HOUR: state.cryptoExchange.ETH_USD_HOUR,
  nextHour: state.momentTime.nextHour,
});

export default connect(mapStateToProps)(muiThemeable()(BottomComponent));
