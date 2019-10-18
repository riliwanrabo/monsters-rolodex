import React from "react";
import { Card } from "../card/card";
import "./card-list.scss";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
