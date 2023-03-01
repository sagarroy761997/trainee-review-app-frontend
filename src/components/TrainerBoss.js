import React, {useContext} from 'react'
import dataContext from '../context/dataContext'

const TrainerBoss = ({ role, parentEmail, changeParentEmail }) => {
    const {apiData} = useContext(dataContext)
    const {personalData, trainerData} = apiData
    if (role === 'trainer') {
        return (
          <Box className={classes.input}>
            <Typography>Boss</Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                fullWidth
                value={parentEmail}
                onChange={changeParentEmail}
              >
                <MenuItem
                  value={personalData.email}
                >
                  {`${personalData.first_name} ${personalData.last_name}`}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        );
      }
      return (
        <div className={classes.input}>
          <Typography>Boss</Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={parentEmail}
              label="Boss"
              size="small"
              fullWidth
              onChange={changeParentEmail}
            >
              {trainerData.map((element) => (
                <MenuItem
                  value={element.email}
                >
                  {`${element.first_name} ${element.last_name}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
}

export default TrainerBoss




