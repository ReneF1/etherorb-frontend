/**
 * Created by renefuchtenkordt on 04.07.17.
 */
import React from 'react';
import AreaChart from './chart';
import {getData} from "./utils"


class EthChart extends React.Component {
    componentDidMount() {
        getData().then(data => {
            this.setState({data})
        })
    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <AreaChart type={'svg'} data={this.state.data}/>
        )
    }
}

export default EthChart
