import React, { useState, useEffect } from "react";

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
    <p>stores</p>
  );
}

export default StoresList;