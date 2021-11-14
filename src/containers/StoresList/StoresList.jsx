import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

import api from '../../api'
import Input from "../../components/Input";
import StoresItem from "../../components/StoresItem";
import Newsletter from "../../components/Newsletter/Newsletter";

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
  }, [])

  const search = (e, inputSearch) => {
    e.preventDefault();

    setClosestStores(getDistance(inputSearch, apiData).sort((a, b) => a.distance - b.distance).slice(0, 3));
  }

  return (
    <>
      <form>
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
      <p>stores</p>
      <ul data-testid="list">
        { closestStores !== undefined &&
          (closestStores.map((item, index) => <StoresItem name={item.name} adress={item.adress} key={index}/>))
        }
      </ul>

      <Newsletter />
    </>
  );
}

export default StoresList;