import React,{useContext} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  // Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormDialog from "./FormDialog";
import axios from "axios";
import useStyles from "../style/tableStyle";
import dataContext from "../context/dataContext";
import { useParams } from "react-router-dom";
import AdminModal from "./AdminModal";
const Tables = (props) => {
  console.log(props);
  const classes = useStyles();
  const deleteUser = async (email) => {
    await axios
      .delete(`http://localhost:4999/deleteUser/${email}`, {
        withCredentials: true,
      })
      .then((fetched) => console.log(fetched.data))
      .catch((error) => console.log(error.massage));
  };
  // const updateUser = async (email) => {
  //   await axios.put(`http://localhost:4999/updateUser/${email}`, payload,{
  //     withCredentials: true,
  //   })
  //   .then((fetched) => {console.log(fetched.data)})
  //   .catch((error) => {console.log(error.massage)})
  // }
  const {setOpen} = useContext(dataContext)
  const handleClickOpen = () => {
    setOpen(true);
  };
  // const {setOpen2} = useContext(dataContext);

  //   const handleClickOpen2 = () => {
  //       setOpen2(true);
  //   };

  const actionCell = (email) => {
    if (props.data.role === "admin") {
      return (
        <div>
          <IconButton onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
          <AdminModal />
          <IconButton
            onClick={() => {
              deleteUser(email);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      );
    } else {
      return (
        <div>
          <IconButton onClick={handleClickOpen}>
            <VisibilityIcon />
          </IconButton>
          <FormDialog/>
        </div>
      );
    }
  };
  return (
    <TableContainer>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableHeaderCell}>
              First Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Last Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Role
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Email
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Password
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {props.data.data.map((row) => (
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell}>
                {row.first_name}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.last_name}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.role}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.email}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.password}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">{actionCell(row.email)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
