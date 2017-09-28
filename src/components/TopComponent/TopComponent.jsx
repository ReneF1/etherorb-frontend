import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './TopComponent.css';
import { BulletPoint, CountdownClock, BuyingFormContainer } from '../../components';
import { contentEn, background } from '../../assets';

const TopComponent = props =>
    (
      <div
        className="topComponent"
        style={{
          backgroundColor: props.muiTheme.palette.primary1Color,
          backgroundImage: `url(${background})`,
          backgroundPositionY: '200px',
        }}
      >
        <div className="topComponent__container">
          <Grid fluid>
            <Row className="topComponent__row topComponent__paddingWrapper">
              <Col xs={12} md={12}>
                <h1 className="topComponent__headline" >{contentEn.topComponent.headlineTop}
                  <br />{contentEn.topComponent.headlineBot}</h1>
              </Col>
            </Row>
            <Row className="topComponent__row topComponent__paddingWrapper">
              <CountdownClock
                seconds={props.deadlineDuration / 1000}
                color={props.muiTheme.palette.accent1Color}
                countdownDescTop={contentEn.countdownClock.countdownDescTop}
                countdownDescBot={contentEn.countdownClock.countdownDescBot}
              />
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="topComponent__paddingWrapper">
                  <BuyingFormContainer />
                </div>
              </Col>
            </Row>
            <Row around="xs">
              <Col xs={4} md={4}>
                <BulletPoint text={contentEn.bulletPoints[0]} icon={'add_shopping_cart'} />
              </Col>
              <Col xs={4} md={4}>
                <BulletPoint text={contentEn.bulletPoints[1]} icon={'av_timer'} />
              </Col>
              <Col xs={4} md={4}>
                <BulletPoint text={contentEn.bulletPoints[2]} icon={'attach_money'} />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );

TopComponent.propTypes = {
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  deadlineDuration: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  deadlineDuration: state.momentTime.deadlineDuration,
});

export default connect(mapStateToProps)(muiThemeable()(TopComponent));
