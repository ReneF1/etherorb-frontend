import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ModalTabs from '../ModalTabs/ModalTabs'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class BuyingModal extends React.Component {

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.toggleBuyingDialog}
            />,
            <FlatButton
                label="Buy"
                primary={true}
                disabled={false}
                onClick={this.props.toggleBuyingDialog}
            />,
        ];
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

        return (
            <div>
                <Dialog
                    titleStyle={dialogTitleStyle}
                    bodyStyle={dialogBodyStyle}
                    title="Buy your Ticket"
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                    actionsContainerStyle={actionsContainerStyle}
                >
                    <ModalTabs/>
                </Dialog>
            </div>
        );
    }
}