import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiCardHeader-root': {
            minWidth: 200,
            textAlign: "inherit",
        },
        '& .MuiTypography-root': {
            fontSize: 20,
            textDecoration: "none",
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
    }
}));