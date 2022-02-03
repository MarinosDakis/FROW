import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

root: {
    marginTop: 100,
    padding: theme.spacing(1),
},
paper: {
    backgroundColor: "white",
    margin: "20px 0",
    borderRadius: 15,
    border: "#7e7878 solid 1px",
    boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
    height: 400,
    width: 700,
},
header: {
    fontSize: 25,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    border: "#7e7878 solid 1px",
    backgroundColor: "rgba(0, 0, 0, .2)",
    marginTop: 20,
},
grid: {
    display: "Flex",
    justifyContent: "Center",
    marginTop: 50,
},
grid2:{
    display: "Flex", 
    justifyContent: "center"
},
Paragraph:{
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
},
headerTopBottom: {
    justifyContent: "center",
    display: "grid",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
},
headerTop: {
    justifyContent: "center",
    display: "grid",
    textAlign: "center",
},
icon: {
    justifyContent: "center",
    display: "grid",
    textAlign: "center",
    marginTop: 20,

},
margins: {
    marginTop:20,
    marginBottom: 20,
}
})

);


/*
<Typography variant="Purchase Successful!" align="right">
h3 align right
</Typography>
*/
