import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiPaper-root': {
            display: "flex",
            margin: "50px 0",
        },
        '&.MuiCardMedia-root': {
            height: 250,
            width: 250,
        },
        '&.MuiCardContent-root': {
            minWidth: 300,
            maxWidth: 350,
        }

    },
}));