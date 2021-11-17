import React from "react";
import { render } from "@testing-library/react";

import StoresItem from "./StoresItem";

describe('Store Item Component', () => {
  it('same snapshot component', () => {
    const { container } = render(<StoresItem 
      name="loja"
      adress="Rua tal, número tal"
    />)
    
    expect(container.firstChild).toMatchSnapshot();
  })
})