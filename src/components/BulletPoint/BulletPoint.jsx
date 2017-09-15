import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import './BulletPoint.css';

const iconStyles = {
  color: '#ffffff',
  fontSize: '56px',
};

const BulletPoint = props =>
    (
      <div className="bulletPoint__container">
        <FontIcon className="material-icons" style={iconStyles}>{props.icon}</FontIcon>
        <p className="bulletPoint__text">{props.text}</p>
      </div>
    );

BulletPoint.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BulletPoint;
