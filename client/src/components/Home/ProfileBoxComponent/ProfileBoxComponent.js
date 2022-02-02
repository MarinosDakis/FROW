import React from 'react';
import { Avatar, Card, CardHeader } from '@material-ui/core';
import { Link } from "react-router-dom";
import profilePic from "./profile_pic_placeholder.png";
import useStyles from "./styles";

export default function ProfileBoxComponent(props) {
    const { name, image } = props;

    const classes = useStyles();

    // TOADD
    return (
        <Card component={Link} to="/designers" sx={{ maxWidth: 345 }} className={classes.card}>
            <CardHeader
                avatar={<Avatar src={profilePic} aria-label={`${name}-profile-pic`} />}
                title={name}
                className={classes.root}
            />
        </Card>
    )


}
