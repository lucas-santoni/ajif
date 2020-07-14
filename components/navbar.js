import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => (
  <>
    <nav className="nav" role="navigation">
      <div className="large">
        <a href="/">
          <img src="/banner.png" />
        </a>

        <ul className="menu">
          <li>
            <AnchorLink href="#valeurs">Valeurs</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#evenements">Événements</AnchorLink>
          </li>
          <li>
            <a href="#">Qui sommes-nous ?</a>
          </li>
          <li>
            <AnchorLink href="#rejoindre">Nous Rejoindre</AnchorLink>
          </li>
          <li className="last">
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
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

export default Navbar;
