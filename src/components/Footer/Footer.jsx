import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './Footer.css';

const Footer = props =>
    (<div
      className="Footer__content"
      style={{ backgroundColor: props.muiTheme.palette.primary1Color }}
    >
      <div className="Footer__container">
        <p>{props.disclaimer}</p>
        <h4>© {`${moment().year()} ${props.title}`}</h4>
      </div>
    </div>);

Footer.propTypes = {
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  disclaimer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default muiThemeable()(Footer);
