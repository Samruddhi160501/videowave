import React from "react";
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${props.data.id}`);
  };
  return (
    <div className={classes.card} onClick={handleClick} >
      <img
        src={props.data.thumbnailUrl}
        alt="thumbnail"
        className={classes.img}
      />
      <h3 className={classes.title}>{props.data.title}</h3>
      <p className={classes.desc}>{props.data.author}</p>
      <p className={classes.desc}>{props.data.views} views</p>
    </div>
  );
}

export default Card;
