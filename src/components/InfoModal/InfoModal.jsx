import React from 'react';
import Dialog from 'material-ui/Dialog';


const InfoModal = props =>
    (
        <div>
            <Dialog
                actions={props.actions}
                modal={false}
                open={false}
                contentID={1}
                onRequestClose={this.handleClose}
            >
                Discard draft?
            </Dialog>
        </div>
    );
export default InfoModal;