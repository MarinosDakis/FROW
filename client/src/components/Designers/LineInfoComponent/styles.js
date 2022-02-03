import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiPaper-root': {
            display: "flex",
            margin: "0px 50px",
            justifyContent: "center",
            cursor: "pointer",
            '&:hover': {
                background: "#f2f2f2e0",
            },
            textDecoration: "none",
        },
        '&.MuiCardContent-root': {
            minWidth: 50,
            maxWidth: 400,
        },
    },
}));