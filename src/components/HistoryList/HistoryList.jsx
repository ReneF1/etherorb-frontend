import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './HistoryList.css';

const HistoryList = props =>
    (
      <div>
        <Table
          height={props.config.height}
          fixedHeader={props.config.fixedHeader}
          selectable={props.config.selectable}
          multiSelectable={props.config.multiSelectable}
        >
          <TableHeader
            adjustForCheckbox={props.config.showCheckboxes}
            displaySelectAll={props.config.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan="3"
                tooltip={props.header}
                style={{ color: props.muiTheme.palette.accent1Color }}
                className="historyList__headerText"
              >
                {props.header}
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip={`The ${props.columnNames[0]}`}>{props.columnNames[0]}</TableHeaderColumn>
              <TableHeaderColumn tooltip={`The ${props.columnNames[1]}`}>{props.columnNames[1]}</TableHeaderColumn>
              <TableHeaderColumn tooltip={`The ${props.columnNames[2]}`}>{props.columnNames[2]}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={props.config.showCheckboxes}
            showRowHover={props.config.showRowHover}
            stripedRows={props.config.stripedRows}
          >
            {props.data.map(row => (
              <TableRow>
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
    );

HistoryList.propTypes = {
  config: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  header: PropTypes.string.isRequired,
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default muiThemeable()(HistoryList);
