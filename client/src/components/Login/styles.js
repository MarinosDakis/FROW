import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&.MuiButtonBase-root': {
      backgroundColor: "black",
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    '&.MuiButtonBase-root': {
      backgroundColor: "black",
    },
  },
  margin: {
  '&.MuiContainer-root': {
    marginTop: 100,
  },
},
}));