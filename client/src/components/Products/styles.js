import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    marginTop: 100,
    flexGrow: 1,
    "&.MuiButton-contained": {
      color: "black",
      backgroundColor: "white",
    },
    "&.MuiGrid-root": {
      backgroundColor: "white",
      marginTop: 10,
    },
    "&.MuiGrid-item": {
      backgroundColor: "white",
      marginTop: 10,
    },
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
  }
}));