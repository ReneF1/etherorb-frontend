import React from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import shortid from 'shortid';
import { contentEn } from '../../assets';
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

const ModalTabs = () => (
  <Tabs
    style={tabsStyle}
    inkBarStyle={inkBarStyle}
    tabItemContainerStyle={{ backgroundColor: '#ffffff' }}
  >
    <Tab
      label={[<img src={metaMaskLogo} alt="" style={{ padding: '2px' }} key={shortid.generate()} />, 'MetaMask']}
      style={tabStyle}
    >
      <div>
        <h1>{contentEn.modalTabs.headlines[1]}</h1>
      </div>
    </Tab>
    <Tab
      label={[<img src={qrCodeLogo} alt="" style={{ padding: '2px' }} key={shortid.generate()} />, 'QR Code']}
      style={tabStyle}
    >
      <div>
        <h1>{contentEn.modalTabs.headlines[0]}</h1>
      </div>
    </Tab>
  </Tabs>
);

export default ModalTabs;
