import React from 'react';

import Icon from '../Icon';

const Footer = () => {
  return (
    <footer>
      <nav>

        <ul>
          <li>
            <a href="/">encontre uma loja nike</a>
          </li>
          <li>
            <a href="/">cadastre-se para receber novidades</a>
          </li>
          <li>
            <a href="/">mapa do site</a>
          </li>
        </ul>

        <div>
          <p>ajuda</p>
        </div>

        <div>
          <p>sobre a nike</p>
          <ul>
            <li>
              <a href="/">dúvidas gerais</a>
            </li>
            <li>
              <a href="/">encontre o seu tamanho</a>
            </li>
            <li>
              <a href="/">entregas</a>
            </li>
            <li>
              <a href="/">pedidos</a>
            </li>
            <li>
              <a href="/">trocas e devoluções</a>
            </li>
            <li>
              <a href="/">pagamentos</a>
            </li>
            <li>
              <a href="/">produtos</a>
            </li>
            <li>
              <a href="/">corporativo</a>
            </li>
            <li>
              <a href="/">fale conosco</a>
            </li>
          </ul>
        </div>
        
        <div>
          <p>redes sociais</p>
          <ul>
            <li>
              <a href="/">
                <Icon icon="./images/logo_redes_sociais_facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <Icon icon="./images/logo_redes_sociais_instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <Icon icon="./images/logo_redes_sociais_youtube.svg" alt="Youtube" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p>pagamentos</p>
          <ul>
            <li>
              <Icon icon="./images/pgto_Mastercard.svg" alt="Mastecard" />
            </li>
            <li>
              <Icon icon="./images/pgto_Visa.svg" alt="Visa" />
            </li>
            <li>
              <Icon icon="./images/pgto_Amex.svg" alt="Amex" />
            </li>
            <li>
              <Icon icon="./images/pgto_Elo.svg" alt="Elo" />
            </li>
            <li>
              <Icon icon="./images/pgto_Hipercard.svg" alt="Hipercard" />
            </li>
            <li>
              <Icon icon="./images/pgto_Discover.svg" alt="Discover" />
            </li>
            <li>
              <Icon icon="./images/pgto_Boleto.svg" alt="Boleto" />
            </li>
          </ul>
        </div>

        <div>
          <ul>
          <li>
              <a href="/">brasil</a>
            </li>
            <li>
              <a href="/">politica de privacidade</a>
            </li>
            <li>
              <a href="/">termos de uso</a>
            </li>
          </ul>
        </div>

        <p>
        © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das Artes/SP.
        </p>
      </nav>
    </footer>
  )
}

export default Footer;
