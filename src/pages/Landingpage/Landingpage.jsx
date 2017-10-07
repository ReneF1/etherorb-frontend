import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';
import { contentEn } from '../../assets';
import { formatDollar } from '../../shared/formater';
import { INTERVAL_TIMER } from '../../shared/constant';
import { BottomComponent, Footer, HeaderBar, TopComponent, RulesDialog } from '../../components';
import './Landingpage.css';
import {
    getEthUsdMinutes,
    getEthUsdNow,
    buildTimeArray,
    getGameData,
    setDeadlineDuration,
    setLastHour,
    setNextHour,
    setNow,
    setPayoutDuration,
} from '../../store/actions';

class Landingpage extends Component {

  componentWillMount() {
    this.interval = setInterval(() => {
      this.updateGameData();
    }, INTERVAL_TIMER.GAME_DATA);
    this.intervalChart = setInterval(() => {
      this.updateChartData();
    }, INTERVAL_TIMER.CHART_DATA);
    this.updateChartData();
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.intervalChart) {
      clearInterval(this.intervalChart);
    }
  }

  updateChartData() {
    Promise.all([
      this.props.setNow(),
      this.props.setLastHour(),
      this.props.setNextHour(),
      this.props.setPayoutDuration(),
      this.props.setDeadlineDuration(),
      this.props.buildTimeArray(),
    ],
        ).then(() => {
          this.props.getEthUsdNow(this.props.now);
          this.props.getEthUsdMinutes(this.props.timeArray, this.props.now);
        });
  }

  updateGameData() {
    this.props.getGameData();
  }

  render() {
    const LinearProgressStyle = {
      position: 'fixed',
      backgroundColor: '#ff3823',
      zIndex: '999999',
      display: 'none',
    };
    return (
      <DocumentTitle title={formatDollar(this.props.ETH_USD_NOW.open) + contentEn.pageTitle}>
        <div>
          <LinearProgress style={LinearProgressStyle} mode="indeterminate" />
          <HeaderBar />
          <TopComponent />
          <BottomComponent />
          <Footer />
          <RulesDialog />
          <Snackbar
            open={this.props.snackBar.open}
            message={this.props.snackBar.message}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
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
  snackBar: state.pageConfig.snackBar,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setNow,
  setLastHour,
  setNextHour,
  setPayoutDuration,
  setDeadlineDuration,
  buildTimeArray,
  getEthUsdMinutes,
  getEthUsdNow,
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
  getEthUsdMinutes: PropTypes.func.isRequired,
  getEthUsdNow: PropTypes.func.isRequired,
  getGameData: PropTypes.func.isRequired,
  ETH_USD_NOW: PropTypes.shape(),
  snackBar: PropTypes.shape(),
};
Landingpage.defaultProps = {
  now: '',
  timeArray: [],
  snackBar: {},
  ETH_USD_NOW: {
    open: '',
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
