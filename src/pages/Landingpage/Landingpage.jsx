/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DocumentTitle from 'react-document-title';
import ethLogo from '../../logo.svg';
import background from '../../bg.svg';
import './Landingpage.css';
import {Footer, HeaderBar, TopComponent, BottomComponent} from '../../components';
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
} from '../../store/actions';

class Landingpage extends Component {

    componentWillMount() {
        this.props.getNow();
        this.props.getLastHour();
        this.props.getNextHour();
        this.props.buildCountdownDuration()
        this.props.buildTimeArray()
        this.props.getCryptoValue('ETHUSDHOUR', 'ETH', 'USD', 'Kraken', [1503144000000, 1503144000000]);
        this.props.loadPoolSize();
    }

    render() {
        const customButton = {
            buttonStyle: {borderRadius: '100px', height: '40px', lineHeight: '35px'},
            overlayStyle: {borderRadius: '100px'},
            style: {borderRadius: '100px', minWidth: '200px'}
        }
        const customButtonLarge = {
            buttonStyle: {borderRadius: '100px', height: '56px', lineHeight: '35px'},
            overlayStyle: {borderRadius: '100px'},
            style: {borderRadius: '100px', minWidth: '260px'},
            labelStyle: {fontSize: '20px', textTransform: 'Uppercase', fontWeight: 'bold'}
        }
        const historyListData = [
            {
                name: 'John Smith',
                status: 'Employed',
            },
            {
                name: 'Randal White',
                status: 'Unemployed',
            },
            {
                name: 'Stephanie Sanders',
                status: 'Employed',
            },
            {
                name: 'Steve Brown',
                status: 'Employed',
            },
            {
                name: 'Joyce Whitten',
                status: 'Employed',
            },
            {
                name: 'Samuel Roberts',
                status: 'Employed',
            },
            {
                name: 'Adam Moore',
                status: 'Employed',
            },
        ]
        return (
            <DocumentTitle title={`${'EtherOrb $'}${this.props.prediction} @ ${this.props.nextHour}`}>
                <div>
                    <HeaderBar logo={ethLogo} title={["EtherOrb", ".com"]}
                               customButton={customButton} buttonLabel="Buy Your Ticket"/>
                    <TopComponent headline={["The first Ethereum", <br />, "Prediciton Lottery"]} customButton={customButtonLarge} background={background} CountdownClockDescription={['Win Now', '$ 100.000']}
                                  buttonLabel="Buy Your Ticket"/>
                    <BottomComponent headline={"Current Round"} historyListHeader={"Recent predictions"} historyListData={historyListData}/>
                    <Footer/>
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
    placeBet,
    loadPoolSize,
    postBet,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
