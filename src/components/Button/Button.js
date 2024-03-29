import React from "react";
import classes from "./Button.module.css"
function Button(props) {
  return <button className={classes.btn}>{props.text}</button>;
}

export default Button;
