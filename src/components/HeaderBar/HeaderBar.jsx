/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './HeaderBar.css';

const HeaderBar = props => (
    <div className='headerBar'>
        <div className='headerBar__wrapper'>
            <div className='headerBar__leftElement'><img src={props.logo} className='headerBar__logo'
                                                         alt={props.title[0] + props.title[1] + ' logo'}/><span
                className='headerBar__logoTextPrimary'
                style={{color: props.muiTheme.palette.accent1Color}}>{props.title[0]}</span><span
                className='headerBar__logoTextSecondary'
                style={{color: props.muiTheme.palette.accent1Color}}>{props.title[1]}</span></div>
            <div className='headerBar__rightElement'>
                <RaisedButton
                    label={props.buttonLabel} secondary={true}
                    style={props.customButton.style}
                    buttonStyle={props.customButton.buttonStyle}
                    onClick={props.toggleBuyingDialog}
                    overlayStyle={props.customButton.overlayStyle}
                    className='headerBar_raisedButton'/>
            </div>
        </div>
    </div>
);
export default muiThemeable()(HeaderBar);
