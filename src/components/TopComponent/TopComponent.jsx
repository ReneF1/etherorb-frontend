import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import './TopComponent.css';
import ModalTabs from '../ModalTabs/ModalTabs';
import { BulletPoint } from '../../components';
import CountdownClock from '../CountdownClock/CountdownClock';
import { contentEn, background } from '../../assets';

const TopComponent = ({ muiTheme }) => (
  <div
    className="topComponent"
    style={{
      backgroundColor: muiTheme.palette.primary1Color,
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
            seconds={1000}
            color={muiTheme.palette.accent1Color}
            countdownDescTop={contentEn.countdownClock.countdownDescTop}
            countdownDescBot={contentEn.countdownClock.countdownDescBot}
          />
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <div className="topComponent__buttonWrapper topComponent__paddingWrapper">
              <ModalTabs />
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
};

export default muiThemeable()(TopComponent);
