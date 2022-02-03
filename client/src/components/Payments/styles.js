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
        borderRadius: 4,
        paddingBottom: 30,
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    text: {
        textAlign: "center",
    },
    svg: {
        '&.MuiSvgIcon-root': {
            fontSize: 80,
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
        submit: {
            '&.MuiButtonBase-root': {
                backgroundColor: "black",
                background: "black",
            },
        },
    },
}));