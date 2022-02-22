import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import profilePic from "./profile_pic_placeholder.png";

import useStyles from "./styles";

export default function DesignerDisplayComponent(props) {

  const { designerName, image, designerSummary } = props;
  const classes = useStyles();


  useEffect(() => {

  }, [props]);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.root} component="img" height="140" image={profilePic} alt={`${designerName}-profile-pic`} />
      <CardContent className={classes.root}>
        <Typography gutterBottom variant="h5" component="div">{designerName}</Typography>
        <Typography variant="body2" color="white" style={{fontSize: 18}}>{designerSummary}</Typography>
      </CardContent>
    </Card>
  )
}
