import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiPaper-root': {
            display: "flex",
            height: '100%',
            backgroundColor: 'black',
            color: 'white',
            margin: "0px 50px",
            justifyContent: "center",
            cursor: "pointer",
<<<<<<< Updated upstream
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            '&:hover': {
                backgroundColor: "white",
                color: "black"
=======
            transition: 'background .3s',
            '&:hover': {
                background: "#7e7878",
>>>>>>> Stashed changes
            },
        },
        '&.MuiCardContent-root': {
            minWidth: 50,
            maxWidth: 400,
        },
    },
}));