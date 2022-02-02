import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 100,
        padding: theme.spacing(1),
    },
    paper: {
        backgroundColor: "white",
        margin: "20px 0",
        borderRadius: 15,
        border: "#7e7878 solid 1px",
        boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
        paddingBottom: 30,
    },
    header: {
        fontSize: 30,
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
    },
    grid: {
        display: "flex",
        justifyContent: "center",
    },

}));