import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import ModalTabs from '../ModalTabs/ModalTabs';

const dialogTitleStyle = {
  backgroundColor: '#ff3823',
  color: '#ffffff',
  fontSize: '30px',
  height: '30px',
};
const dialogBodyStyle = {
  border: '2px solid #ff3823',
  padding: '0',
};
const actionsContainerStyle = {
  borderBottom: '2px solid #ff3823',
  borderLeft: '2px solid #ff3823',
  borderRight: '2px solid #ff3823',
};

const BuyingModal = props =>
    (
      <div>
        <Dialog
          titleStyle={dialogTitleStyle}
          bodyStyle={dialogBodyStyle}
          title={props.title}
          actions={props.actions}
          modal
          open={props.open}
          actionsContainerStyle={actionsContainerStyle}
        >
          <ModalTabs headlines={props.modalTabs.headlines} />
        </Dialog>
      </div>
    );

BuyingModal.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  open: PropTypes.bool.isRequired,
  modalTabs: PropTypes.shape({
    headlines: PropTypes.array.isRequired,
  }).isRequired,
};

export default BuyingModal;
