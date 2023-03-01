import { makeStyles } from '@mui/styles';

export default makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // '@media (max-width: 550px)': {
    //   display: 'block !important'
    // }
  },
  leftBox: {
    width: '50%',
    // backgroundColor: 'blue',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12%',
    boxSizing: 'border-box',
    backgroundColor: '#0093E9',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    // flex: "auto"
    // '@media (max-width: 400px)': {
    //   display: 'none !important'
    // },
    '@media (max-width: 770px)': {
      display: 'none !important',
    },
  },
  appName: {
    padding: ' 0 14%',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '2%',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },

  heading: {
    fontSize: '4em !important',
    color: 'white',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: "4%",
    width: '50%',
    gap: '20px',
    flex: '1',
  },
  inputBox: {
    width: '60%',
  },
  logo: {
    width: '30%',
  },
});
