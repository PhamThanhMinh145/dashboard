import React from "react";
import { Button } from "@mui/material";
const ActionButton = ({ color, children, onClick, disabled}) => {
  return (
    <Button onClick={onClick} className={color} disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
