import React, { useContext } from "react";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "../helper/Axios";
import dataContext from "../context/dataContext";
import EditModal from "./EditModal";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from "../style/tableStyle";

export default function TraineeModal() {
  const {
    openModal1,
    setOpenModal1,
    setOpenModal2,
    traineesOfTrainer,
    setTraineesOfTrainer,
    apiData,
    setApiData,
    setTraineeEditData,
  } = useContext(dataContext);

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };
  const handleClickOpenModal2 = () => {
    setOpenModal2(true);
  };
  const { trainerData } = apiData;
  let { allTraineeData } = apiData;
  
  const deleteUser = async (email) => {
    await Axios
      .delete(`http://localhost:4999/deleteUser/${email}`)
      .then((fetched) => {
        if (fetched.status === 200) {
          const filterData = traineesOfTrainer.filter(
            (element) => element.email !== email
          );
          setTraineesOfTrainer(filterData);
          const filterAllTraineeData = allTraineeData.filter(
            (element) => element.email !== email
          );
          allTraineeData = filterAllTraineeData;
          setApiData({ trainerData, allTraineeData });
          console.log(fetched.data);
        }
      })
      .catch((error) => console.log(error.massage));
  };

  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={openModal1}
        onClose={handleCloseModal1}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Trainee Information</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead className={classes.tableHead}>
                <TableRow className={classes.tableRow}>
                  <StyledTableCell className={classes.tableHeaderCell}>
                    First Name
                  </StyledTableCell>
                  <StyledTableCell
                    className={classes.tableHeaderCell}
                    align="right"
                  >
                    Last Name
                  </StyledTableCell>
                  <StyledTableCell
                    className={classes.tableHeaderCell}
                    align="right"
                  >
                    Role
                  </StyledTableCell>
                  <StyledTableCell
                    className={classes.tableHeaderCell}
                    align="right"
                  >
                    Email
                  </StyledTableCell>

                  <StyledTableCell
                    className={classes.tableHeaderCell}
                    align="right"
                  >
                    Actions
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.tableBody}>
                {traineesOfTrainer.map((row) => (
                  <StyledTableRow
                    key={`trainee${row.first_name}`}
                    className={classes.tableRow}
                  >
                    <StyledTableCell className={classes.tableCell}>
                      {row.first_name}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      {row.last_name}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      {row.role}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      <div>
                        <IconButton
                          onClick={() => {
                            setTraineeEditData(row);
                            handleClickOpenModal2();
                            // console.log(row);
                            // console.log(traineeEditData);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <EditModal />
                        <IconButton
                          onClick={() => {
                            deleteUser(row.email);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal1}>close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
