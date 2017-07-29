import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import './PredictionHead.css';

const style = {
  height: 24,
  width: 24,
  margin: '0 5px 0 5px',
  position: 'relative',
  top: '3px',
  backgroundColor: '#4CAF50',
  textAlign: 'center',
  display: 'inline-block',
}
;

const iconStyles = {
  marginRight: 24,
};

const PredictionHead = props =>
    (
      <div className="PredictionHeadWrapper">
        <h1>Current Prediction:</h1>
        <h2>ETHUSD $ {props.prediction} @ {props.nextRound} (<span>+20%</span> <Paper
          style={style}
          zDepth={1}
          circle
        ><FontIcon
          className="material-icons"
          style={iconStyles}
        >arrow_upward</FontIcon></Paper>)</h2>
      </div>
    );

PredictionHead.propTypes = {
  prediction: PropTypes.number,
  nextRound: PropTypes.string.isRequired,
};
export default PredictionHead;
