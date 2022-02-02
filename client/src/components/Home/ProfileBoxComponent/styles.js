import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiCardHeader-root': {
            textAlign: "inherit",
        },
        '& .MuiTypography-root': {
            fontSize: 20,
        },
    },
    card: {
        justifyContent: "center",
        display: "flex",
        minWidth: 350,
        cursor: "pointer",
        '&:hover': {
            background: "#9066e7",
        },
        textDecoration: "none",
    }
}));