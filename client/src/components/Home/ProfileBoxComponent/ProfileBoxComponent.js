import React from 'react';
import { Avatar, Card, CardHeader, Typography } from '@material-ui/core';
import profilePic from "./profile_pic_placeholder.png";

export default function ProfileBoxComponent(props) {
    const { name, image } = props;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={<Avatar src={profilePic} aria-label={`${name}-profile-pic`} />}
                title={name}
            />
        </Card>
    )


}
