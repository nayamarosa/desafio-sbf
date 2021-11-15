import React from 'react';

import Logo from '../Logo';
import Icon from '../Icon';
import Input from '../Input';
import PitchBar from '../PitchBar';
import SubHeader from '../SubHeader/SubHeader';

const Header = () => {
  return (
    <header class="header">
      <SubHeader />

      <nav class="container header__nav">
        <h1 class="header__logo">
          <Logo />
        </h1>
        <ul class="header__nav-list">
          <li class="header__nav-list-item">
            <a href="/">
              <p>Lançamento</p>
            </a>
          </li>
          <li class="header__nav-list-item">
            <a href="/">
              <p>Masculino</p>
            </a>
          </li>
          <li class="header__nav-list-item">
            <a href="/">
              <p>Feminino</p>
            </a>
          </li>
          <li class="header__nav-list-item">
            <a href="/">
              <p>Infantil</p>
            </a>
          </li>
          <li class="header__nav-list-item">
            <a href="/">
              <p>Ofertas</p>
            </a>
          </li>
          <li class="header__nav-list-item">
            <a href="/">
              <p>SNKRS</p>
            </a>
          </li>
        </ul>
        <div class="header__nav-group">
          <Input placeholder="Buscar"/>
          <Icon icon="./images/icon_sacola.svg" alt="Menu" />
        </div>
      </nav>

      <nav class="container header__mobile">
        <h1 class="header__logo">
          <Logo />
        </h1>
        <ul class="header__mobile-list">
          <li class="header__mobile-list-item">
            <Icon icon="./images/icon_sacola.svg" alt="Sacola" />
            </li>
          <li class="header__mobile-list-item">
            <Icon icon="./images/icon_sacola.svg" alt="Menu" />
          </li>
        </ul>
      </nav>

      <PitchBar />
    </header>
  )
}

export default Header;
