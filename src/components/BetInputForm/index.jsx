/**
 * Created by renefuchtenkordt on 04.07.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import BetInputForm from './BetInputForm';
import { postBet } from '../../store/actions/betActions';

class BetInput extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.postBet();
  }

    // TODO: Fix the damn form
  render() {
    return (<div>
      <BetInputForm onSubmit={this.onSubmit} />
    </div>);
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  postBet,
}, dispatch);

BetInput.propTypes = {
  postBet: PropTypes.func.isRequired,
};
export default connect(mapDispatchToProps)(BetInput);
