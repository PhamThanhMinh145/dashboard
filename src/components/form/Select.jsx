import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@mui/material";
const Select = ({ name, label, value, error = null, onChange, options }) => {
  return (
    <FormControl
      variant="outlined"
      style={{ width: "70%" }}
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem
            key={item.authorID || item.fieldID || item.publisherID}
            value={item.authorID || item.fieldID || item.publisherID}
          >
            {item.authorName || item.publisherName || item.fieldName}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
