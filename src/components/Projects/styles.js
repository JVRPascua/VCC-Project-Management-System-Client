import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
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
}));