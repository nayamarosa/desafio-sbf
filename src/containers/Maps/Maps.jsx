import React from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
  
import Icon from '../../components/Icon';

export const Maps = (props) => {
  const coordinates = props.coordinates.split(',');
  const onlyCoordinates = [];
  props.closests.map(item => onlyCoordinates.push([item.latitude, item.longitude]))

  
  const displayMarkers = () => {
    return props.closests.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      icon={{
        url: './images/icon_pin_mapa.svg'
      }}
      title={store.name}
      />
    })
  }

  const closeMap = (e) => {
    e.preventDefault();
    const closeBtn = document.querySelector('.map');
    closeBtn.classList.add('hidden');
  }

  return (
    <>
      <button class="icon__close" onClick={(e) => closeMap(e)}>
        <Icon icon="./images/icon_close.svg" alt="Fechar mapa"/>
      </button>
      <Map
        google={props.google}
        zoom={12}
        initialCenter={{ lat: coordinates[0], lng: coordinates[1] }}
      >
        {displayMarkers()}
      </Map>
    </>
  );
}

export default GoogleApiWrapper(
  () => ({
    apiKey: 'AIzaSyBw8WeeewqjZyMl8R0SmOZjBnAmWgP6Pu0',
  }
  ))(Maps);