import React from 'react';
import './BottomCTA.css';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import etherscanLogo from '../../assets/media/etherscan.png'
import githubLogo from '../../assets/media/github.png'

const BottomCTA = props =>
    (
        <div>
            <h2>{props.bottomCTAHeadlineTop}<br/>{props.bottomCTAHeadlineBot}</h2>
            <div className="bottomCTA__Divider" style={{backgroundColor: props.muiTheme.palette.accent1Color}}></div>
            <div className='bottomCTA__LogoWrapper'>
                <img className="bottomCTA__Logo bottomCTA__Logo--left" src={etherscanLogo}/>
                <img className="bottomCTA__Logo" src={githubLogo}/>
            </div>
            <div className='bottomCTA__ButtonWrapper'>
                <RaisedButton
                    label={props.buttonLabelCTA}
                    secondary={true}
                    style={props.customButton.style}
                    buttonStyle={props.customButton.buttonStyle}
                    overlayStyle={props.customButton.overlayStyle}
                    onClick={props.toggleBuyingDialog}
                    className='headerBar_raisedButton'
                />
                <RaisedButton
                    label={props.buttonLabelSec}
                    labelColor={'#ff3823'}
                    secondary={false}
                    style={props.customButtonSecondary.style}
                    buttonStyle={props.customButtonSecondary.buttonStyle}
                    overlayStyle={props.customButtonSecondary.overlayStyle}
                    className='headerBar_raisedButton'
                />
            </div>
        </div>
    )

export default muiThemeable()(BottomCTA);
