/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import './HeaderBar.css';


const HeaderBar = (props) => (
    <AppBar
        title={props.title + " @ " + props.ethUsd}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);

export default HeaderBar;
