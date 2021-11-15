import React from 'react';

const Maps = ({ coordinates, closests }) => {
  const onlyCoordinates = [];
  closests.map(item => onlyCoordinates.push([item.latitude, item.longitude]))
  const first = onlyCoordinates[0].toString()
  const second = onlyCoordinates[1].toString()
  const third = onlyCoordinates[2].toString()

  return (
    <>
    <p>mapa</p>
    <div>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.replace(' ', '')}&zoom=12&size=400x400&markers=color:red%7C${first}%7C${second}%7C${third}&key=AIzaSyBw8WeeewqjZyMl8R0SmOZjBnAmWgP6Pu0`} alt="Mapa com localização das lojas próximas" />
    </div>
    </>
  )
}

export default Maps;
