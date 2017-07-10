/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React, {Component} from "react"
import "../styles/Landingpage.css"
import {createStyleSheet, withStyles} from "material-ui/styles"
import AppBar from "../components/appBar.js"
import Grid from "material-ui/Grid"
import Paper from "material-ui/Paper"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import {
    fetchPrice
} from '../actions/ethActions'
import {
    price
} from '../reducers/ethReducer'
import EthChart from "../components/ethChart"
import Countdown from "../components/countdown"
import Footer from "../components/footer.js"

const styleSheet = createStyleSheet('InteractiveGrid', theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

class Landingpage extends Component {

    render() {
        console.log(this.state)
        return (
            <div>
                <Grid container gutter={0}>
                    <AppBar/>
                    <Grid container justify={'center'} gutter={0}>
                        <Grid item xs={11}>
                            <Paper>
                                <h2><Countdown/></h2>
                                <p>ETHUSD: {this.props.price}</p>
                                <p>Timestamp: {this.props.time}</p>
                                <button onClick={this.props.fetchPrice} disabled={false}>Get Price</button>
                            </Paper>
                        </Grid>
                        <Grid item xs={11}>
                            <EthChart/>
                        </Grid>
                    </Grid>
                    <Footer />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    price: state.ethReducer.price,
    time: state.ethReducer.time,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPrice,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Landingpage)