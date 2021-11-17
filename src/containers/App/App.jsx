import React from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesList from "../../routes";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

import '../../assets/styles/main.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <RoutesList/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
