import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiCardHeader-root': {
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            width: "-webkit-fill-available",
            '&:hover': {
                background: "white",
                color: "black",
            },
        },
        '& .MuiTypography-root': {
            fontSize: 17,
        },
    },
    card: {
        justifyContent: "center",
        display: "flex",
        minWidth: 300,
        cursor: "pointer",
        textDecoration: "none",
    }
}));