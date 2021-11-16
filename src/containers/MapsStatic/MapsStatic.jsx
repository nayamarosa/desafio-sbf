import React from 'react';

import Icon from '../../components/Icon';

const MapsStatic = ({ coordinates, closests }) => {
  const onlyCoordinates = [];
  closests.map(item => onlyCoordinates.push([item.latitude, item.longitude]))
  const first = onlyCoordinates[0].toString()
  const second = onlyCoordinates[1].toString()
  const third = onlyCoordinates[2].toString()

  return (
    <div class="map">
      <div class="map__close">
        <Icon icon="./images/icon_close.svg" alt="Fechar mapa"/>
      </div>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.replace(' ', '')}&zoom=12&size=1200x540&markers=icon:https://tinyurl.com/marker-sbf-map%7C${first}%7C${second}%7C${third}&key=AIzaSyBw8WeeewqjZyMl8R0SmOZjBnAmWgP6Pu0`} alt="Mapa com localização das lojas próximas" />
    </div>
  )
}

export default MapsStatic;
