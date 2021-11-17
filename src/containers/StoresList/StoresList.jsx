import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

import api from '../../api'
import Input from '../../components/Input';
import Icon from '../../components/Icon'
import StoresItem from '../../components/StoresItem';
import Maps from '../../containers/Maps';

export const getCoordinates = (inputValue) => {
  return inputValue.split(',');
}

export const calcDistance = (item, value) => {
  const latitude = parseFloat(item.latitude - getCoordinates(value)[0]);
  const longitude = parseFloat(item.longitude - getCoordinates(value)[1]);
  const distanceCalc = Math.sqrt(Math.pow(latitude, 2) + Math.pow(longitude, 2))
  return distanceCalc;
}

export const getDistance = (inputValue, api) => {
  return api.map((item) => {
    return {...item, distance: calcDistance(item, inputValue)}
  })
}

const StoresList = () => {
  const [apiData, setApiData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [closestStores, setClosestStores] = useState([]);
  const [centerMap, setCenterMap] = useState([]);

  const apiImport = async() => {
    setApiData(await api.apiRes());
  }

  useEffect(() => {
    apiImport();
  }, [])

  const search = (e, inputSearch) => {
    e.preventDefault();
    setClosestStores(getDistance(inputSearch, apiData).sort((a, b) => a.distance - b.distance).slice(0, 3));
  }

  const getCenterMap = (e, coordinates) => {
    e.preventDefault();
    setCenterMap([coordinates.latitude, coordinates.longitude])
  }

  const openMap = (e) => {
    e.preventDefault();
    const closeBtn = document.querySelector('.map');
    closeBtn.classList.add('show');
  }

  return (
    <>
      <h1 className="stores__title">lojas</h1>
      <form className="stores__form">
        <Input
          placeholder="Busque por endereço ou CEP"
          type="text"
          data-testid="input-value"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Button
          text="Buscar"
          type="submit"
          data-testid="search-button"
          onClick={(e) => search(e, inputSearch)}
        />
      </form>
      <>
      { closestStores.length > 0 &&
        <section className="stores__section">
          <div className="stores__result">
            <div className="stores__result-filter">
              <p>Menor distância</p>
              <Icon icon="./images/icon_seta_baixo.svg" alt="Seta para  baixo"/>
            </div>
            <ul className="stores__result-list" data-testid="list">
              {closestStores.map((item, index) => <StoresItem name={item.name} adress={item.adress} key={index} onClick={(e) => {getCenterMap(e, item); openMap(e);}}/>)}
            </ul>
          </div>
          <div className={`map ${window.screen.width > 1024 ? 'show' : 'hidden'}`}>
            <Maps props coordinates={inputSearch} closests={closestStores} mobileMap={centerMap} />
          </div>
        </section>
      }
      </>
    </>
  );
}

export default StoresList;