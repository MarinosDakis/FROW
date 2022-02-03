import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '&.MuiPaper-root': {
            display: "flex",
            margin: 20,
            borderRadius: 30,
        },
        '&.MuiCardMedia-root': {
            height: 250,
            width: 250,
        },
        '&.MuiCardContent-root': {
            minWidth: 100,
        },
        [theme.breakpoints.down("xs")]: {
            '&.MuiCardMedia-root': {
                height: 150,
            },
        },
    }
}));