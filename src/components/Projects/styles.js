import { makeStyles } from '@mui/styles';

export default makeStyles((theme  ) => ({
      appBar: {
        borderRadius: 10,
        margin: '5px 58px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
      },
      heading: {
        color: '#CD0E0E',
        fontFamily: 'rockwell',
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
      box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      },
}));