import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import './Landingpage.css';
import { contentEn } from '../../assets';
import { formatDollar } from '../../shared/formater';
import { BottomComponent, Footer, HeaderBar, TopComponent } from '../../components';
import {
    buildPriceHistory,
    buildTimeArray,
    setDeadlineDuration,
    setLastHour,
    setNextHour,
    setNow,
    setPayoutDuration,
} from '../../store/actions';

class Landingpage extends Component {

  componentWillMount() {
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
        })
            .then(() => {
              this.props.buildPriceHistory('ETH_USD_HOUR', 'ETH', 'USD', 'Kraken', this.props.timeArray, this.props.now);
            });
  }

  render() {
    return (
      <DocumentTitle title={contentEn.pageTitle + formatDollar(280.50)}>
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
}, dispatch);

Landingpage.propTypes = {
  setLastHour: PropTypes.func.isRequired,
  setNextHour: PropTypes.func.isRequired,
  setNow: PropTypes.func.isRequired,
  now: PropTypes.string,
  timeArray: PropTypes.arrayOf(PropTypes.string),
  setPayoutDuration: PropTypes.func.isRequired,
  setDeadlineDuration: PropTypes.func.isRequired,
  buildTimeArray: PropTypes.func.isRequired,
  buildPriceHistory: PropTypes.func.isRequired,
};
Landingpage.defaultProps = {
  now: '',
  timeArray: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
