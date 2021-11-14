import React from 'react';

import Logo from '../Logo';
import Icon from '../Icon';
import PitchBar from '../PitchBar';

const Header = () => {
  return (
    <header>
      <nav class="container">
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
      <PitchBar />
    </header>
  )
}

export default Header;
