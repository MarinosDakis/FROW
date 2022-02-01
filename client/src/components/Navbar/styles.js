import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    button: {
        "&.MuiButton-contained": {
            color: "white",
            backgroundColor: "black",
            height: 40,
            width: 100,
        },
    },
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: 'white',
    },
    heading: {
        color: "black",
        textDecoration: 'none',
    },
    image: {
        marginLeft: 30,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
}));