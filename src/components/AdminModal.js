import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useStyles from "../style/adminModalStyle";
import { Typography } from "@mui/material";
import dataContext from "../context/dataContext";
// import SelectBoss from "./SelectBoss";

export default function AdminModal() {
    const { open, setOpen } = React.useContext(dataContext);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>Add or Edit the USER.</DialogContentText>
                    <div className={classes.input}>
                        <Typography>First Name</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className={classes.input}>
                        <Typography>Last Name</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className={classes.input}>
                        <Typography>email</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className={classes.input}>
                        <Typography>password</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className={classes.input}>
                        <Typography>role</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className={classes.input}>
                        <Typography>Parent Email</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    {/* <div className={classes.input}>
                        <Typography>Last Name</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <SelectBoss /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Update Table</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
