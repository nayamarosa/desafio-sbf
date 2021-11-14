import React from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesList from "../../routes";

const App = () => {
  return (
    <BrowserRouter>
      <p>Header</p>
        <RoutesList/>
      <p>Footer</p>
    </BrowserRouter>
  );
}

export default App;
