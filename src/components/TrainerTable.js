import React, { useContext } from 'react';
import {
  Table,
  TableBody,
 
  TableContainer,
  TableHead,
  TableRow,
  IconButton,

  // Paper,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';

import { StyledTableCell, StyledTableRow, useStyles } from '../style/tableStyle';
import dataContext from '../context/dataContext';

import TraineeModal from './TraineeModal';

function TrainerTable(props) {
  const classes = useStyles();
  const {
    setOpenModal1, setOpenModal3, apiData, setTraineesOfTrainer,
  } = useContext(dataContext);
  const handleClickOpen = () => {
    setOpenModal1(true);
  };

  // const actionCell = (role, traineeList) => {
  //   if (role === "trainer") {
  //     return (
  //       <div>
  //         <IconButton
  //           onClick={() => {
  //             setTraineesOfTrainer(traineeList);
  //             handleClickOpen();
  //           }}
  //         >
  //           <Visibility />
  //         </IconButton>
  //         <TraineeModal data={traineeList} />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <IconButton
  //           onClick={() => {
  //             setTraineesOfTrainer(traineeList);
  //             handleClickOpen3();
  //           }}
  //         >
  //           <SummarizeIcon/>
  //         </IconButton>
  //         <FormDialog />
  //       </div>
  //     );
  //   }
  // };

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
            <StyledTableCell className={classes.tableHeaderCell} align="right">
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {props.data.map((row) => (
            <StyledTableRow key={`trainer${row.first_name}`} className={classes.tableRow}>
              <StyledTableCell className={classes.tableCell}>
                {row.first_name}
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="right">
                {row.last_name}
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="right">
                {row.email}
              </StyledTableCell>
              <StyledTableCell
                className={classes.tableCell}
                align="right"
              >
                {/* {actionCell(row.role, row.trainee)} */}
                <div>
                  <IconButton
                    onClick={() => {
                      setTraineesOfTrainer(row.trainee);
                      handleClickOpen();
                    }}
                  >
                    <Visibility />
                  </IconButton>
                  <TraineeModal data={row.trainee} />
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TrainerTable;
