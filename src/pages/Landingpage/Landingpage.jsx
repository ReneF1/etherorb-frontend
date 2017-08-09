/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Moment from 'moment';
import {extendMoment} from 'moment-range';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import {white} from 'material-ui/styles/colors';
import './Landingpage.css';
import {BetInput, Countdown, EthChart, Footer, HeaderBar, PredictionHead} from '../../components';
import {callCryptoExchange, loadPoolSize} from '../../store/actions';

class Landingpage extends Component {

    componentWillMount() {
        const moment = extendMoment(Moment);
        this.props.callCryptoExchange(1,'ETH','USD','Kraken',moment());

        this.props.loadPoolSize();
        const roundUp = moment().minute() || moment().second() || moment().millisecond() ? moment().add(1, 'hour').startOf('hour') : moment().startOf('hour');
        const roundDown = moment().minute() || moment().second() || moment().millisecond() ? moment().subtract(0, 'hour').startOf('hour') : moment().startOf('hour');
        const duration = moment.duration(moment(roundUp).format('x') - moment().format('x'), 'milliseconds');

        const start = new Date(roundDown);
        const end = new Date(roundUp);
        const range = moment.range(start, end);

        const minutes = Array.from(range.by('minute'));
        const hourArray = minutes.map(m => m.format('x'))
        const usdArray = []

        for (let value of hourArray) {
            let timestamp = value
            this.props.callCryptoExchange(2,'ETH','USD','Kraken',value).then(function (res) {
                usdArray.push({date: timestamp, close: res.payload.response})
            });
        }
        this.setState({
            roundUp: moment(roundUp).format('HH:mm'),
            countdown: `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`,
            countdownAsSeconds: moment.duration(duration).asSeconds(),
            usdArray: usdArray,
        });
    }

    componentWillReceiveProps(){
        console.log(this.props)
    }

    render() {
        const paperAccent = {
            margin: '10px',
            padding: '10px',
            color: white,
        };
        return (
            <DocumentTitle title={`${'EtherOrb $'}${this.props.prediction} @ ${this.state.roundUp}`}>
                <div>
                    <HeaderBar title="EtherOrb" ethUsd={this.props.cryptoExchange.response}/>
                    <Paper zDepth={0}>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} md={12}>
                                    <PredictionHead
                                        nextRound={this.state.roundUp}
                                        prediction={this.props.prediction}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Paper zDepth={0}>
                                        <Countdown countdownAsSeconds={this.state.countdownAsSeconds}/>
                                    </Paper>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Paper zDepth={0} style={paperAccent}>
                                        <BetInput/>
                                    </Paper>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Paper zDepth={1} style={paperAccent}>
                                        <EthChart data={this.state.usdArray}/>
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
    callCryptoExchange: PropTypes.func,
    prediction: PropTypes.number,
    cryptoExchange: PropTypes.string.isRequired,
    loadPoolSize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    cryptoExchange: state.cryptoExchange,
    loading: state.cryptoExchange.loading,
    poolSize: state.betReducer.poolSize,
    prediction: state.betReducer.prediction,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    callCryptoExchange,
    loadPoolSize,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
