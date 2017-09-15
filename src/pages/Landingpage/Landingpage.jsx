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
    buildCountdownDuration,
    buildTimeArray,
    getCryptoValue,
    getLastHour,
    getNextHour,
    getNow,
} from '../../store/actions';

class Landingpage extends Component {

  componentWillMount() {
    this.props.getNow();
    this.props.getLastHour();
    this.props.getNextHour();
    this.props.buildCountdownDuration();
    this.props.buildTimeArray();
    this.props.getCryptoValue('ETHUSDHOUR', 'ETH', 'USD', 'Kraken', [1503144000000, 1503144000000]);
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

Landingpage.propTypes = {
  getLastHour: PropTypes.func.isRequired,
  getNextHour: PropTypes.func.isRequired,
  getNow: PropTypes.func.isRequired,
  buildCountdownDuration: PropTypes.func.isRequired,
  buildTimeArray: PropTypes.func.isRequired,
  getCryptoValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  now: state.momentTime.now,
  lastHour: state.momentTime.lastHour,
  nextHour: state.momentTime.nextHour,
  countdownTimer: state.momentTime.countdownTimer,
  timeArray: state.momentTime.timeArray,
  cryptoExchange: state.cryptoExchange.response,
  poolSize: state.betReducer.poolSize,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNow,
  getLastHour,
  getNextHour,
  buildCountdownDuration,
  buildTimeArray,
  getCryptoValue,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
