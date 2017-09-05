import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
                label="Submit"
                primary={true}
                disabled={true}
                onClick={this.props.toggleBuyingDialog}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Modal Dialog" onClick={this.props.toggleBuyingDialog} />
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                >
                    Only actions can close this dialog.
                </Dialog>
            </div>
        );
    }
}