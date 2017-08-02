/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import {white} from 'material-ui/styles/colors';
import './Landingpage.css';
import {BetInput, Countdown, Footer, HeaderBar, PredictionHead} from '../../components';
import {loadEthUsd, loadEthUsdHistory} from '../../store/actions/ethActions';
import {loadPoolSize} from '../../store/actions/betActions';
import { LineChart, Line } from 'recharts';

class Landingpage extends Component {

    componentWillMount() {
        const moment = extendMoment(Moment);
        this.props.loadEthUsd();
        this.props.loadPoolSize();
        const roundUp = moment().minute() || moment().second() || moment().millisecond() ? moment().add(1, 'hour').startOf('hour') : moment().startOf('hour');
        const roundDown = moment().minute() || moment().second() || moment().millisecond() ? moment().subtract(0, 'hour').startOf('hour') : moment().startOf('hour');
        const duration = moment.duration(moment(roundUp).format('x') - moment().format('x'), 'milliseconds');

        const start = new Date(roundDown);
        const end   = new Date(roundUp);
        const range = moment.range(start, end);

        const minutes = Array.from(range.by('minute'));
        const hourArray = minutes.map(m => m.format('x'))
        const usdArray = []

        for (let value of hourArray) {
            let timestamp = value
            this.props.loadEthUsdHistory(value).then(function(res){usdArray.push({date: timestamp, close: res.payload.data.ETH.USD})});
        }

        this.setState({
            roundUp: moment(roundUp).format('HH:mm'),
            countdown: `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`,
            countdownAsSeconds: moment.duration(duration).asSeconds(),
            usdArray: usdArray,
        });
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
                    <HeaderBar title="EtherOrb" ethUsd={this.props.ethUsd}/>
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
                                        <LineChart width={400} height={400} data={this.state.usdArray}>
                                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                        </LineChart>
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
    prediction: PropTypes.number,
    ethUsd: PropTypes.string.isRequired,
    loadEthUsd: PropTypes.func.isRequired,
    loadPoolSize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    ethUsd: state.ethReducer.ethUsd,
    loading: state.ethReducer.loading,
    poolSize: state.betReducer.poolSize,
    prediction: state.betReducer.prediction,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadEthUsd,
    loadEthUsdHistory,
    loadPoolSize,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
