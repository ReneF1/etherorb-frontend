import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import watch from 'redux-watch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';
import store from '../../store/';
import { contentEn } from '../../assets';
import { INTERVAL_TIMER } from '../../shared/constant';
import { BottomComponent, Footer, HeaderBar, RulesDialog, TopComponent } from '../../components';
import './Landingpage.css';
import {
    buildTimeArray,
    getEthUsdMinutes,
    getEthUsdNow,
    getUserWallet,
    getGameData,
    setDeadlineDuration,
    setLastHour,
    setNextHour,
    setNow,
    setPayoutDuration,
    openPage,
} from '../../store/actions';

class Landingpage extends Component {

  componentWillMount() {
    if (window.location.hostname.toLowerCase().search('etherorb') > 0) {
      mixpanel.init('367f7bdd4391bf1ec5c26f72d106c1d7');
    } else {
      mixpanel.init('beb63edb5e2a772522167f541ed09da1');
    }
    this.props.openPage('Landingpage');
    this.interval = setInterval(() => {
      this.updateGameData();
    }, INTERVAL_TIMER.GAME_DATA);
    this.intervalChart = setInterval(() => {
      this.updateChartData();
    }, INTERVAL_TIMER.CHART_DATA);
    this.updateChartData();
    this.intervalWallet = setInterval(() => {
      this.updateWalletData();
    }, INTERVAL_TIMER.WALLET_DATA);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.intervalChart) {
      clearInterval(this.intervalChart);
    }
    if (this.intervalWallet) {
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

  updateWalletData() {
    this.props.getUserWallet();
    const w = watch(store.getState, 'betReducer.userWallet');
    store.subscribe(w((newVal, oldVal) => {
      if (!oldVal) {
        mixpanel.track('Wallet Registered', { Wallet: newVal });
      } else {
        mixpanel.track('Wallet Changed', { Wallet: newVal });
      }
    }));
  }

  updateGameData() {
    this.props.getGameData();
  }

  render() {
    const LinearProgressStyle = {
      position: 'fixed',
      backgroundColor: '#ffffff',
      zIndex: '999999',
      display: this.props.loadingTicket ? 'initial' : 'none',
    };
    return (
      <DocumentTitle title={contentEn.pageTitle}>
        <div>
          <LinearProgress style={LinearProgressStyle} color={'#ff3823'} mode="indeterminate" />
          <HeaderBar />
          <TopComponent />
          <BottomComponent />
          <Footer />
          <RulesDialog />
          <Snackbar
            open={this.props.snackBar.open}
            message={this.props.snackBar.message}
            onRequestClose={this.handleRequestClose}
            bodyStyle={{ textAlign: 'center' }}
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
  loadingTicket: state.betReducer.loadingTicket,
  userWallet: state.betReducer.userWallet,
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
  getUserWallet,
  openPage,
}, dispatch);

Landingpage.propTypes = {
  setLastHour: PropTypes.func.isRequired,
  getUserWallet: PropTypes.func.isRequired,
  setNextHour: PropTypes.func.isRequired,
  setNow: PropTypes.func.isRequired,
  now: PropTypes.number,
  timeArray: PropTypes.arrayOf(PropTypes.number),
  setPayoutDuration: PropTypes.func.isRequired,
  openPage: PropTypes.func.isRequired,
  setDeadlineDuration: PropTypes.func.isRequired,
  buildTimeArray: PropTypes.func.isRequired,
  getEthUsdMinutes: PropTypes.func.isRequired,
  getEthUsdNow: PropTypes.func.isRequired,
  getGameData: PropTypes.func.isRequired,
  snackBar: PropTypes.shape(),
  loadingTicket: PropTypes.bool,
};
Landingpage.defaultProps = {
  now: '',
  timeArray: [],
  snackBar: {},
  loadingTicket: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
