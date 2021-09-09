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

  buttonClass: {
    marginTop: '30px',
    marginBottom: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },

  buttonBackground: {
    backgroundColor: '#063646',
    color: 'white',
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
    color: '#011E2C',
    textAlign: 'center',  
    marginTop: '30px',
    marginBottom: '30px',
  },

  paragraph: {
    width: '100%',
    color: 'white',
    textAlign: 'center',
    paddingTop: '40px',
  },

  agreeDisagree: {
    width: '100%',
    color: 'white',
    marginBottom: '20px',
  },
  
  optionsWrap: {
    textAlign: 'center',
  },

  optionsContent: {
    display: 'inline-flex',
    textAlign: 'left',
  },

  titleCardBackground: {
    width: '100%',
    backgroundColor: '#011E2C',
    border: '#011E2C',
    paddingBottom: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
    textAlign: 'justify',
    // marginLeft: '424px'
  },

  logInButton: {
    marginTop: '500',
    marginBottom: '500',
    alignContent: 'center',
    backgroundColor: '#FFFFFF !important',
    border: '#FFFFFF !important',
    color: '#E56660',
    fontFamily: '"Raleway", sans-serif',
    padding: '10px',
    paddingLeft: '40px',
    paddingRight: '40px',
    borderRadius: '5px',
    fontSize: '20px'
  },


}));