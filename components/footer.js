const Footer = () => (
  <>
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <p>
            L'AJIF est une association loi de 1901.
            <br />
            Tous droits réservés.
          </p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #222;
        color: #eee;
        height: auto;
        min-height: 5em;
      }

      .container {
        width: 100%;
      }

      p {
        margin: 0;
      }
    `}</style>
  </>
);

export default Footer;
