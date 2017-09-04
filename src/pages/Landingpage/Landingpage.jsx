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
import {BottomComponent, Footer, HeaderBar, TopComponent} from '../../components';
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
        const historyListData = [
            {
                address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
                prediction: '$ 222.10',
                timestamp: '1504524903805'
            },
            {
                address: '0xeB3a84E326DE0cF8976fDfB0231AD31Ed8f19f28',
                prediction: '$ 227.50',
                timestamp: '1504524908741'
            },
            {
                address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
                prediction: '$ 229.70',
                timestamp: '1504524913061'
            },
            {
                address: '0xFa705A686fe2d02D11cFc35fB5fEE40594ABD1B1',
                prediction: '$ 212.30',
                timestamp: '1504524916965'
            },
            {
                address: '0x35A1eea8AE6f734EfE14fc3715Ab51785D8D1D84',
                prediction: '$ 217.90',
                timestamp: '1504524920701'
            },
            {
                address: '0x22b854DBF5c9A20f5C3374E814733060C942AeDf',
                prediction: '$ 218.90',
                timestamp: '1504524924943'
            },
            {
                address: '0xf67757E7C326b5c1Bb8C0012B2644661011580E7',
                prediction: '$ 205.00',
                timestamp: '1504524929105'
            },
        ]
        return (
            <DocumentTitle
                title={`${'EtherOrb $'}${this.props.prediction} @ ${this.props.nextHour}`}
            >
                <div>
                    <HeaderBar
                        logo={ethLogo}
                        title={["EtherOrb", ".com"]}
                        customButton={customButton}
                        buttonLabel="Buy Your Ticket"
                    />
                    <TopComponent
                        customButton={customButtonLarge}
                        background={background}
                        CountdownClockDescription={['Win Now', '$ 100.000']}
                        buttonLabel="Buy Your Ticket"
                    />
                    <BottomComponent
                        headline={"Current Round"}
                        historyListHeader={"Latest Predictions"}
                        historyListData={historyListData}
                        historyListConfig={historyListConfig}
                        bottomCTAHeadline={["100% Trustless Blockchain Lottery",
                            <br/>, "Open Source, Verified Contract"]}
                        customButton={customButton}
                        customButtonSecondary={customButtonSecondary}
                        buttonLabel={["Buy Your Ticket", "Read the Rules"]}
                    />
                    <Footer
                        disclaimer={"EtherOrb.com owns itself.\n" +
                        "It is an autonomous entity, executing as code on the Ethereum (ETH) P2P network.\n" +
                        "It lives in the Ether; in the realm of ideas and magic.\n" +
                        "Enjoy it."}
                        title={"EtherOrb.com"}
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
