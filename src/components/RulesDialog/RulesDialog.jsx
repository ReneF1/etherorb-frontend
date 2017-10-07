import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { contentEn } from '../../assets';
import { toggleRulesDialog } from '../../store/actions';

const RulesDialog = (props) => {
  const actions = [
    <FlatButton
      label="Got It"
      primary
      onClick={() => props.toggleRulesDialog()}
    />,
  ];
  return (
    <div>
      <Dialog
        title="Etherorb Rules"
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={() => props.toggleRulesDialog()}
        autoScrollBodyContent
      >
        <p>{contentEn.rulesDialog.text}</p>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleRulesDialog,
}, dispatch);

const mapStateToProps = state => ({
  open: state.pageConfig.rulesDialog.open,
});

RulesDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleRulesDialog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RulesDialog);
