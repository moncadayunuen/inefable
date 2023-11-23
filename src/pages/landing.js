import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import logo from '../assets/logo-veriscopio.png';
import book from '../assets/book.png';
import bio from '../assets/ravelo.png';
import bookSmall from '../assets/book-small.png';
import bg from '../assets/lines.png';
import footer from '../assets/footer-icon.png';
import inefable from '../assets/inefable-logo.png';

const Landing = () => {

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollTop(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const getWidthDimensions = () => {
        const { innerWidth: width } = window;
        return width;
    }


    const [windowDimensions,setWindowDimensions] = useState(window.innerWidth);
    const [isMobile,setIsMobile] = useState(false);

    useEffect(() => {
        const handleOverlay = (width) => {
            if(width <= 992) setIsMobile(true)
            if(width >= 992) {
                setIsMobile(false);
            }
        };
        const handleResize = () => setWindowDimensions(getWidthDimensions());
        handleOverlay(getWidthDimensions());
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

    return (
    <main>
      <header>
          <div className={'container'} id='header'>
              <nav className={`nav ${scrollTop > 80 ? 'scrolling' : ''}`}>
                 <div className={'nav-container'}>
                     <div className={'nav-social-media'}>
                         <ul>
                             <li><NavLink to={'https://www.instagram.com/editorial_inefable/'} target="_blank" rel="noopener noreferrer"  ><FaInstagram /></NavLink></li>
                             <li><NavLink to={'https://www.facebook.com/editorialinefable'} target="_blank" rel="noopener noreferrer" ><FaFacebook /></NavLink></li>
                             <li><NavLink to={'https://twitter.com/InefableLibros'} target="_blank" rel="noopener noreferrer" ><FaXTwitter /></NavLink></li>
                             <li><NavLink to={'http://www.tiktok.com/@inefablelibros'} target="_blank" rel="noopener noreferrer" ><FaTiktok /></NavLink></li>
                         </ul>
                     </div>
                     <div className={'nav-logo'}><a href='#header'><img alt={''} src={logo} /></a></div>
                     <div className={'nav-contact'}><a href="#contacto">Contacto</a></div>
                 </div>
              </nav>
          </div>
          <div className={'container'}>
              <section className={'section-header'}>
                  <article className={'section-header-book'}><img alt={''} src={book} /></article>
                  <article className={'section-header-info'}>
                      <h1>“Las figuras institucionales, llamadas gobiernos de los estados, se han convertido en empresas criminales.”</h1>
                      <p>RICARDO RAVELO</p>
                  </article>
              </section>
          </div>
      </header>
        <section className={'bio'}>
            <div className={'container'}>
                <div className={'bio-container'}>
                    <div className={'bio-info'}>
                        <h2>Ricardo Ravelo Galo</h2>
                        <p>Es un periodista mexicano que inició su carrera como reportero en 1987, trabajando en los periódicos  <span>El Dictamen</span>, <span>La Nación</span>, <span>El Diario Sur</span>, <span>Diario del Istmo</span> y las revistas <span>Llave</span> y <span>Notiver</span>.
                            <br />En 1991 empezó a trabajar en la revista <i>Proceso</i> donde se le asignó la fuente policiaca. Actualmente se dedica a la investigación de temas relacionados con el narcotráfico, la justicia y la seguridad. <br/>El 9 de abril de 2011, recibió un homenaje en la
                            ciudad de Cosamaloapan donde, en sesión solemne
                            de cabildo, las autoridades lo declararon «Hijo Predilecto».
                            <br/><br/>
                            En 2013 fue galardonado con el premio Rodolfo Walsh, que se concede a obras de no ficción del género negro, por su obra <span>Narcomex: historia e historias de una guerra</span>, en Gijón, España.</p>
                    </div>
                    <div className={'bio-img'}><img alt={''} src={bio} /></div>
                </div>
            </div>
        </section>
        <section className={'book'} style={{background: `url(${bg})`}}>
            <div className={'container'}>
                <div className={'book-container'}>
                    <div className={'book-info'}>
                        <h2>El amo <br />de Jalisco</h2>
                        <h3>UN GOBIERNO CON <br/>ESTRUCTURA CRIMINAL</h3>
                        <div className={'book-info-img'}><img alt={''} src={bookSmall} /></div>
                    </div>
                    <div className={'book-text'}>
                        <p>
                            México podría ser calificado de un país muy exitoso en lo que se denomina “gatopardismo”: cuando todo cambia, pero sigue igual o peor. Es así cuando hablamos del poder que ejerce el crimen organizado en vastas zonas del país, con el amparo o complicidad del poder político en todos los niveles. El viejo régimen parece agonizar en numerosos estados del país, pero el poder del crimen sigue fortaleciéndose.
                            <br /><br />
                            En esta obra de Ricardo Ravelo, uno de los periodistas más reconocidos y valientes de México, se documenta cómo conviven la delincuencia organizada y el poder político en el estado de Jalisco. Gobernado por el ingeniero Enrique Alfaro, el estado se ha convertido en una de las entidades más violentas de la nación, cuyas mafias y cárteles controlan hasta el 80% de su territorio y se han expandido por vastas zonas del país, desapareciendo personas, sembrando muerte y corrupción. De persistir esta tendencia, el país puede convertirse en un Estado fallido, ante la nulidad de las autoridades locales y federales.
                            <br /><br />
                            Intolerante a la crítica periodística, el gobernador Enrique Alfaro se ha confrontado con diversos periodistas que han cuestionado su desgobierno. Mediante amenazas directas, o bien advirtiendo con interponer denuncias penales, el mandatario se ha mostrado violento, insultante y bravucón ante la prensa crítica estatal y nacional. No soporta que le cuestionen sobre sus negocios. Mucho menos que le señalen sus errores y desatinos en materia de seguridad. <br/><br/> <span>El amo de Jalisco</span> es una clara y dolorosa muestra del México de nuestro tiempo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <footer id="contacto">
            {
                (windowDimensions > 992) ?
                    <div className={'container'}>
                        <div className={'footer'}>
                            <div className={'left'}>
                                <img alt={''} src={footer} />
                                <div className={'left-bottom'}>
                                    <a href='https://maps.app.goo.gl/GeVQMuJdzjP2TpSu8' target="_blank" rel="noreferrer">Mitikah, Av. Río Churubusco 601, Xoco,</a>
                                    <a href='https://maps.app.goo.gl/GeVQMuJdzjP2TpSu8' target="_blank" rel="noreferrer">Coyoacán, 03330, Ciudad de México, CDMX</a>
                                </div>
                            </div>
                            <div className={'center'}><img alt={''} src={inefable} /></div>
                            <div className={'right'}>
                                <div>
                                    <a href='mailto:contacto@inefable.mx' target="_blank" rel="noopener noreferrer">contacto@editorialinefable.com</a>
                                    <a href="tel:5547707728">55 4770 7728</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={'container'}>
                        <div className={'footer'}>
                            <div className={'logo'}><img alt={''} src={inefable} /></div>
                            <div className={'contact'}>
                                <div>
                                    <a href='mailto:contacto@inefable.mx' target="_blank" rel="noopener noreferrer">contacto@editorialinefable.com</a>
                                    <a href="tel:5547707728">55 4770 7728</a>
                                </div>
                            </div>
                            <div className={'extra'}>
                                <img alt={''} src={footer} />
                                <div className={'left-bottom'}>
                                    <a href='https://maps.app.goo.gl/GeVQMuJdzjP2TpSu8' target="_blank" rel="noreferrer">Mitikah, Av. Río Churubusco 601, Xoco,</a>
                                    <a href='https://maps.app.goo.gl/GeVQMuJdzjP2TpSu8' target="_blank" rel="noreferrer">Coyoacán, 03330, Ciudad de México, CDMX</a>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </footer>
    </main>
  );
}

export default Landing;
