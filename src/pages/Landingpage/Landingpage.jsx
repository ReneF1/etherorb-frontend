/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';
import DocumentTitle from 'react-document-title';
import background from '../../assets/media/bg.svg';
import './Landingpage.css';
import { contentEn, logo } from '../../assets';
import { BottomComponent, BuyingModal, Footer, HeaderBar, TopComponent } from '../../components';
import {
    buildCountdownDuration,
    buildTimeArray,
    buyTicket,
    getCryptoValue,
    getLastHour,
    getNextHour,
    getNow,
    toggleBuyingDialog,
} from '../../store/actions';

// TODO: Please try to clean it similar to the TopComponent

class Landingpage extends Component {

  componentWillMount() {
    this.props.getNow();
    this.props.getLastHour();
    this.props.getNextHour();
    this.props.buildCountdownDuration();
    this.props.buildTimeArray();
    this.props.getCryptoValue('ETHUSDHOUR', 'ETH', 'USD', 'Kraken', [1503144000000, 1503144000000]);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(this.props);
  }


  render() {
    const customButton = {
      buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '35px' },
      overlayStyle: { borderRadius: '100px' },
      style: { borderRadius: '100px', minWidth: '200px' },
    };
    const customButtonSecondary = {
      buttonStyle: { borderRadius: '100px', height: '40px', border: '1px solid #ff3823', lineHeight: '35px' },
      overlayStyle: { borderRadius: '100px' },
      style: { borderRadius: '100px', minWidth: '200px' },
    };
    const historyListConfig = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      showCheckboxes: false,
      selectable: false,
      multiSelectable: false,
      height: 'auto',
    };
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
      },
      {
        address: '0xeB3a84E326DE0cF8976fDfB0231AD31Ed8f19f28',
        prediction: '$ 227.50',
        timestamp: '1504524908741',
      },
      {
        address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
        prediction: '$ 229.70',
        timestamp: '1504524913061',
      },
      {
        address: '0xFa705A686fe2d02D11cFc35fB5fEE40594ABD1B1',
        prediction: '$ 212.30',
        timestamp: '1504524916965',
      },
      {
        address: '0x35A1eea8AE6f734EfE14fc3715Ab51785D8D1D84',
        prediction: '$ 217.90',
        timestamp: '1504524920701',
      },
      {
        address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
        prediction: '$ 218.90',
        timestamp: '1504524924943',
      },
      {
        address: '0xf67757E7C326b5c1Bb8C0012B2644661011580E7',
        prediction: '$ 205.00',
        timestamp: '1504524929105',
      },
    ];
    const content = contentEn;
    const buyingModalActions = [
      <FlatButton
        label={content.buyingModal.buttonSecondary}
        primary
        onClick={this.props.toggleBuyingDialog}
      />,
      <FlatButton
        label={content.buyingModal.buttonPrimary}
        primary
        disabled={false}
        onClick={this.props.toggleBuyingDialog}
      />,
    ];
    const infoModalActions = [
      <FlatButton
        label={content.infoModal.buttonPrimary}
        primary
        disabled={false}
        onClick={this.props.toggleBuyingDialog}
      />,
    ];
    return (
      <DocumentTitle
        title={content.pageTitle}
      >
        <div>
          <HeaderBar
            logo={logo}
            customButton={customButton}
            toggleBuyingDialog={this.props.toggleBuyingDialog}
            {...content.headerBar}
          />
          <TopComponent
            toggleBuyingDialog={this.props.toggleBuyingDialog}
            buyTicket={this.props.buyTicket}
            background={background}
          />
          <BottomComponent
            chartData={chartData}
            historyListData={historyListData}
            historyListConfig={historyListConfig}
            customButton={customButton}
            customButtonSecondary={customButtonSecondary}
            toggleBuyingDialog={this.props.toggleBuyingDialog}
            {...content.bottomComponent}
          />
          <BuyingModal
            open={this.props.buyingDialog.open}
            toggleBuyingDialog={this.props.toggleBuyingDialog}
            actions={buyingModalActions}
            {...content.buyingModal}
          />
          <Footer
            {...content.footer}
          />
        </div>
      </DocumentTitle>
    );
  }
}

Landingpage.propTypes = {
  getLastHour: PropTypes.func.isRequired,
  getNextHour: PropTypes.func.isRequired,
  callCryptoExchange: PropTypes.func.isRequired,
  prediction: PropTypes.number.isRequired,
  loadPoolSize: PropTypes.func.isRequired,
  getNow: PropTypes.func.isRequired,
  buildCountdownDuration: PropTypes.func.isRequired,
  buildTimeArray: PropTypes.func.isRequired,
  getCryptoValue: PropTypes.func.isRequired,
  toggleBuyingDialog: PropTypes.func.isRequired,
  buyTicket: PropTypes.func.isRequired,
  buyingDialog: PropTypes.shape({
    open: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  buyingDialog: state.pageConfig.buyingDialog,
  now: state.momentTime.now,
  lastHour: state.momentTime.lastHour,
  nextHour: state.momentTime.nextHour,
  countdownTimer: state.momentTime.countdownTimer,
  timeArray: state.momentTime.timeArray,
  cryptoExchange: state.cryptoExchange.response,
  poolSize: state.betReducer.poolSize,
  prediction: state.betReducer.prediction,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNow,
  getLastHour,
  getNextHour,
  buildCountdownDuration,
  buildTimeArray,
  getCryptoValue,
  toggleBuyingDialog,
  buyTicket,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
