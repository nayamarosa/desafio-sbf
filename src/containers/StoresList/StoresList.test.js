import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import api from "../../api";
import StoresList, { getCoordinates, getDistance } from './StoresList'
import StoresItem from "../../components/StoresItem";
import Button from "../../components/Button/Button";

jest.mock('../../api');

describe('Stores List Route', () => {
  // const apiMock = api.apiList.mockResolvedValue([
  //   {
  //     "name": "NFS Alexania",
  //     "number": 6322,
  //     "latitude": "-16.121590171053200",
  //     "longitude": "-48.39803935435456",
  //     "adress": "BR 060- km22 – Zona Rural"
  //   },
  //   {
  //     "name": "NCS Araguaia",
  //     "number": 6326,
  //     "latitude": "-16.65827033456880",
  //     "longitude": "-49.25948895007950",
  //     "adress": "Rua 44, 399 Setor Central"
  //   },
  //   {
  //     "name": "NFS Catarina",
  //     "number": 6335,
  //     "latitude": "-23.420399642511900",
  //     "longitude": "-47.16403706665317",
  //     "adress": "Rodovia Castelo Branco - KM 60 - Loja 45/46 - Bairro: Dona Catarina"
  //   }
  // ])

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
  // it('making distance calc', () => {
  //   const coordinates = '-23.605033, -46.576552';
  //   const distance = getDistance(coordinates, apiMock);

  //   expect(distance[0]).toBe(7.701930456462772)
  // })
  // it('calling search function', () => {
  //   const callFunction = jest.fn();

  //   render(<StoresList><Button onClick={callFunction} /></StoresList>)
  //   // const input = screen.getByTestId('input-value');
  //     const button = screen.getByTestId('search-button');
      
  //     // fireEvent.change(input, {target: {value: '-23.605033, -46.576552'}})
  //     fireEvent.click(button)


  //   expect(callFunction).toHaveBeenCalled();
  // })

  // describe('API requisition', () => {
  //   it('show API list', async() => {
  //     api.apiList.mockResolvedValue([
  //       {
  //           "name": "NFS São Bernardo",
  //           "number": 6305,
  //           "latitude": "-23.66890903708250",
  //           "longitude": "-46.57509724627120",
  //           "adress": "Rua Garcia Lorca, 301, Lj 40 - Paulicéia",
  //           "distance": 0.06389260068095928
  //       },
  //       {
  //           "name": "NFS Santo André",
  //           "number": 6321,
  //           "latitude": "-23.65626393006040",
  //           "longitude": "-46.52618895976590",
  //           "adress": "Pça do Carmo, 13 – Quadra 2 – Centro",
  //           "distance": 0.07184040657231144
  //       },
  //       {
  //           "name": "NCS Light",
  //           "number": 6314,
  //           "latitude": "-23.54635675193150",
  //           "longitude": "-46.63906668860330",
  //           "adress": "Rua Coronel Xavier de Toledo, 23, Ljs 23 a 27 e 42, Centro",
  //           "distance": 0.08573790514447807
  //       }
  //     ])

  //       render(<StoresList />);

  //     const input = screen.getByTestId('input-value');
  //     const button = screen.getByTestId('search-button');
      
  //     fireEvent.change(input, {target: {value: '-23.605033, -46.576552'}})
  //     fireEvent.click(button)
      
  //     // expect(await screen.findByText('NFS Santo André')).toBeInTheDocument();
  //     expect(screen.getByTestId('list').children.length).toBe(3);
  //   })
  // })
}) 