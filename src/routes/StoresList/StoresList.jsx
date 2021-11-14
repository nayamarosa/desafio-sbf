import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

import Input from "../../components/Input";

const StoresList = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://api.gruposbf.com.br/geolocation-api/stores')
        .then((res) => res.json())
        .then((data) => setApi(data))
      } catch (e) {
        console.error(e);
        throw new Error("Serviço indisponível, tente novamente mais tarde")
      }
    };
    fetchData();
  }, [])
  
  const [inputSearch, setInputSearch] = useState('');
  
  const search = (e) => {
    e.preventDefault();
    console.log(inputSearch);
    console.log(api);

    const getGeolocation = inputSearch.split(',');
    console.log(getGeolocation);
  }

  return (
    <>
      <div>
        <Input
          placeholder="Busque por endereço ou CEP"
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Button
          text="Buscar"
          type="submit"
          onClick={(e) => search(e)}
        />
      </div>
      <p>stores</p>
    </>
  );
}

export default StoresList;