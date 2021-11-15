import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

import api from '../../api'
import Input from '../../components/Input';
import Icon from '../../components/Icon'
import StoresItem from '../../components/StoresItem';

export const getCoordinates = (inputValue) => {
  return inputValue.split(',');
}

export const getDistance = (inputValue, api) => {
  return api.map((item) => {
  const latitude = parseFloat(item.latitude - getCoordinates(inputValue)[0]);
  const longitude = parseFloat(item.longitude - getCoordinates(inputValue)[1]);
  const distanceCalc = Math.sqrt(Math.pow(latitude, 2) + Math.pow(longitude, 2))
    console.log(distanceCalc)
    return {...item, distance: distanceCalc}
  })
}

const StoresList = () => {
  const [apiData, setApiData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [closestStores, setClosestStores] = useState([]);

  const apiImport = async() => {
    setApiData(await api.apiRes());
  }

  useEffect(() => {
    apiImport();
    console.log(closestStores)
  }, [])

  const search = (e, inputSearch) => {
    e.preventDefault();
    setClosestStores(getDistance(inputSearch, apiData).sort((a, b) => a.distance - b.distance).slice(0, 3));
  }

  return (
    <>
      <h1 class="stores__title">lojas</h1>
      <form class="stores__form">
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
        <section class="stores__result">
          <div class="stores__result-filter">
            <p>Menor distância</p>
            <Icon icon="./images/icon_seta_baixo.svg" alt="Seta para  baixo"/>
          </div>
          <ul class="stores__result-list" data-testid="list">
            {closestStores.map((item, index) => <StoresItem name={item.name} adress={item.adress} key={index}/>)}
          </ul>
        </section>
      }
      </>
    </>
  );
}

export default StoresList;