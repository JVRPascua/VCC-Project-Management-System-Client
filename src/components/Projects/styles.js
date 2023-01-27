import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        margin: '5px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
      },
      heading: {
        color: '#CD0E0E',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        fontSize: 30
      },
      appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
      },
      pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
      },
      gridContainer: {
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column-reverse',
        },
      },
}));