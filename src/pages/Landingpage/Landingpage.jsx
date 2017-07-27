/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Grid, Row} from 'react-flexbox-grid';
import { Values } from 'redux-form-website-template';
import './Landingpage.css';
import {BetInput, Countdown, Footer, HeaderBar} from '../../components';
import loadEthUsd from "../../store/actions/ethActions";
import { placeBet, loadPoolSize } from "../../store/actions/betActions";

class Landingpage extends Component {

    componentWillMount() {
        this.props.loadEthUsd()
        this.props.loadPoolSize()
    }

    render() {
        return (
            <div>
                <HeaderBar title="EtherOrb" ethUsd={this.props.ethUsd}/>
                <Grid fluid>
                    <Row>
                        <Col xs={6} md={3}>
                            <Paper className="paper">
                                <p>Your Wallet: a94f5374fce5edbc8e2a8697c15331677e6ebf0b</p>
                                <BetInput/>
                            </Paper>
                            <Paper className="paper">
                                next payout @ <Countdown/>
                            </Paper>
                            <Paper className="paper">
                                <p>Poolsize: {this.props.poolSize}</p>
                                <Values form="BetInputForm" />
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ethUsd: state.ethReducer.ethUsd,
    loading: state.ethReducer.loading,
    poolSize: state.betReducer.poolSize
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadEthUsd,
    loadPoolSize,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
