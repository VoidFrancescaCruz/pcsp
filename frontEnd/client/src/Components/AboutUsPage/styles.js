import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
  },

  form: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },

  titleCard: {
    width: '100%',
    color: 'white !important',
    paddingTop: 'auto',
    paddingBottom: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },


  paragraph: {
    width: '100%',
    color: 'white !important',
    paddingTop: 'auto',
    paddingBottom: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '20px'
  },

  vectorImage: {
    width: '50%',
    borderRadius: '70px',
    marginTop: '20px',
    marginInline: '100px'

  },

  logo: {
    width: '100%',
  },
  
  titleCardBackground: {
    backgroundColor: '#011E2C !important',
    border: '#011E2C !important',
    marginTop: '30px',
    paddingTop: '12px',
    paddingBottom: '8px',
  },
}));
