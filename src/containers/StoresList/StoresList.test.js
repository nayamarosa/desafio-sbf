import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import StoresList, { getCoordinates, calcDistance, getDistance } from './StoresList'
import StoresItem from "../../components/StoresItem";
import Button from "../../components/Button/Button";

describe('Stores List Route', () => {
  it('coordinates in array', () => {
    const getCoor = '-23.605033, -46.576552';
    const coordinates = getCoordinates(getCoor);
    expect(coordinates).toStrictEqual(['-23.605033', ' -46.576552'])
  })

  it('same snapshot list container', () => {
    const storesList = [
      { name: 'loja1', adress: 'rua1' },
      { name: 'loja2', adress: 'rua2' },
      { name: 'loja3', adress: 'rua3' }
    ]

    const { container } = render(
      storesList.map((item, index) => <StoresItem name={item.name} adress={item.adress} key={index}/>)
    )
    expect(container).toMatchSnapshot();
  })

  it('calc ok', () => {
    const getCoor = '-23.605033, -46.576552';
    const getObj = {
      "name": "NFS Alexania",
      "number": 6322,
      "latitude": "-16.121590171053200",
      "longitude": "-48.39803935435456",
      "adress": "BR 060- km22 – Zona Rural"
    }
    const calculate = calcDistance(getObj, getCoor);
    expect(calculate).toStrictEqual(7.701930456462772)
  })

  it('distance add to object', () => {
    const getCoor = '-23.605033, -46.576552';
    const getObj = [{
      "name": "NFS Alexania",
      "number": 6322,
      "latitude": "-16.121590171053200",
      "longitude": "-48.39803935435456",
      "adress": "BR 060- km22 – Zona Rural"
    }]
    const distance = getDistance(getCoor, getObj);
    expect(distance).toStrictEqual([{
      "name": "NFS Alexania",
      "number": 6322,
      "latitude": "-16.121590171053200",
      "longitude": "-48.39803935435456",
      "adress": "BR 060- km22 – Zona Rural",
      "distance": 7.701930456462772
    }])
  })
}) 