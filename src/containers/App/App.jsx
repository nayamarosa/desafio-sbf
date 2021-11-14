import React from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesList from "../../routes";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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
