import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Col, Grid, Row } from 'react-flexbox-grid';
import './BottomComponent.css';
import InfoTag from '../InfoTag/InfoTag';
import Chart from '../Chart/Chart';
import HistoryList from '../HistoryList/HistoryList';
import BottomCTA from '../BottomCTA/BottomCTA';

const BottomComponent = props =>
    (
      <div className="bottomComponent">
        <div className="bottomComponent__container">
          <Grid fluid>
            <Row className="bottomComponent__row">
              <Col xs={12} md={12}>
                <h2
                  className="bottomComponent__headline"
                  style={{
                    color: props.muiTheme.palette.accent1Color,
                  }}
                >{props.headline}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__buttonWrapper bottomComponent__paddingWrapper">
                  <InfoTag icon={'av_timer'} text={props.infoTags[0]} value={props.values[0]} />
                  <InfoTag icon={'shopping_cart'} text={props.infoTags[1]} value={props.values[1]} />
                  <InfoTag icon={'timelapse'} text={props.infoTags[2]} value={props.values[2]} />
                  <InfoTag icon={'monetization_on'} text={props.infoTags[3]} value={props.values[3]} />
                  <InfoTag icon={'timer_off'} text={props.infoTags[4]} value={props.values[4]} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__paddingWrapper">
                  <Chart
                    chartData={props.chartData}
                    headline={props.chart.headline}
                    referenceLabel={props.chartReferenceLabel}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__paddingWrapper">
                  <HistoryList
                    ListHeader={props.historyList.header}
                    columnNames={props.historyList.columnNames}
                    data={props.historyListData}
                    config={props.historyListConfig}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="bottomComponent__paddingWrapper">
                  <BottomCTA
                    customButton={props.customButton}
                    customButtonSecondary={props.customButtonSecondary}
                    headLineTop={props.bottomCTA.headLineTop}
                    headLineBot={props.bottomCTA.headLineBot}
                    buttonLabelCTA={props.bottomCTA.buttonLabelCTA}
                    buttonLabelSec={props.bottomCTA.buttonLabelSec}
                    toggleBuyingDialog={props.toggleBuyingDialog}
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );

BottomComponent.propTypes = {
  muiTheme: PropTypes.element.isRequired,
  headline: PropTypes.string.isRequired,
  infoTags: PropTypes.string.isRequired,
  values: PropTypes.element.isRequired,
  chartData: PropTypes.element.isRequired,
  chart: PropTypes.element.isRequired,
  chartReferenceLabel: PropTypes.string.isRequired,
  historyList: PropTypes.element.isRequired,
  historyListData: PropTypes.element.isRequired,
  historyListConfig: PropTypes.element.isRequired,
  customButton: PropTypes.element.isRequired,
  customButtonSecondary: PropTypes.element.isRequired,
  bottomCTA: PropTypes.element.isRequired,
  toggleBuyingDialog: PropTypes.element.isRequired,
};

export default muiThemeable()(BottomComponent);
