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
            backgroundImage: 'url(' + props.background + ')',
            backgroundPositionY: '200px'
        }}>
            <div className="topComponent__container">
                <Grid fluid>
                    <Row className="topComponent__row topComponent__paddingWrapper">
                        <Col xs={12} md={12}>
                            <h1 className="topComponent__headline">{[props.headlineTop,<br/>,props.headlineBot]}</h1>
                        </Col>
                    </Row>
                    <Row className='topComponent__row topComponent__paddingWrapper'>
                        <CountdownClock
                            seconds={1000}
                            color={props.muiTheme.palette.accent1Color}
                            countdownDescTop={props.countdownClock.countdownDescTop}
                            countdownDescBot={props.countdownClock.countdownDescBot}
                        />
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='topComponent__buttonWrapper topComponent__paddingWrapper'>
                                <RaisedButton
                                    label={props.buttonLabel} style={props.customButton.style}
                                    buttonStyle={props.customButton.buttonStyle}
                                    overlayStyle={props.customButton.overlayStyle}
                                    labelStyle={props.customButton.labelStyle}
                                    labelColor={props.muiTheme.palette.accent1Color}
                                    onClick={props.toggleBuyingDialog}
                                    className='headerBar_raisedButton'
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row around="xs">
                        <Col xs={4} md={4}>
                            <BulletPoint text={props.bulletPoints[0]} icon={'add_shopping_cart'}/>
                        </Col>
                        <Col xs={4} md={4}>
                            <BulletPoint text={props.bulletPoints[1]} icon={'av_timer'}/>
                        </Col>
                        <Col xs={4} md={4}>
                            <BulletPoint text={props.bulletPoints[2]} icon={'attach_money'}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );

export default muiThemeable()(TopComponent);
