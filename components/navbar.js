const { enableBodyScroll, disableBodyScroll } = require('body-scroll-lock');
import Link from 'next/link';
import { useState } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import { GrClose, GrMenu } from 'react-icons/gr';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const clickHandler = state => {
    const html = document.querySelector('html');
    document.getElementById('side').classList.toggle('active');

    setVisible(state);
    state ? disableBodyScroll(html) : enableBodyScroll(html);
  };

  return (
    <>
      <nav className="nav" role="navigation">
        <div className="large">
          <a href="/">
            <img src="/banner.png" />
          </a>

          <Hidden xs sm md>
            <ul className="menu">
              <li onClick={() => console.log('AAAA')}>
                <a href="/#valeurs">Valeurs</a>
              </li>
              <li>
                <a href="/#evenements">Événements</a>
              </li>
              <li>
                <Link href="/qui-sommes-nous">
                  <a>Qui sommes-nous ?</a>
                </Link>
              </li>
              <li>
                <a href="/#rejoindre">Nous Rejoindre</a>
              </li>
              <li className="last">
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </Hidden>
          <Visible xs sm md>
            <div id="side">
              <div className="close" onClick={() => clickHandler(false)}>
                <GrClose size={32} />
              </div>
              <ul className="side-menu">
                <li>
                  <a href="/#valeurs" onClick={() => clickHandler(false)}>
                    Valeurs
                  </a>
                </li>
                <li>
                  <a href="/#evenements" onClick={() => clickHandler(false)}>
                    Événements
                  </a>
                </li>
                <li>
                  <Link href="/qui-sommes-nous">
                    <a>Qui sommes-nous ?</a>
                  </Link>
                </li>
                <li>
                  <a href="/#rejoindre" onClick={() => clickHandler(false)}>
                    Nous Rejoindre
                  </a>
                </li>
                <li className="last" onClick={() => clickHandler(false)}>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div
              className="burger"
              style={{ display: !visible ? 'initial' : 'none' }}
              onClick={() => clickHandler(true)}
            >
              <GrMenu size={32} />
            </div>
          </Visible>
        </div>
      </nav>

      <style jsx global>
        {`
          .menu a {
            padding: 0 1em;
            text-decoration: none;
            color: black;
          }

          .menu .last a {
            padding-right: 0 !important;
          }

          .menu a:hover {
            color: #3267c2;
          }
        `}
      </style>

      <style jsx>{`
        #side {
          display: none;
          background: #fefefe;
          width: 300px;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          box-shadow: 3px 0px 10px #232931;
        }

        #side.active {
          display: block;
        }

        .close {
          height: 4.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-bottom: 1px solid #eee;
        }

        .burger {
          margin-right: 0.5em;
          cursor: pointer;
        }

        .side-menu {
          padding-top: 2em;
          text-align: center;
        }

        .side-menu li {
          margin: 1.5em 0;
        }

        .nav {
          box-shadow: rgba(0, 0, 0, 0.07) 0 1px 0;
        }

        .large {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4.5em;
        }

        ul {
          margin: 0px;
          padding: 0px;
          list-style: none;
        }

        .menu {
          display: flex;
          flex-direction: row;
        }

        img {
          height: 3.2em;
          display: block;
        }
      `}</style>
    </>
  );
};

export default Navbar;
