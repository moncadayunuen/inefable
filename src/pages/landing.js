import React from'react';
import {NavLink} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import logo from '../assets/logo-veriscopio.png';
import book from '../assets/book.png';
import bio from '../assets/ravelo.png';

const Landing = () => {
  return (
    <main>
      <header>
          <div className={'container'}>
              <nav className={'nav'}>
                  <div className={'nav-social-media'}>
                      <ul>
                          <li><NavLink to={'/'}><FaInstagram /></NavLink></li>
                          <li><NavLink to={'/'}><FaFacebook /></NavLink></li>
                          <li><NavLink to={'/'}><FaXTwitter /></NavLink></li>
                          <li><NavLink to={'/'}><FaTiktok /></NavLink></li>
                      </ul>
                  </div>
                  <div className={'nav-logo'}><img alt={''} src={logo} /></div>
                  <div className={'nav-contact'}><NavLink to={'/contacto'}>Contacto</NavLink></div>
              </nav>
          </div>
          <div className={'container'}>
              <section className={'section-header'}>
                  <article className={'section-header-book'}><img alt={''} src={book} /></article>
                  <article className={'section-header-info'}>
                      <h1>“Las figuras institucionales, llamadas gobiernos de los estados, se han convertido en empresas criminales.”</h1>
                      <p>RICARDO RAVELO</p>
                  </article>
              </section>
          </div>
      </header>
        <section className={'bio'}>
            <div className={'bio-info'}>
                <h2>Ricardo Ravelo Galó</h2>
                <p>Es un periodista mexicano quien inicio su carrera como reportero en el año 1987, trabajando en los periódicos El Dictamen, La Nación, El Diario Sur, Diario del Istmo, revista Llave y Notiver. En 1991 empezó a trabajar en la revista Proceso donde se le asignó la fuente policiaca. Actualmente se dedica a la investigación de temas relacionados con el narcotráfico, la justicia y la seguridad. El 9 de abril de 2011, recibió un homenaje en la
                    ciudad de Cosamaloapan donde, en sesión solemne
                    de cabildo, las autoridades lo declararon «Hijo Predilecto».

                    En 2013 fue galardonado con el premio Rodolfo Walsh, que se concede a obras de no ficción del género negro, por su obra Narcomex: historia e historias de una guerra, en Gijón, España.</p>
            </div>
            <div className={'bio-img'}><img alt={''} src={bio} /></div>
        </section>
    </main>
  );
}

export default Landing;
