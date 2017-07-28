/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import {blue500} from 'material-ui/styles/colors';
import eth_logo from '../../eth_logo2.png'
import './HeaderBar.css';

const HeaderBar = (props) => (
    <AppBar
        secondary={true}
        iconElementLeft={<img src={eth_logo} className="orbLogoImg"/>}
        iconElementRight={<p style={{color: blue500}}>Prediction: {props.ethUsd} @ 20:00 </p>}
        title={props.title}
        zDepth={1}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);

export default HeaderBar;
