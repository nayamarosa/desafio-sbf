import React from 'react';

import Icon from '../Icon';

const PitchBar = () => {
  return (
    <section className="container pitchbar">
      <a href="/" >
        <Icon icon="./images/icon_seta_esquerda.svg" alt="Anterior" />
      </a>
      <div className="pitchbar__group">
        <Icon icon="./images/logo_nike_snkrs.svg" alt="Logo Nike Sneakers" />
        <p>Fique por dentro dos lançamentos <span>SNKRS</span></p>
      </div>
      <a href="/" >
        <Icon icon="./images/icon_seta_direita.svg" alt="Próximo" />
      </a>
    </section>
  )
}

export default PitchBar;
