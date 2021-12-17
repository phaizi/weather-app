import React from "react";
import {  makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    
    loadingText:{
        color: theme.palette.primary.main,
    },
    tagline: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        fontFamily: 'Yusei Magic,sans-serif',
    },
    instructions: {
        color: theme.palette.secondary.main,
      fontSize: 30,
      fontWeight: 'bold'
    },
    buttonContainer: {
      display: 'flex', 
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'center',
    }

}))

export default function Loader(){

    const classes = useStyles();
    return(
        <h1 className={classes.loadingText}>Loading Weather, please wait...</h1>
    )
}