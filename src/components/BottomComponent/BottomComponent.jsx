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
                                <InfoTag/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );

export default muiThemeable()(BottomComponent);
