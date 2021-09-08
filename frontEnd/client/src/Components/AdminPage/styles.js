import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  root: {
    '& .MuiTextField-root': {
      //margin: theme.spacing(1),
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

  fileInput: {
    width: '97%',
    margin: '10px 0',
  },

  textField: {
    background: 'white',
    color: 'white',
    height: 48,
    width: '400px',
    overflow: 'hidden',
  },

  titleCard: {
    width: '100%',
    color: 'white !important',
    textAlign: 'center',
  },

  titleCardBackground: {
    width: '100%',
    backgroundColor: '#E56660 !important',
    border: '#E56660 !important',
    marginTop: '30px',
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'center'
    // marginLeft: '424px'
  },

  logInButton: {
    marginTop: '500',
    marginBottom: '500',
    alignContent: 'center',
    backgroundColor: '#FFFFFF !important',
    border: '#FFFFFF !simportant',
    color: '#E56660',
    fontFamily: '"Raleway", sans-serif',
    padding: '10px',
    paddingLeft: '40px',
    paddingRight: '40px',
    borderRadius: '5px',
    fontSize: '20px'
  }
  
}));