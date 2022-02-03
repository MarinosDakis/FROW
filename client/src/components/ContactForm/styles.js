import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    padding: theme.spacing(1),
    justifyContent: "center",
    display: "flex",
    '&.MuiDivider-root': {
      borderColor: "black",
      marginBottom: "20px",
    },
  },
  paper: {
    backgroundColor: "white",
    margin: "20px 0",
    borderRadius: 15,
    border: "#7e7878 solid 1px",
    boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
    maxWidth: 800,
    paddingBottom: 30,
    width: "500px",
  },
  header: {
    fontSize: 30,
    paddingBottom: 20,
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    width: 200,
  },
  headerTopBottom: {
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    width: 300
  },
  textfield: {
    width: 300
  },
  button: {
    padding: theme.spacing(1),
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",

    "&.MuiButton-contained": {
      color: "black",
      backgroundColor: "white",
      width: "100%",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&.MuiButtonBase-root': {
      backgroundColor: "black",
    },
  },
}));