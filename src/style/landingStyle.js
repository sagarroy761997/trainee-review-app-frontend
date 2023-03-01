import { makeStyles } from '@mui/styles';

export default makeStyles({

  heading: {
    textAlign: 'center',
    color: 'Black',
    backgroundColor: 'White',
    fontSize: '1.2em !important',
    fontWeight: 'bolder',
    margin: '10px',
    backgroundColor: '#ede7f6',
  },
  tableBoxes: {
    border: '1px solid #90a4ae',
    width: '95%',
    marginTop: '2%',
    borderRadious: '30px !important',
    overflow: 'hidden !important',
  },
  bar: {
    backgroundColor: '#ede7f6 !important',
    position: 'sticky !important',
    boxShadow: 'none !important',
    border: '1px solid #90a4ae',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    color: 'blue !important',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center !important',
    alignItems: 'center',

  },
  loaderBox: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    color: 'black !important',
  },
});
