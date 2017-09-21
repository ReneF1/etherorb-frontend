import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import './InfoTag.css';

const iconStyleLeft = {
  fontSize: '35px',
  left: '15px',
  top: '8px',
};
const iconStyleRight = {
  fontSize: '24px',
  right: '15px',
  top: '15px',
};


const InfoTag = props =>
    (
      <div className="infoTag__shape">
        <div className="infoTag__wrapper">
          <FontIcon
            className="material-icons infoTag__iconLeft"
            style={iconStyleLeft}
          >
            {props.icon}
          </FontIcon>
          <span
            className="infoTag__text"
          >
            {`${props.text}: ${props.value}`}
          </span>
          <FontIcon
            className="material-icons infoTag__iconRight"
            style={iconStyleRight}
          >
              info_outline
          </FontIcon>
        </div>
      </div>
    );

InfoTag.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  time: PropTypes.string,
};
InfoTag.defaultProps = {
  value: '',
  time: 1000,
};

export default InfoTag;
