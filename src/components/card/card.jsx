import React from "react";
import "./card.scss";

export const Card = props => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} alt="" />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
