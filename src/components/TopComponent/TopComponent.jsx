import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import './TopComponent.css';
import { BulletPoint } from '../../components';
import CountdownClock from '../CountdownClock/CountdownClock';
import { contentEn } from '../../assets';

const content = contentEn.topComponent;

const style = {
  customButtonLarge: {
    buttonStyle: { borderRadius: '100px', height: '56px', lineHeight: '35px' },
    overlayStyle: { borderRadius: '100px' },
    style: { borderRadius: '100px', minWidth: '260px' },
    labelStyle: { fontSize: '20px', textTransform: 'Uppercase', fontWeight: 'bold' },
  },
};

const TopComponent = ({ muiTheme, background, buyTicket }) => (
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
            <h1 className="topComponent__headline">{[content.headlineTop,
              <br />, content.headlineBot]}</h1>
          </Col>
        </Row>
        <Row className="topComponent__row topComponent__paddingWrapper">
          <CountdownClock
            seconds={1000}
            color={muiTheme.palette.accent1Color}
            countdownDescTop={content.countdownClock.countdownDescTop}
            countdownDescBot={content.countdownClock.countdownDescBot}
          />
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <div className="topComponent__buttonWrapper topComponent__paddingWrapper">
              <RaisedButton
                label={content.buttonLabel}
                style={style.customButtonLarge.style}
                buttonStyle={style.customButtonLarge.buttonStyle}
                overlayStyle={style.customButtonLarge.overlayStyle}
                labelStyle={style.customButtonLarge.labelStyle}
                labelColor={muiTheme.palette.accent1Color}
                onClick={() => buyTicket(200)}
                className="headerBar_raisedButton"
              />
            </div>
          </Col>
        </Row>
        <Row around="xs">
          <Col xs={4} md={4}>
            <BulletPoint text={content.bulletPoints[0]} icon={'add_shopping_cart'} />
          </Col>
          <Col xs={4} md={4}>
            <BulletPoint text={content.bulletPoints[1]} icon={'av_timer'} />
          </Col>
          <Col xs={4} md={4}>
            <BulletPoint text={content.bulletPoints[2]} icon={'attach_money'} />
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
);

TopComponent.propTypes = {
  muiTheme: PropTypes.element.isRequired,
  background: PropTypes.string.isRequired,
  buyTicket: PropTypes.func.isRequired,
};

export default muiThemeable()(TopComponent);
