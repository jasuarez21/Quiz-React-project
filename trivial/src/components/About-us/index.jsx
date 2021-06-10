import React from 'react';
import './aboutUs.css';

function AboutUs() {
  return (
    <main className="about-us">
      <div className="about-us__body">
        <h3>CHEJUJA TEAM</h3>
        <p>El equipo CHEJUJA está compuesto por tres elementos:</p>
      </div>
      <section className="about-us__info">
        <div className="about-us__info--chema">
          <img src="https://img.icons8.com/color/96/000000/superman-dc.png" alt="chemaHero" />
          <p className="chema">Chema</p>
          <a href="https://github.com/CheCabeza" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" className="about-us__info--socialmedia" /></a>
          <a href="https://www.instagram.com/chemartinc/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" className="about-us__info--socialmedia" /></a>
        </div>
        <div className="about-us__info--juanda">
          <img src="https://img.icons8.com/color/96/000000/deadpool.png" alt="juandaHero" />
          <p>Juanda</p>
          <a href="https://github.com/JDSanchon" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" className="about-us__info--socialmedia" /></a>
          <a href="https://www.instagram.com/juandadesafio/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" className="about-us__info--socialmedia" /></a>
        </div>
        <div className="about-us__info--chema">
          <img src="https://img.icons8.com/color/96/000000/hawkeye.png" alt="josepHero" />
          <p className="josep">Josep</p>
          <a href="https://github.com/jasuarez21" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" className="about-us__info--socialmedia" /></a>
          <a href="https://www.instagram.com/jasuarez21/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" className="about-us__info--socialmedia" /></a>
        </div>
      </section>
      <div className="about-us__footer">
        <img src="https://img.icons8.com/cotton/64/000000/witch.png" alt="hat-witch" />
        <p className="about-us__lema">
          Chejuja mejor que el tren de la bruja!
          {' '}
          <img src="https://img.icons8.com/doodle/48/000000/witch-broom.png" alt="witch" className="about-us__lema--barrier" />
        </p>
      </div>
    </main>
  );
}

export default AboutUs;
