import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 100,
        padding: theme.spacing(1),
        flexGrow: 1,
        "&.MuiButton-contained": {
            color: "black",
            backgroundColor: "white",
        },
    },
    button:{
        padding: theme.spacing(1),
        flexGrow: 1,
        "&.MuiButton-contained": {
            color: "black",
            backgroundColor: "white",
        },
    },
    paper: {
        backgroundColor: "white",
        margin: "20px 0",
        marginBottom: '0',
        borderRadius: 4,
        paddingBottom: 30,
        maxWidth: 650,
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
        marginTop: 10,
    },

}));