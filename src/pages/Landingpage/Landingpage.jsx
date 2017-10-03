import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import './Landingpage.css';
import LinearProgress from 'material-ui/LinearProgress';
import { contentEn } from '../../assets';
import { formatDollar } from '../../shared/formater';
import { INTERVAL_TIMER } from '../../shared/constant';
import { BottomComponent, Footer, HeaderBar, TopComponent } from '../../components';
import {
    buildPriceHistory,
    buildTimeArray,
    setDeadlineDuration,
    setLastHour,
    setNextHour,
    setNow,
    setPayoutDuration,
    getGameData,
} from '../../store/actions';

class Landingpage extends Component {

  componentWillMount() {
    this.interval = setInterval(() => {
      this.updateGameData();
    }, INTERVAL_TIMER.GAME_DATA);
    this.intervalChart = setInterval(()=>{
      this.updateChartData();
    }, INTERVAL_TIMER.CHART_DATA);
    Promise.all([
      this.props.setNow(),
      this.props.setLastHour(),
      this.props.setNextHour(),
      this.props.setPayoutDuration(),
      this.props.setDeadlineDuration(),
      this.props.buildTimeArray(),
      this.props.getGameData(),
    ],
        ).then(() => {
          this.props.buildPriceHistory('ETH_USD_NOW', 'ETH', 'USD', 'Kraken', [this.props.now], this.props.now);
          this.props.buildPriceHistory('ETH_USD_HOUR', 'ETH', 'USD', 'Kraken', this.props.timeArray, this.props.now);
        });
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if(this.intervalChart){
      clearInterval(this.intervalChart);
    }
  }
  updateChartData(){
    Promise.all([
          this.props.setNow(),
          this.props.setLastHour(),
          this.props.setNextHour(),
          this.props.setPayoutDuration(),
          this.props.setDeadlineDuration(),
          this.props.buildTimeArray(),
        ],
    ).then(() => {
      this.props.buildPriceHistory('ETH_USD_NOW', 'ETH', 'USD', 'Kraken', [this.props.now], this.props.now);
      this.props.buildPriceHistory('ETH_USD_HOUR', 'ETH', 'USD', 'Kraken', this.props.timeArray, this.props.now);
    });
  }

  updateGameData() {
    this.props.getGameData();
  }

  render() {
      const LinearProgressStyle = {
          'position': 'fixed',
          'backgroundColor': '#ff3823',
          'zIndex': '999999',
          'display': 'none',
      }
    return (
      <DocumentTitle title={contentEn.pageTitle + formatDollar(this.props.ETH_USD_NOW[0].open)}>
        <div>
          <LinearProgress style={LinearProgressStyle} mode="indeterminate" />
          <HeaderBar />
          <TopComponent />
          <BottomComponent />
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  now: state.momentTime.now,
  lastHour: state.momentTime.lastHour,
  nextHour: state.momentTime.nextHour,
  ETH_USD_NOW: state.cryptoExchange.ETH_USD_NOW,
  timeArray: state.momentTime.timeArray,
  poolSize: state.betReducer.poolSize,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setNow,
  setLastHour,
  setNextHour,
  setPayoutDuration,
  setDeadlineDuration,
  buildTimeArray,
  buildPriceHistory,
  getGameData,
}, dispatch);

Landingpage.propTypes = {
  setLastHour: PropTypes.func.isRequired,
  setNextHour: PropTypes.func.isRequired,
  setNow: PropTypes.func.isRequired,
  now: PropTypes.number,
  timeArray: PropTypes.arrayOf(PropTypes.number),
  setPayoutDuration: PropTypes.func.isRequired,
  setDeadlineDuration: PropTypes.func.isRequired,
  buildTimeArray: PropTypes.func.isRequired,
  buildPriceHistory: PropTypes.func.isRequired,
  getGameData: PropTypes.func.isRequired,
  ETH_USD_NOW: PropTypes.arrayOf(PropTypes.shape),
};
Landingpage.defaultProps = {
  now: '',
  timeArray: [],
    ETH_USD_NOW: [
        {
            open: '',
        },
    ],
};

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
