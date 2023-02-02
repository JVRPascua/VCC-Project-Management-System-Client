import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    actionDiv: {
      textAlign: 'center',
    },
    appBar: {
      borderRadius: 10,
      margin: '5px 0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 350,
    },
    heading: {
      color: '#CD0E0E',
      fontFamily: 'rockwell',
      fontWeight: 600,
      fontSize: 30
    },
    paper: {
      height: 650,
      width: 350,
      backgroundColor: "white"
    },
  }));