import React from "react";
import {  makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    
    errorText:{
        color: theme.palette.primary.main,
    },

}))

export default function Loader(){

    const classes = useStyles();
    return(
        <h1 className={classes.errorText}>Sorry.. Network is not responding at the moment"</h1>
    )
}