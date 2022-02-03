import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 160,
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
        borderRadius: 4,
        border: "#7e7878 solid 1px",
        boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
        maxWidth: 700,
        paddingBottom: 30,
    },
    header: {
        fontSize: 30,
        display: "flex",
        justifyContent: "center",
    },
    loadContainer: {
        textAlign: 'center'
    },
    header2: {
        fontSize: 20,
        display: "flex",
        justifyContent: "center",
    },
    header3: {
        marginBottom: '45px',
        fontSize: 25,
        display: "flex",
        justifyContent: "center",
    },
    header4: {
        fontSize: 20,
        marginBottom: '20px',
        display: "flex",
        justifyContent: "center",
        textAlign: 'center'
    },
    grid: {
        display: "flex",
        justifyContent: "center",
    },
    gridItem: {
        display: "flex",
        justifyContent: "center",
        width: 200,
    },
    headerTopBottom: {
        marginTop: 30,
        marginBottom: 0,
    },
    headerTopMid: {
        marginTop: 10,
        marginBottom: 0,
    }

}));