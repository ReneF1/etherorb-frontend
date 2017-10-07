import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import focusId from '../../shared/focusHelper';
import { contentEn } from '../../assets';
import './BottomCTA.css';
import etherscanLogo from '../../assets/media/etherscan.png';
import githubLogo from '../../assets/media/github.png';
import { toggleRulesDialog } from '../../store/actions';

const customButton = {
  buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
  overlayStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
  style: { borderRadius: '100px', minWidth: '200px' },
};
const customButtonSecondary = {
  buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
  overlayStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
  style: { borderRadius: '100px', minWidth: '200px' },
};

const handleClick = (toggleDialog) => {
  toggleDialog('rulesDialog');
};

const BottomCTA = props =>
    (
      <div>
        <h2>{contentEn.bottomCTA.headLineTop}<br />{contentEn.bottomCTA.headLineBot}</h2>
        <div
          className="bottomCTA__Divider"
          style={{ backgroundColor: props.muiTheme.palette.accent1Color }}
        />
        <div className="bottomCTA__LogoWrapper">
          <img className="bottomCTA__Logo bottomCTA__Logo--left" alt="" src={etherscanLogo} />
          <img className="bottomCTA__Logo" alt="" src={githubLogo} />
        </div>
        <div className="bottomCTA__ButtonWrapper">
          <Scrollchor to="#buyingForm" className="nav-link" afterAnimate={() => focusId('buyingFormField')}>
            <RaisedButton
              label={contentEn.bottomCTA.buttonLabelCTA}
              secondary
              style={customButton.style}
              buttonStyle={customButton.buttonStyle}
              overlayStyle={customButton.overlayStyle}
              className="headerBar_raisedButton"
            />
          </Scrollchor>
          <RaisedButton
            label={contentEn.bottomCTA.buttonLabelSec}
            secondary={false}
            style={customButtonSecondary.style}
            buttonStyle={customButtonSecondary.buttonStyle}
            overlayStyle={customButtonSecondary.overlayStyle}
            onClick={() => handleClick(props.toggleRulesDialog)}
            className="headerBar_raisedButton1"
          />
        </div>
      </div>
    );

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleRulesDialog,
}, dispatch);

BottomCTA.propTypes = {
  muiTheme: PropTypes.shape().isRequired,
  toggleRulesDialog: PropTypes.func.isRequired,
};

BottomCTA.defaultProps = {
  now: '',
};
export default connect(null, mapDispatchToProps)(muiThemeable()(BottomCTA));

