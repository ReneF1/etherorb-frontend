/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { blue500 } from 'material-ui/styles/colors';
import ethLogo from '../../eth_logo2.png';
import './HeaderBar.css';

const HeaderBar = props => (
  <AppBar
    iconElementLeft={<img src={ethLogo} className="orbLogoImg" alt="" />}
    iconElementRight={<p style={{ color: blue500 }}>Prediction: {props.ethUsd} @ 20:00 </p>}
    title={props.title}
    zDepth={1}
  />
);

HeaderBar.propTypes = {
  ethUsd: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default HeaderBar;
