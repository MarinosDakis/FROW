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
<<<<<<< Updated upstream
        minWidth: 300,
        cursor: "pointer",
=======
        backgroundColor: 'black',
        color: 'white',
        minWidth: 350,
        cursor: "pointer",
        transition: 'background .3s',
        '&:hover': {
            background: "#7e7878",
        },
>>>>>>> Stashed changes
        textDecoration: "none",
    }
}));