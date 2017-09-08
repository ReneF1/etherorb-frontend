import React from 'react';
import Dialog from 'material-ui/Dialog';
import ModalTabs from '../ModalTabs/ModalTabs'

const dialogTitleStyle = {
    backgroundColor: "#ff3823",
    color: '#ffffff',
    fontSize: "30px",
    height: "30px"
}
const dialogBodyStyle = {
    border: "2px solid #ff3823",
    padding: "0"
}
const actionsContainerStyle = {
    borderBottom: "2px solid #ff3823",
    borderLeft: "2px solid #ff3823",
    borderRight: "2px solid #ff3823"
}

const BuyingModal = props =>
    (
        <div>
            <Dialog
                titleStyle={dialogTitleStyle}
                bodyStyle={dialogBodyStyle}
                title={props.title}
                actions={props.actions}
                modal={true}
                open={props.open}
                actionsContainerStyle={actionsContainerStyle}
            >
                <ModalTabs headlines={props.modalTabs.headlines}/>
            </Dialog>
        </div>
    );
export default BuyingModal;