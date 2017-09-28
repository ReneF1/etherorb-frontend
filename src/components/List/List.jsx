import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './List.css';

const List = ({ header, columnNames, data, settings, muiTheme }) => {
  const style = {
    tableRowColumn: {
      color: muiTheme.palette.primary1Color,
    },
    tableHeaderColumn: {
      color: muiTheme.palette.accent1Color,
    },
  };
  return (
    <div>
      <Table
        height={'auto'}
        fixedHeader
        selectable={false}
        multiSelectable={false}
        {...settings}
      >
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}
        >
          <TableRow key="list_table_row1">
            <TableHeaderColumn
              colSpan={columnNames ? columnNames.length : 2}
              tooltip={header}
              style={style.tableHeaderColumn}
              className="List__headerText"
            >
              {header}
            </TableHeaderColumn>
          </TableRow>
          <TableRow key="list_table_row2">
            {columnNames.map(columnName => (
              <TableHeaderColumn
                tooltip={columnName.tooltip}
                key={columnName.title}
              >{columnName.title}</TableHeaderColumn>
                      ))}
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          {data.map((row, rowIndex) => (
            <TableRow key={`${rowIndex}_row`}>
              {row.map((column, columnIndex) => (
                <TableRowColumn
                  key={`${rowIndex}_${columnIndex}_column`}
                  style={style.tableRowColumn}
                >
                  {column}
                </TableRowColumn>
                                ))}
            </TableRow>
                        ))}
        </TableBody>
      </Table>
    </div>
  );
};

List.propTypes = {
  header: PropTypes.string.isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  settings: PropTypes.shape(PropTypes.object.isRequired),
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  data: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

List.defaultProps = {
  settings: {},
};

export default muiThemeable()(List);
