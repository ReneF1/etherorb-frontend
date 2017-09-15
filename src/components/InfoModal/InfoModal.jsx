import React from 'react';
import PropTypes from 'prop-types';
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

InfoModal.propTypes = {
  actions: PropTypes.element.isRequired,
};

export default InfoModal;
