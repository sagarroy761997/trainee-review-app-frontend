/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */

import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  // AppBar,
  // Toolbar,
  // Typography,
  // Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from '../helper/Axios';

import {
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from '../style/tableStyle';
import dataContext from '../context/dataContext';
import AdminEditModal from './AdminEditModal';

function AdminTable({ data }) {
  const {
    apiData, setApiData, setOpenModal2, setUserEditData,
  } = useContext(dataContext);
  const classes = useStyles();

  const deleteUser = async (email, role) => {
    let { managerData, trainerData, traineeData } = apiData;
    if (role === 'manager') {
      for (const i of trainerData) {
        if (i.parent_email === email) {
          for (const j of traineeData) {
            if (j.parent_email === i.email) {
              const filterData = traineeData.filter(
                (element) => element.parent_email !== i.email,
              );
              traineeData = filterData;
            }
          }

          const filterData = trainerData.filter(
            (element) => element.parent_email !== email,
          );
          trainerData = filterData;
        }
      }
    }
    if (role === 'trainer') {
      for (const k of traineeData) {
        if (k.parent_email === email) {
          const filterData = traineeData.filter(
            (element) => element.parent_email !== email,
          );
          traineeData = filterData;
        }
      }
    }

    await Axios
      .delete(`http://localhost:4999/deleteUser/${email}`)
      .then((fetched) => {
        console.log(fetched.data);
        const filterData = data.filter(
          (element) => element.email !== email,
        );

        if (role === 'manager') {
          managerData = filterData;
        } else if (role === 'trainer') {
          trainerData = filterData;
        } else {
          traineeData = filterData;
        }

        // setApiData({managerData, trainerData , traineeData})
      })
      .catch((error) => console.log(error.massage));

    setApiData({ managerData, trainerData, traineeData });
  };

  const handleClickOpenModal2 = () => {
    setOpenModal2(true);
  };

  return (
    <div className={classes.root}>

      <TableContainer className={classes.tableContainer}>

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
            {data.map((row) => (
              <StyledTableRow key={`user${row.first_name}`} className={classes.tableRow}>
                <StyledTableCell className={classes.tableCell}>
                  {row.first_name}
                </StyledTableCell>
                <StyledTableCell className={classes.tableCell} align="right">
                  {row.last_name}
                </StyledTableCell>

                <StyledTableCell className={classes.tableCell} align="right">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell className={classes.tableCell} align="right">
                  <div>
                    <IconButton
                      onClick={() => {
                        setUserEditData(row);
                        handleClickOpenModal2();
                        // console.log(userEditData)
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <AdminEditModal data={row} />
                    <IconButton
                      onClick={() => {
                        deleteUser(row.email, row.role);
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
    </div>
  );
}

export default AdminTable;
