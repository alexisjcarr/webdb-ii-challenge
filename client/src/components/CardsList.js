import React from "react";

import Card from "./Card";

const CardsList = props => {
  const { cars } = props;
  return (
    <>
      {cars.map(car => (
        <Card car={car} />
      ))}
    </>
  );
};

export default CardsList;
