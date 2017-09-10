import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'material-ui/Tabs';
import qrCodeLogo from '../../assets/media/qr.png';
import metaMaskLogo from '../../assets/media/metamask.png';

const tabsStyle = {
  color: '#000000',
};
const tabStyle = {
  padding: '5px',
  color: '#000000',
};
const inkBarStyle = {
  border: '2p',
};

const ModalTabs = props => (
  <Tabs
    style={tabsStyle}
    inkBarStyle={inkBarStyle}
    tabItemContainerStyle={{ backgroundColor: '#ffffff' }}
  >
    <Tab
      label={[<img src={qrCodeLogo} alt="" style={{ padding: '2px' }} />, 'QR Code']}
      style={tabStyle}
    >
      <div>
        <h1>{props.headlines[0]}</h1>
      </div>
    </Tab>
    <Tab
      label={[<img src={metaMaskLogo} alt="" style={{ padding: '2px' }} />, 'MetaMask']}
      style={tabStyle}
    >
      <div>
        <h1>{props.headlines[1]}</h1>
      </div>
    </Tab>
  </Tabs>
);

ModalTabs.propTypes = {
  headlines: PropTypes.element.isRequired,
};

export default ModalTabs;
