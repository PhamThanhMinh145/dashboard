import React from "react";
import { Button } from "@mui/material";
const ActionButton = ({ color, children, onClick }) => {
  return (
    <Button onClick={onClick} className={color}>
      {children}
    </Button>
  );
};

export default ActionButton;
