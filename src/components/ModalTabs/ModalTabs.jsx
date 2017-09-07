import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import qrCodeLogo from '../../qr.png'
import metaMaskLogo from '../../metamask.png'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
const tabsStyle = {
    color: "#000000"
};
const tabStyle = {
    padding: "5px",
    color: "#000000"
};
const inkBarStyle = {
    border: "2p"
};


function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
    <Tabs
        style={tabsStyle}
        inkBarStyle={inkBarStyle}
        tabItemContainerStyle={{backgroundColor: "#ffffff"}}
    >
        <Tab
            label={[<img src={qrCodeLogo} style={{padding: "2px"}}/>, "QR Code"]}
            style={tabStyle}
        >
            <div>
                <h1>QR Code</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </Tab>
        <Tab
            label={[<img src={metaMaskLogo} style={{padding: "2px"}}/>, "MetaMask"]}
            style={tabStyle}
        >
            <div>
                <h1>Metamask</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </Tab>
    </Tabs>
);

export default TabsExampleSimple;