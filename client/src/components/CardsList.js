import React from "react";

import Card from "./Card";
import "./CardsList.scss";

const CardsList = props => {
  const { cars } = props;
  return (
    <div className="cardsList">
      {cars.map(car => (
        <Card car={car} />
      ))}
    </div>
  );
};

export default CardsList;
