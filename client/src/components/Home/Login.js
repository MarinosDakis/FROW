import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from './styles.js';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
export default function Login(){

    const [open, setOpen] = React.useState(1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <button>HI</button>
    );
}