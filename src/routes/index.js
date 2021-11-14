import React from 'react';
import { Route, Routes } from 'react-router-dom';

import StoresList from './StoresList';

const RoutesList = () => (
  <Routes>
    <Route exact path="/" element={ <StoresList/> }></Route>
  </Routes>
);

export default RoutesList;