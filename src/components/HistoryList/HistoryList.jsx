import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import muiThemeable from 'material-ui/styles/muiThemeable';
import shortid from 'shortid';
import { contentEn } from '../../assets';
import './HistoryList.css';

const HistoryList = (props =>
    (
      <div>
        <Table
          height={'auto'}
          fixedHeader
          selectable={false}
          multiSelectable={false}
        >
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <TableRow key={shortid.generate()}>
              <TableHeaderColumn
                colSpan="3"
                tooltip={contentEn.historyList.header}
                style={{ color: props.muiTheme.palette.accent1Color }}
                className="historyList__headerText"
              >
                {contentEn.historyList.header}
              </TableHeaderColumn>
            </TableRow>
            <TableRow key={shortid.generate()}>
              <TableHeaderColumn tooltip={`The ${contentEn.historyList.columnNames[0]}`} key={shortid.generate()}>{contentEn.historyList.columnNames[0]}</TableHeaderColumn>
              <TableHeaderColumn tooltip={`The ${contentEn.historyList.columnNames[1]}`} key={shortid.generate()}>{contentEn.historyList.columnNames[1]}</TableHeaderColumn>
              <TableHeaderColumn tooltip={`The ${contentEn.historyList.columnNames[2]}`} key={shortid.generate()}>{contentEn.historyList.columnNames[2]}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover
            stripedRows
          >
            {props.data.map(row => (
              <TableRow key={shortid.generate()}>
                <TableRowColumn
                  style={{ color: props.muiTheme.palette.primary1Color }}
                >
                  {row.address}
                </TableRowColumn>
                <TableRowColumn>{moment(row.timestamp, 'x').fromNow()}</TableRowColumn>
                <TableRowColumn
                  className="historyList__tableRowColumn--3"
                >
                  {row.prediction}
                </TableRowColumn>
              </TableRow>
                    ))}
          </TableBody>
        </Table>
      </div>
    )
);

HistoryList.propTypes = {
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default muiThemeable()(HistoryList);
