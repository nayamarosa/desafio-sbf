import React from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
  
import Icon from '../../components/Icon';

export const Maps = (props) => {
  const coordinates = props.coordinates.split(',');
  console.log(props)
  console.log(props.mobileMap)
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
    closeBtn.classList.remove('show');
    closeBtn.classList.add('hidden');
  }

  return (
    <>
      <button className="icon__close" onClick={(e) => closeMap(e)}>
        <Icon icon="./images/icon_close.svg" alt="Fechar mapa"/>
      </button>
      <Map
        google={props.google}
        zoom={12}
        initialCenter={
          props.mobileMap.length <= 0
          ? { lat: coordinates[0], lng: coordinates[1] }
          : { lat: props.mobileMap[0], lng: props.mobileMap[1] }
        }
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