import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleRulesDialog } from '../../store/actions';

class RulesDialog extends React.Component {
    render(){
        const actions = [
            <FlatButton
                label="Got It"
                primary
                onClick={this.props.toggleRulesDialog}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Etherorb Rules"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    autoScrollBodyContent
                >
                    <p>Test</p>
                </Dialog>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  toggleRulesDialog,
}, dispatch);

const mapStateToProps = state => ({
    open: state.pageConfig.rulesDialog.open,
});

RulesDialog.propTypes = {
  toggleRulesDialog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RulesDialog);

