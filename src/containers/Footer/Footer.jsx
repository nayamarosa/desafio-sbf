import React from 'react';

import Icon from '../../components/Icon';
import Newsletter from '../../components/Newsletter';


const Footer = () => {
  return (
    <>
      <Newsletter />

      <footer className="footer footer--container">
        <nav className="container footer__nav">

          <ul className="footer__infos">
            <li className="footer__infos-item">
              <a href="/"><p>encontre uma loja nike</p></a>
            </li>
            <li className="footer__infos-item">
              <a href="/"><p>cadastre-se para receber novidades</p></a>
            </li>
            <li className="footer__infos-item">
              <a href="/"><p>mapa do site</p></a>
            </li>
          </ul>

          <div className="footer__help">
            <p>ajuda</p>
            <ul className="footer__help-list">
              <li className="footer__help-list-item">
                <a href="/">dúvidas gerais</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">encontre o seu tamanho</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">entregas</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">pedidos</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">trocas e devoluções</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">pagamentos</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">produtos</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">corporativo</a>
              </li>
              <li className="footer__help-list-item">
                <a href="/">fale conosco</a>
              </li>
            </ul>
          </div>

          <div className="footer__about">
            <p>sobre a nike</p>
            <ul className="footer__about-list">
              <li className="footer__about-list-item">
                <a href="/">dúvidas gerais</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">encontre o seu tamanho</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">entregas</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">pedidos</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">trocas e devoluções</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">pagamentos</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">produtos</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">corporativo</a>
              </li>
              <li className="footer__about-list-item">
                <a href="/">fale conosco</a>
              </li>
            </ul>
          </div>
          
          <section className="footer__sac">
            <div className="footer__social">
              <p>redes sociais</p>
              <ul className="footer__social-list">
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

            <div className="footer__payments">
              <p>formas de pagamentos</p>
              <ul className="footer__payments-list">
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
          </section>
        </nav>

        <section className="footer__final container">
          <div className="footer__final-others">
            <ul className="footer__final-others-list">
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

          <p className="footer__final-others footer__final-others--rights">
          © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das Artes/SP.
          </p>
        </section>
      </footer>
    </>
  )
}

export default Footer;
