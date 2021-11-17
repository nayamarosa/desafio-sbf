import React from 'react';

import Icon from '../Icon';

const SubHeader = () => {
  return (
    <section className="container subheader">
      <div className="subheader__logo">
        <Icon icon="./images/logo_Jordan.svg" alt="Logo Jordan" />
        <Icon icon="./images/logo_snkrs.svg" alt="Logo Sneakers" />
      </div>
      <ul className="subheader__list">
        <li className="subheader__list-item">
          <a href="/">
            <p>Ajuda</p>
          </a>
        </li>
        <li className="subheader__list-item">
          <a href="/">
            <p>Acompanhe seu pedido</p>
          </a>
        </li>
        <li className="subheader__list-item">
          <a href="/">
            <p>Junte-se a nós</p>
          </a>
        </li>
        <li className="subheader__list-item">
          <a href="/">
            <p>Entrar</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default SubHeader;
