import React from 'react';

import Icon from '../Icon';
import Button from '../Button';

const Newsletter = () => {
  return (
    <section>
      <Icon icon="./images/logo_nike.svg" alt="Logo Nike" />
      <p>receba as novidades da nike</p>
      <p>Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</p>
      <Button text="Cadastre-se"/>
    </section>
  )
}

export default Newsletter;
