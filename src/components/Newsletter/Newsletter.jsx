import React from 'react';

import Icon from '../Icon';
import Button from '../Button';

const Newsletter = () => {
  return (
    <section class="newsletter">
      <div class="container newsletter__group">
        <Icon icon="./images/logo_nike.svg" alt="Logo Nike" />
        <p class="newsletter__group-title">receba as novidades da nike</p>
        <p class="newsletter__group-text">Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</p>
        <Button text="Cadastre-se"/>
      </div>
    </section>
  )
}

export default Newsletter;
