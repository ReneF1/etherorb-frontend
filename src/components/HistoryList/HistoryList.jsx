import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { contentEn } from '../../assets';
import { INTERVAL_TIMER } from '../../shared/constant';
import { formatDollar } from '../../shared/formater';
import List from '../List/List';
import {
    getBuyingHistory,
} from '../../store/actions';

const mapDataToListData = (data) => {
  const listData = [];
  if (data && data.length > 0) {
    data.forEach((val) => {
      const column = [];
      column.push(val.address);
      column.push(<span style={{ color: 'green' }}>{formatDollar(val.estimate)}</span>);
      listData.push(column);
    });
  } else {
    listData.push(['-', '-']);
  }
  return listData;
};

class HistoryList extends React.Component {

  componentWillMount() {
    this.props.getBuyingHistory();
    this.interval = setInterval(() => {
      this.props.getBuyingHistory();
    }, INTERVAL_TIMER.HISTORY);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <List
        data={mapDataToListData(this.props.buyingHistory)}
        columnNames={contentEn.historyList.columnNames}
        header={contentEn.historyList.header}
        muiTheme={this.props.muiTheme}
      />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getBuyingHistory,
}, dispatch);

const mapStateToProps = state => ({
  buyingHistory: state.betReducer.buyingHistory,
});

HistoryList.propTypes = {
  getBuyingHistory: PropTypes.func.isRequired,
  buyingHistory: PropTypes.array.isRequired,
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(HistoryList));
