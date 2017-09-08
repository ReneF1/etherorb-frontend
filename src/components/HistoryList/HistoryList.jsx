import React from 'react';
import './HistoryList.css';
import moment from 'moment'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import muiThemeable from 'material-ui/styles/muiThemeable';

const HistoryList = props =>
    (
        <div>
            <Table
                height={props.historyListConfig.height}
                fixedHeader={props.historyListConfig.fixedHeader}
                selectable={props.historyListConfig.selectable}
                multiSelectable={props.historyListConfig.multiSelectable}
            >
                <TableHeader adjustForCheckbox={props.historyListConfig.showCheckboxes}
                             displaySelectAll={props.historyListConfig.showCheckboxes}>
                    <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip={props.historyListHeader}
                                           style={{color: props.muiTheme.palette.accent1Color}}
                                           className='historyList__headerText'
                        >
                            {props.historyListHeader}
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip={"The " + props.columnNames[0]}>{props.columnNames[0]}</TableHeaderColumn>
                        <TableHeaderColumn tooltip={"The " + props.columnNames[1]}>{props.columnNames[1]}</TableHeaderColumn>
                        <TableHeaderColumn tooltip={"The " + props.columnNames[2]}>{props.columnNames[2]}</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={props.historyListConfig.showCheckboxes}
                    showRowHover={props.historyListConfig.showRowHover}
                    stripedRows={props.historyListConfig.stripedRows}
                >
                    {props.historyListData.map((row, index) => (
                        <TableRow>
                            <TableRowColumn style={{color: props.muiTheme.palette.primary1Color}}>{row.address}</TableRowColumn>
                            <TableRowColumn>{moment(row.timestamp, 'x').fromNow()}</TableRowColumn>
                            <TableRowColumn className='historyList__tableRowColumn--3'>{row.prediction}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

export default muiThemeable()(HistoryList);
