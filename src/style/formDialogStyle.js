import { makeStyles } from '@mui/styles';

export default makeStyles({
  root: {
    padding: '50px',
    display: 'grid !important',
    gridAutoRows: 'minmax(100px, auto)',

    gridAutoColumns: 'auto',
    gap: '20px',
    boxSizing: 'border-box',
    // marginRight:

    // gridRowGap: '50px',

  },
  imageDiv: {
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
  },
  image: {
    borderRadius: '10px',
    border: '2px solid black',
    height: '243px',
    width: '207px',
    marginBottom: '4%',

  },
  info: {
    gridColumn: '2/5',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '20px',

  },
  name: {
    width: '100%',
  },
  date: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '4%',
  },
  startDate: {
    width: '100%',
  },
  certificate: {
    gridRow: '2',
    gridColumn: '1/5',
  },

  certificateStore: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '2px solid black',
    borderRadius: '7px',
    // justifyContent: 'space-around',
    // display: 'grid',
    // gridAutoRows: 'auto',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridAutoFlow: 'column',
    gap: '1%',
    padding: '1% 1% 0 1% ',
    minHeight: '70%',
  },
  certificateHeading: {
    margin: '1% !important',
    fontWeight: 'bold !important',
  },
  certificateForm: {
    display: 'flex',
    justifyContent: 'start',
    gap: '1%',
    alignItems: 'center',
  },

  project: {
    gridRow: '3',
    gridColumn: '1/5',

  },

  projectStore: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '2px solid black',
    borderRadius: '7px',
    // justifyContent: 'space-around',
    // display: 'grid',
    // gridAutoRows: 'auto',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridAutoFlow: 'column',
    gap: '1%',
    padding: '2% 1% 1% 1%',
    // minWidth: "300px"
    // minHeight: '50%',
  },
  projectHeading: {
    margin: '1% !important',
    fontWeight: 'bold !important',
  },
  projectForm: {
    display: 'flex',
    justifyContent: 'start',
    gap: '1%',
    alignItems: 'center',
  },
  skillTable: {
    gridRow: '4',
    gridColumn: '2/4',
  },
  heading: {
    fontWeight: 'bold !important',
  },

});
