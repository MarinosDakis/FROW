import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiPaper-root': {
            display: "flex",
            margin: "0px 50px",
            justifyContent: "center",
            cursor: "pointer",
            '&:hover': {
                background: "#9066e7",
            },
        },
        '&.MuiCardContent-root': {
            minWidth: 50,
            maxWidth: 400,
        },
        card: {
            textDecoration: "none",
        }

    },
}));