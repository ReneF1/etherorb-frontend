/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Landingpage.css';
import { AppBar, Countdown, EthChart, Footer } from '../../components';
import loadPriceHistory from '../../store/actions';

const Landingpage = (props) =>
    (<div>
      <Grid container gutter={0}>
        <AppBar />
        <Grid container justify={'center'} gutter={0}>
          <Grid item xs={11}>
            <Paper className="paper">
              <h2><Countdown /></h2>
              <p>ETHUSD: {props.price}</p>
              <button onClick={props.loadPriceHistory + console.log("test")}>Get Price</button>
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <EthChart />
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>);

const mapStateToProps = state => ({
  price: state.ethReducer.price[1],
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPriceHistory,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);
