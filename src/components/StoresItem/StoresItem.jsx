import React from "react";

const StoresItem = ({ name, adress }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{adress}</p>
      <p>horário de funcionamento</p>
    </div>
  )
}

export default StoresItem;