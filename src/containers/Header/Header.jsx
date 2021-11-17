import React from 'react';

import Logo from '../../components/Logo';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import PitchBar from '../../components/PitchBar';
import SubHeader from '../../components/SubHeader/SubHeader';

const Header = () => {
  return (
    <header className="header">
      <SubHeader />

      <nav className="container header__nav">
        <h1 className="header__logo">
          <Logo />
        </h1>
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <a href="/">
              <p>Lançamento</p>
            </a>
          </li>
          <li className="header__nav-list-item">
            <a href="/">
              <p>Masculino</p>
            </a>
          </li>
          <li className="header__nav-list-item">
            <a href="/">
              <p>Feminino</p>
            </a>
          </li>
          <li className="header__nav-list-item">
            <a href="/">
              <p>Infantil</p>
            </a>
          </li>
          <li className="header__nav-list-item">
            <a href="/">
              <p>Ofertas</p>
            </a>
          </li>
          <li className="header__nav-list-item">
            <a href="/">
              <p>SNKRS</p>
            </a>
          </li>
        </ul>
        <div className="header__nav-group">
          <Input placeholder="Buscar"/>
          <Icon icon="./images/icon_sacola.svg" alt="Menu" />
        </div>
      </nav>

      <nav className="container header__mobile">
        <h1 className="header__logo">
          <Logo />
        </h1>
        <ul className="header__mobile-list">
          <li className="header__mobile-list-item">
            <Icon icon="./images/icon_sacola.svg" alt="Sacola" />
            </li>
          <li className="header__mobile-list-item">
            <Icon icon="./images/icon_menu.svg" alt="Menu" />
          </li>
        </ul>
      </nav>

      <PitchBar />
    </header>
  )
}

export default Header;
