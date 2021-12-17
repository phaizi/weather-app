import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {  makeStyles } from '@mui/styles';
// import {Regions} from '../Services/Regions';
// import Paper from '@mui/material/Paper';
// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        //   height:'50px',
        // height:'10%',
    // marginTop:'50px',
    marginLeft: 10,
    // padding:'5px',
    
    // color: "red", fontWeight:'bold',
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
        // Default transform is "translate(14px, 20px) scale(1)""
        // This lines up the label with the initial cursor position in the input
        // after changing its padding-left.
        //   backgroundColor:"red", 
        transform: "translate(34px, 20px) scale(1);"
    }
},
inputRoot: {
    color: 'white', 
    fontWeight:'bold', 
    backgroundColor:theme.palette.primary.light,
    // marginTop:'5px',
    // marginBottom:'5px',
    // paddingBottom:'100px',
    // height:'50px',
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26,
    //   paddingBottom: 10
    },
    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "green",
    // //   height:'50px',
    //   borderWidth:'1px'
    // },
    // "&:hover .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "red"
    // },
    // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "purple"
    // }
  }
}));

export default function SearchButton({optionList,label,onChange,disabled}) {
  const classes = useStyles();
 
  return (
    <Autocomplete
      id="combo-box-demo"
      classes={classes}
      onChange={onChange}
      options={optionList}
    //   getOptionLabel={(option) => option}
      style={{ width: 300, }}
    //   PaperComponent={({ children }) => (
    //     <Paper style={{ background: "yellow" }}>{children}</Paper>
    //   )}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label={label}
            // size="small"
            variant="outlined"
            disabled={disabled}
            fullWidth
          />
        );
      }}
    />
  );
}