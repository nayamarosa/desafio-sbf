import React from 'react';

import Logo from '../Logo';
import Icon from '../Icon';
import PitchBar from '../PitchBar';

const Header = () => {
  return (
    <header class="header">
      <nav class="container header__nav">
        <h1 class="header__logo">
          <Logo />
        </h1>
        <ul class="header__nav-list">
          <li class="header__nav-list-item">
            <Icon icon="./images/icon_sacola.svg" alt="Sacola" />
            </li>
          <li class="header__nav-list-item">
            <Icon icon="./images/icon_sacola.svg" alt="Menu" />
          </li>
        </ul>
      </nav>
      <PitchBar />
    </header>
  )
}

export default Header;
