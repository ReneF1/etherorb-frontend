import React from 'react';
import './BottomComponent.css';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Col, Grid, Row} from 'react-flexbox-grid';
import InfoTag from '../InfoTag/InfoTag';
import Chart from '../Chart/Chart';
import HistoryList from '../HistoryList/HistoryList';
import BottomCTA from '../BottomCTA/BottomCTA';

const BottomComponent = props =>
    (
        <div className='bottomComponent'>
            <div className="bottomComponent__container">
                <Grid fluid>
                    <Row className="bottomComponent__row">
                        <Col xs={12} md={12}>
                            <h2 className="bottomComponent__headline" style={{
                                color: props.muiTheme.palette.accent1Color
                            }}>{props.headline}</h2>
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
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='bottomComponent__paddingWrapper'>
                                <Chart chartData={props.chartData}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='bottomComponent__paddingWrapper'>
                                <HistoryList
                                    historyListHeader={props.historyListHeader}
                                    historyListData={props.historyListData}
                                    historyListConfig={props.historyListConfig}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='bottomComponent__paddingWrapper'>
                                <BottomCTA
                                    headline={props.bottomCTAHeadline}
                                    customButton={props.customButton}
                                    customButtonSecondary={props.customButtonSecondary}
                                    buttonLabel={props.buttonLabel}
                                    toggleBuyingDialog={props.toggleBuyingDialog}
                                />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );

export default muiThemeable()(BottomComponent);