import React from 'react';

import Logo from '../Logo';
import Icon from '../Icon';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <Logo />
        </h1>
        <ul>
          <li>
            <Icon icon="./images/icon_sacola.svg" alt="Sacola" />
            </li>
          <li>
            <Icon icon="./images/icon_sacola.svg" alt="Menu" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
