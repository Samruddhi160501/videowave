import React from "react";
import { categories } from "../../utils/data";
import Button from "../Button/Button";
import classes from "./Categories.module.css"
function Categories() {
  return (
    <div className={classes.container}>
      {categories.map((category) => (
        <Button key={category} text={category} />
      ))}
    </div>
  );
}

export default Categories;
