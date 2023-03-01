import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.primary,
    color: theme.palette.common.secondary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const useStyles = makeStyles({
  root: {
    // boxSizing:"border-box !important",
    // maxHeight: '40%',

    // width: '95% !important',
    // border: '2px black solid',

    display: 'flex !important',

    flexDirection: 'column !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    gap: '2% !important',

  },
  tableContainer: {

    maxHeight: '400px',
  },
  tableHead: {
    backgroundColor: '#0093E9',
  },
  tableHeaderCell: {
    // color: 'white !important',
    textAlign: 'center !important',
    fontWeight: '700 !important',
  },
  tableCell: {
    textAlign: 'center !important',
  },
  bar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
