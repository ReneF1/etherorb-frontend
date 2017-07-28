import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import './PredictionHead.css'

const style = {
        height: 24,
        width: 24,
        margin: '0 5px 0 5px',
        position: 'relative',
        top: '3px',
        backgroundColor: '#4CAF50',
        textAlign: 'center',
        display: 'inline-block',
    }
;

const iconStyles = {
    marginRight: 24,
};

class PredictionHead extends Component {

    render() {
        return (
            <div className="PredictionHeadWrapper">
                <h1>Current Prediction:</h1>
                <h2>ETHUSD $ {this.props.prediction} @ {this.props.nextRound} (<span>+20%</span> <Paper style={style} zDepth={1}
                                                                                        circle={true}><FontIcon
                    className="material-icons" style={iconStyles}>arrow_upward</FontIcon></Paper>)</h2>
            </div>
        );
    }
}

export default PredictionHead;