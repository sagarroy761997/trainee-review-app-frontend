import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStyles from "../style/basicAppBarStyle";
import pic from "../assets/images/logo2.png";
import Axios from "../helper/Axios";
function BasicAppBar() {
  const navigate = useNavigate();

  const classes = useStyles();

  const logout = async () => {
    await Axios.post("http://localhost:4999/logout", {
      withCredentials: true,
    }).then((fetched) => {
      console.log(fetched.data, fetched.status);
      if (fetched.status === 200) {
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        navigate("/");
      }
    });
  };
  return (
    <AppBar className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <img src={pic} alt="logo" width="50" />
        </div>
        <div>
          <Button onClick={logout} className={classes.button}>Logout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default BasicAppBar;
