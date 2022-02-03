import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiPaper-root': {
            display: "flex",
            margin: "0px 50px",
            justifyContent: "center",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            '&:hover': {
                backgroundColor: "white",
                color: "black"
            },
        },
        '&.MuiCardContent-root': {
            minWidth: 50,
            maxWidth: 400,
        },
    },
}));