import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiCardHeader-root': {
            minWidth: 200,
            textAlign: "inherit",
        },
    },
    card: {
        justifyContent: "center",
        display: "flex",
        minWidth: 350,
    }
}));