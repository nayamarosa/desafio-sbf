import React from "react";

const StoresItem = ({ name, adress }) => {
  return (
    <li class="stores__list-item">
      <p class="stores__list-item--title">{name}</p>
      <p class="stores__list-item--map">Ver no mapa</p>
      <div class="stores__list-item-group">
        <p class="stores__list-item--address">{adress}</p>
        <p class="stores__list-item--time">Atendimento:</p>
        <p class="stores__list-item--time">Segunda a Sábado 10h às 22h | Domingo 11h às 20h</p>
        <span>Disponível em 4 dias úteis</span>
      </div>
    </li>
  )
}

export default StoresItem;