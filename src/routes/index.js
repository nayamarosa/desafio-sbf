import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Stores from './Stores';

const RoutesList = () => (
  <Routes>
    <Route exact path="/" element={ <Stores/> }></Route>
  </Routes>
);

export default RoutesList;