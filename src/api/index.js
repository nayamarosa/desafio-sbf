const apiData = async () => {
  try {
    const res = await fetch('https://api.gruposbf.com.br/geolocation-api/stores');
    return await res.json();
  } catch (e) {
    console.error(e);
    throw new Error("Serviço indisponível, tente novamente mais tarde")
  }
};

const apiList = () => apiData()
const apiRes = () => apiData().then(data => data)

const apis = { apiList, apiRes}

export default apis;