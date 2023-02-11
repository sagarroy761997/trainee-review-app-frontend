import { makeStyles } from "@mui/styles";

export default makeStyles({
  root: {
    display: "grid !important",
    gridAutoRows: 'auto',
    gridAutoColumns: 'auto',
    // gap: '4%',
    boxSizing: 'border-box',
    // marginRight: 
  },
  imageDiv: {
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
  },
  image: {
    borderRadius: '10px',
    border: '1px solid black',
    height: '243px',
    width: '207px',
    marginBottom: '4%',
        
  },
  info: {
    gridColumn: '2/5',

  },
  name:{
    width: '100%'
  },
  date: {
    display: 'flex',
    justifyContent: "space-between",
    gap: '4%'
  },
  startDate:{
    width: '100%',
  },
  certificate: {
    gridRow: '2',
    gridColumn : "1/5",

  },

  certificateStore: {
    display: 'flex',
    flexWrap: 'wrap',
    border : "1px solid grey",
    borderRadius: '7px',
    // justifyContent: 'space-around',
    // display: 'grid',
    // gridAutoRows: 'auto',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridAutoFlow: 'column',
    gap: '1%',
    padding: '1% 1% 0 1% ',
  },
  certificateHeading:{
    margin: '1% !important',
  },
  certificateForm: {
    display: 'flex',
    justifyContent: 'start',
    gap: '1%',
    alignItems: 'center',
  },



  project: {
    gridRow: '3',
    gridColumn : "1/5",

  },
  
  projectStore: {
    display: 'flex',
    flexWrap: 'wrap',
    border : "1px solid grey",
    borderRadius: '7px',
    // justifyContent: 'space-around',
    // display: 'grid',
    // gridAutoRows: 'auto',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridAutoFlow: 'column',
    gap: '1%',
    padding: '2% 1% 1% 1%',
  },
  projectHeading:{
    margin: '1%',
  },
  projectForm: {
    display: 'flex',
    justifyContent: 'start',
    gap: '1%',
    alignItems: 'center',
  }
});
