import React from 'react';
import { Avatar, Card, CardHeader, Grid, Typography } from '@material-ui/core';
import profilePic from "./profile_pic_placeholder.png";
import useStyles from "./styles";

export default function ProfileBoxComponent(props) {
    const { name, image } = props;

    const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardHeader
                avatar={<Avatar src={profilePic} aria-label={`${name}-profile-pic`} />}
                title={name}
                className={classes.root}
            />
        </Card>
    )


}
