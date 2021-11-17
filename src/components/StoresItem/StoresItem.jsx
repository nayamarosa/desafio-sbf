import React from "react";

import Icon from "../Icon";

const StoresItem = ({ name, adress, onClick }) => {
  return (
    <li className="stores__list-item">
      <p className="stores__list-item--title">{name}</p>
      <a href="/" className="show-map" onClick={onClick}>
        <Icon icon='./images/icon_pin_link.svg' alt="Ver no mapa" />
        <p className="stores__list-item--map">Ver no mapa</p>
      </a>
      <div className="stores__list-item-group">
        <p className="stores__list-item--address">{adress}</p>
        <p className="stores__list-item--time">Atendimento:</p>
        <p className="stores__list-item--time">Segunda a Sábado 10h às 22h | Domingo 11h às 20h</p>
        <span>Disponível em 4 dias úteis</span>
      </div>
    </li>
  )
}

export default StoresItem;