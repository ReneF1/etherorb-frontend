/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import ethLogo from '../../logo.svg';
import {white} from 'material-ui/styles/colors';
import './Landingpage.css';
import {BetInput, Countdown, EthChart, Footer, HeaderBar, PredictionHead} from '../../components';
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
        const paperAccent = {
            margin: '10px',
            padding: '10px',
            color: white,
        };
        const customButton = {
            buttonStyle: {borderRadius: '100px', height: '40px', lineHeight: '35px'},
            overlayStyle: {borderRadius: '100px'},
            style: {borderRadius: '100px', minWidth: '200px'}
        }
        return (
            <DocumentTitle title={`${'EtherOrb $'}${this.props.prediction} @ ${this.props.nextHour}`}>
                <div>
                    <HeaderBar logo={ethLogo} titlePrimary="EtherOrb" titleSecondary=".com"
                               customButton={customButton} buttonLabel="Buy Ticket"/>
                    <Paper zDepth={0}>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} md={12}>
                                    <PredictionHead
                                        nextRound={this.props.nextHour}
                                        prediction={this.props.prediction}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Paper zDepth={0}>
                                        <Countdown countdownAsSeconds={600}/>
                                    </Paper>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Paper zDepth={0} style={paperAccent}>
                                        <BetInput/>
                                    </Paper>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Paper zDepth={1} style={paperAccent}>
                                        <EthChart/>
                                    </Paper>
                                </Col>
                            </Row>
                        </Grid>
                    </Paper>
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
