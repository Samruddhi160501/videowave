import React from "react";
import classes from "./Home.module.css";
import Categories from "../../components/Categories/Categories";
import { data } from "../../utils/data";
import Card from "../../components/cards/Card";
function Home() {
  return (
    <div className={classes.Wrapper}>
      <Categories></Categories>
     <div className={classes.card}> {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}</div>
    </div>
  );
}

export default Home;
