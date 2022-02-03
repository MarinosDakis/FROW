import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 100,
        padding: theme.spacing(1),
        justifyContent: "center",
        display: "flex",
    },
    paper: {
        backgroundColor: "white",
        margin: "20px 0",
        borderRadius: 4,
        border: "#7e7878 solid 1px",
        boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
        paddingBottom: 30,
        minHeight: 400,
    },
    text: {
        textAlign: "center",
    },
    svg: {
        '&.MuiSvgIcon-root': {
            fontSize: 30,
            textAlign: "center",
            marginBotton: 30,
        },
        alert: {
            maxWidth: 200,
            margin: "0 10px",
        },
        form: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "column",
          },
          card: {
            '&.MuiPaper-root': {
                maxWidth: 300,
                display: "flex",
                justifyContent: "center",
            },
          },
    },
}));