import React from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import qrCodeLogo from '../../assets/media/qr.png';
import metaMaskLogo from '../../assets/media/metamask.png';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
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


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const ModalTabs = props => (
  <Tabs
    style={tabsStyle}
    inkBarStyle={inkBarStyle}
    tabItemContainerStyle={{ backgroundColor: '#ffffff' }}
  >
    <Tab
      label={[<img src={qrCodeLogo} style={{ padding: '2px' }} />, 'QR Code']}
      style={tabStyle}
    >
      <div>
        <h1>{props.headlines[0]}</h1>
      </div>
    </Tab>
    <Tab
      label={[<img src={metaMaskLogo} style={{ padding: '2px' }} />, 'MetaMask']}
      style={tabStyle}
    >
      <div>
        <h1>{props.headlines[1]}</h1>
      </div>
    </Tab>
  </Tabs>
);

export default ModalTabs;
