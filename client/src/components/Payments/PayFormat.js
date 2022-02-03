import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Root: {
        marginTop: 100,
        padding: theme.spacing(1),
        justifyContent: "center",
        display: "flex",
        '&.MuiDivider-root': {
            borderColor: "black",
            marginBottom: "20px",
        },
    },
paper: {
    backgroundColor: "white",
    
},
Box: {
    marginTop: 100,
    justifyContent:"center",
    display: "flex",
    backgroundColor: "white",
    '&.MuiDivider-root': {
        borderColor: "black",
        marginBottom: "20px",
    },
},
Box1: {
    marginTop: 100,
    justifyContent:"center",
    display: "flex",
    backgroundColor: "white",
    '&.MuiDivider-root': {
        borderColor: "black",
        marginBottom: "20px",
    },
},
Box2: {
    display: "flex",
    justifyContent: "center",
    width: 50,
    backgroundColor: "white",
},
Box3: {
    display: "flex",
    justifyContent: "center",
    width: 75,
    backgroundColor: "white",
},
Box4: {
    display: "flex",
    justifyContent: "center",
    width: 80,
    backgroundColor: "white",
    '&.MuiDivider-root': {
        borderColor: "black",
    },
},
Box5: {
    display: "flex",
    justifyContent: "left",
    width: 80,
    backgroundColor: "white",
},
grid: {
    display: "Flex",
    justifyContent: "Center"
},
}));