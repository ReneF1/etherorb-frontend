/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FlatButton from 'material-ui/FlatButton';
import DocumentTitle from 'react-document-title';
import background from '../../assets/media/bg.svg';
import './Landingpage.css';
import {contentEn, logo} from "../../assets"
import {BottomComponent, BuyingModal, Footer, HeaderBar, TopComponent} from '../../components';
import {
    buildCountdownDuration,
    buildTimeArray,
    getCryptoValue,
    getLastHour,
    getNextHour,
    getNow,
    loadPoolSize,
    placeBet,
    postBet,
    toggleBuyingDialog,
} from '../../store/actions';

class Landingpage extends Component {

    componentWillMount() {
        this.props.getNow();
        this.props.getLastHour();
        this.props.getNextHour();
        this.props.buildCountdownDuration();
        this.props.buildTimeArray();
        this.props.getCryptoValue('ETHUSDHOUR', 'ETH', 'USD', 'Kraken', [1503144000000, 1503144000000]);
        this.props.loadPoolSize();
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        const customButton = {
            buttonStyle: {borderRadius: '100px', height: '40px', lineHeight: '35px'},
            overlayStyle: {borderRadius: '100px'},
            style: {borderRadius: '100px', minWidth: '200px'}
        }
        const customButtonSecondary = {
            buttonStyle: {borderRadius: '100px', height: '40px', border: '1px solid #ff3823', lineHeight: '35px'},
            overlayStyle: {borderRadius: '100px'},
            style: {borderRadius: '100px', minWidth: '200px'}
        }
        const customButtonLarge = {
            buttonStyle: {borderRadius: '100px', height: '56px', lineHeight: '35px'},
            overlayStyle: {borderRadius: '100px'},
            style: {borderRadius: '100px', minWidth: '260px'},
            labelStyle: {fontSize: '20px', textTransform: 'Uppercase', fontWeight: 'bold'}
        }
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
            {Time: '13:00', ETHxUSD: 220},
            {Time: '13:10', ETHxUSD: 225},
            {Time: '13:20', ETHxUSD: 223},
            {Time: '13:30', ETHxUSD: 231},
            {Time: '13:40', ETHxUSD: 243, Prediction: 243},
            {Time: '13:50'},
            {Time: '14:00', Prediction: 250},
        ];
        const content = contentEn
        const buyingModalActions = [
            <FlatButton
                label={content.buyingModal.buttonSecondary}
                primary={true}
                onClick={this.props.toggleBuyingDialog}
            />,
            <FlatButton
                label={content.buyingModal.buttonPrimary}
                primary={true}
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
                        customButton={customButtonLarge}
                        toggleBuyingDialog={this.props.toggleBuyingDialog}
                        background={background}
                        {...content.topComponent}
                    />
                    <BottomComponent
                        chartData={chartData}
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
    getLastHour: PropTypes.func,
    getNextHour: PropTypes.func,
    callCryptoExchange: PropTypes.func,
    prediction: PropTypes.number,
    loadPoolSize: PropTypes.func,
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
    prediction: state.betReducer.prediction
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getNow,
    getLastHour,
    getNextHour,
    buildCountdownDuration,
    buildTimeArray,
    getCryptoValue,
    placeBet,
    loadPoolSize,
    postBet,
    toggleBuyingDialog,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
