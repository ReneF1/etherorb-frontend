/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Grid, Row} from 'react-flexbox-grid';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title'
import {Values} from 'redux-form-website-template';
import {white} from 'material-ui/styles/colors';
import './Landingpage.css';
import {BetInput, Countdown, Footer, HeaderBar, PredictionHead} from '../../components';
import loadEthUsd from "../../store/actions/ethActions";
import {loadPoolSize} from "../../store/actions/betActions";

class Landingpage extends Component {

    componentWillMount() {
        let now = moment();
        let roundUp = now.minute() || now.second() || now.millisecond() ? now.add(1, 'hour').startOf('hour') : now.startOf('hour');
        let duration = moment.duration(moment(roundUp).format('x') - moment().format('x'), 'milliseconds');
        this.setState({
            roundUp: moment(roundUp).format('HH:mm'),
            countdown: duration.hours() + ":" + duration.minutes() + ":" + duration.seconds(),
            countdownAsSeconds: moment.duration(duration).asSeconds()
        })
        this.props.loadEthUsd()
        this.props.loadPoolSize()
    }

    render() {
        const paperAccent = {
            margin: '10px',
            padding: '10px',
            color: white,
        }
        return (
            <DocumentTitle title={"EtherOrb" + " $" + this.props.prediction + " @ " + this.state.roundUp}>
                <div>
                    <HeaderBar title="EtherOrb" ethUsd={this.props.ethUsd}/>
                    <Paper zDepth={0}>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} md={12}>
                                    <PredictionHead nextRound={this.state.roundUp} prediction={this.props.prediction}/>
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
                                    <Paper zDepth={0}>
                                        <Values form="BetInputForm"/>
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

const mapStateToProps = state => ({
    ethUsd: state.ethReducer.ethUsd,
    loading: state.ethReducer.loading,
    poolSize: state.betReducer.poolSize,
    prediction: state.betReducer.prediction
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadEthUsd,
    loadPoolSize,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
