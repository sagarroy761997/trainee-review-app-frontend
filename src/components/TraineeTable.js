/* eslint-disable react/prop-types */
import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,

} from '@mui/material';

// import PropTypes from 'prop-types';
import { StyledTableCell, StyledTableRow, useStyles } from '../style/tableStyle';

function TraineeTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow className={classes.tableRow}>
            <StyledTableCell className={classes.tableHeaderCell}>
              First Name
            </StyledTableCell>
            <StyledTableCell className={classes.tableHeaderCell} align="right">
              Last Name
            </StyledTableCell>

            <StyledTableCell className={classes.tableHeaderCell} align="right">
              Email
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {data.map((row) => (
            <StyledTableRow key={`trainee${row.first_name}`}className={classes.tableRow}>
              <StyledTableCell className={classes.tableCell}>
                {row.first_name}
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="right">
                {row.last_name}
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="right">
                {row.email}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
// TraineeTable.propTypes = {
//   data: PropTypes.instanceOf()
//   data: PropTypes.shape({
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     email: PropTypes.string,
//   }),
// };
export default TraineeTable;
