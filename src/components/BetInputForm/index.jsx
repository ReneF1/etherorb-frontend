/**
 * Created by renefuchtenkordt on 04.07.17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BetInputForm from './BetInputForm';
import {postBet} from "../../store/actions/betActions";

class BetInput extends React.Component {

    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(data) {
        this.props.postBet()
        console.log('my console.log', data);
    }

    render() {
        return (<div>
            <p>test</p>
            <BetInputForm onSubmit={this.onSubmit}/>
        </div>)
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
    postBet
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BetInput);
