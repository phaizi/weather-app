import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 10,
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      transform: "translate(34px, 20px) scale(1);",
    },
  },
  inputRoot: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#808080",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      paddingLeft: 26,
    },
  },
}));

export default function SearchButton({
  optionList,
  label,
  onChange,
  disabled,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isNotXSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isNotSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const maxWidth = isNotSmallScreen ? undefined : isNotXSmallScreen ? 185 : undefined;
  return (
    <Autocomplete
      classes={classes}
      onChange={onChange}
      options={optionList}
      style={{ width: 300,maxWidth}}
      size={isNotSmallScreen?'medium':'small'}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            disabled={disabled}
            fullWidth
          />
        );
      }}
    />
  );
}
