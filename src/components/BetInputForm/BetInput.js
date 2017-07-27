import React, {Component} from 'react'

class BetInput extends Component {
    render() {
        const {input: {value, onChange}} = this.props
        return (
            <div>
                <span>The current value is {value}</span>
                <button type="button" onClick={() => onChange(((Math.round((value * 10)) + 1) / 10).toFixed(2))}>Inc
                </button>
                <button type="button" onClick={() => onChange(((Math.round((value * 10)) - 1) / 10).toFixed(2))}>Dec
                </button>
            </div>
        )
    }
}


export default BetInput