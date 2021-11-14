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
  console.log(api);

  return (
    <>
      <div>
        <Input
          placeholder="Busque por endereço ou CEP"
        />
        <Button
          text="Buscar"
        />
      </div>
      <p>stores</p>
    </>
  );
}

export default StoresList;