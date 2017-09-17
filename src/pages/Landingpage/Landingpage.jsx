/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import './Landingpage.css';
import { contentEn } from '../../assets';
import { BottomComponent, Footer, HeaderBar, TopComponent } from '../../components';
import {
    setPayoutDuration,
    setDeadlineDuration,
    buildTimeArray,
    buildPriceHistory,
    setLastHour,
    setNextHour,
    setNow,
    getContractData,
} from '../../store/actions';

class Landingpage extends Component {

  componentWillMount() {
    this.props.setNow();
    this.props.setLastHour();
    this.props.setNextHour();
    this.props.setPayoutDuration();
    this.props.setDeadlineDuration();
    this.props.buildTimeArray();
    this.props.buildPriceHistory('ETH_USD_HOUR', 'ETH', 'USD', 'Kraken', [1503144000000, 1503144000000]);
    this.props.buildPriceHistory('ETH_USD_NOW', 'ETH', 'USD', 'Kraken', []);
    this.props.getContractData();
  }

  render() {
    return (
      <DocumentTitle title={contentEn.pageTitle}>
        <div>
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
  payoutDuration: state.momentTime.payoutDuration,
  timeArray: state.momentTime.timeArray,
  cryptoExchange: state.cryptoExchange.response,
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
  getContractData,
}, dispatch);

Landingpage.propTypes = {
  setLastHour: PropTypes.func.isRequired,
  setNextHour: PropTypes.func.isRequired,
  setNow: PropTypes.func.isRequired,
  setPayoutDuration: PropTypes.func.isRequired,
  setDeadlineDuration: PropTypes.func.isRequired,
  buildTimeArray: PropTypes.func.isRequired,
  buildPriceHistory: PropTypes.func.isRequired,
  getContractData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
