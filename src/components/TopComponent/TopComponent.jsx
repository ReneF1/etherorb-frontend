import React from 'react';
import './TopComponent.css';
import {Col, Grid, Row} from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import {BulletPoint} from '../../components';
import CountdownClock from "../CountdownClock/CountdownClock";

const TopComponent = props =>
    (
        <div className='topComponent' style={{
            backgroundColor: props.muiTheme.palette.primary1Color,
            backgroundImage: 'url(' + props.background + ')'
        }}>
            <div className="topComponent__container">
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 className="topComponent__headline">{props.headline}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <CountdownClock seconds={1000} color={'#ffffff'} description={props.CountdownClockDescription}/>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <RaisedButton label={props.buttonLabel} style={props.customButton.style}
                                          buttonStyle={props.customButton.buttonStyle}
                                          overlayStyle={props.customButton.overlayStyle}
                                          labelStyle={props.customButton.labelStyle}
                                          labelColor={props.muiTheme.palette.accent1Color}
                                          className='headerBar_raisedButton'/>
                        </Col>
                    </Row>
                    <Row around="xs">
                        <Col xs={2} md={2}>
                            <BulletPoint text={'Buy your Ticket'} icon={'add_shopping_cart'}/>
                        </Col>
                        <Col xs={2} md={2}>
                            <BulletPoint text={'Correctly predict the ETH/USD value'} icon={'av_timer'}/>
                        </Col>
                        <Col xs={2} md={2}>
                            <BulletPoint text={'Win the Pot'} icon={'attach_money'}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );

export default muiThemeable()(TopComponent);
