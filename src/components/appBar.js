import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const appBar = (props) => {
    const role = props.data.toUpperCase()
  return (
    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6">
              {role}
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default appBar