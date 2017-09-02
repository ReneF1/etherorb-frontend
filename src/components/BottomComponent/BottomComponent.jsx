import React from 'react';
import './BottomComponent.css';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Col, Grid, Row} from 'react-flexbox-grid';
import InfoTag from '../InfoTag/InfoTag';

const BottomComponent = props =>
    (
        <div className='bottomComponent'>
            <div className="bottomComponent__container">
                <Grid fluid>
                    <Row className="bottomComponent__row bottomComponent__paddingWrapper">
                        <Col xs={12} md={12}>
                            <h1 className="bottomComponent__headline" style={{
                                color: props.muiTheme.palette.accent1Color
                            }}>{props.headline}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='bottomComponent__buttonWrapper bottomComponent__paddingWrapper'>
                                <InfoTag icon={'av_timer'} text={'Predicion: '} value={'$ 220'}/>
                                <InfoTag icon={'shopping_cart'} text={'Tickets sold: '} value={'230'}/>
                                <InfoTag icon={'timelapse'} text={'Next payout: '} value={'42:34'}/>
                                <InfoTag icon={'monetization_on'} text={'Pot size: '} value={'$ 100.000'}/>
                                <InfoTag icon={'timer_off'} text={'Deadline: '} value={'32:34'}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );

export default muiThemeable()(BottomComponent);
