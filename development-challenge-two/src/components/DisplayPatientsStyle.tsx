import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 550,
  },
  tableContainer: {
    borderRadius: 5,
    margin: '25px 1px 1px 240px',
    minWidth: 650,
    maxWidth: 1600
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#0288d1',
    fontSize: 16
  },
  tablecell: {
    fontSize: 14
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  info: {
    textAlign: 'center',
    backgroundColor: '#0288d1',
    fontSize: 14,
    color: 'white',
    borderRadius: 5,
    marginLeft: 240, 
    padding: '9px 16px',
    marginTop: 18,
    boxShadow: '1px 1px 1px 1px rgba(0 , 0, 0, .1)'
  },
  newPatientButton: {
    marginTop: 16,
    marginRight: 40,
    boxShadow: '1px 1px 1px 1px rgba(0 , 0, 0, .1)'
  }
}));

export default useStyles;