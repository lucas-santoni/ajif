import { Row, Col } from 'react-grid-system';

const Events = () => (
  <>
    <div className="events">
      <Row>
        <Col md={4}>
          <div className="card blue">
            <span style={{ fontWeight: 'bold' }}>Rencontres</span>
            <div className="content">
              <p>
                Généralement, on utilise un texte en faux latin (le texte ne
                veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui
                permet donc de faire office de texte d'attente.
              </p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="card green">
            <span style={{ fontWeight: 'bold' }}>Afterworks</span>
            <div className="content">
              <p>
                Ce texte a pour autre avantage d'utiliser des mots de longueur
                variable, essayant de simuler une occupation normale. La méthode
                simpliste consistant à copier-coller un court texte plusieurs.
              </p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="card red">
            <span style={{ fontWeight: 'bold' }}>Forum de l'Orientation</span>
            <div className="content">
              <p>
                Il circule des centaines de versions différentes du Lorem ipsum,
                mais ce texte aurait originellement été tiré de l'ouvrage de
                Cicéron, De Finibus Bonorum et Malorum (Liber Primus, 32).
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <p>
      Nous utilisons
      <img
        src="/facebook.png"
        alt="Facebook logo"
        height={30}
        style={{
          margin: '0 0.3em',
          marginBottom: '-7px',
          textAlign: 'middle',
        }}
      />
      pour nos événements.&nbsp;
      <span className="bold">
        <a href="#">Cliquez ici</a>&nbsp;pour rejoindre notre groupe !
      </span>
    </p>

    <style jsx>{`
      .events {
        margin-top: 1.5em;
        text-align: center;
      }

      .card {
        padding: 2.5em 1.1em;
        border-radius: 5px;
        background-color: #fafafa;
        transition: box-shadow 0.3s;
      }

      @media screen and (min-width: 770px) {
        .card {
          height: 100%;
          margin-bottom: 1.5em;
        }

        .events {
          margin-bottom: 1.5em;
        }
      }

      @media screen and (max-width: 769px) {
        .card {
          margin-bottom: 1.5em;
        }
      }

      .card.blue {
        border: 1px solid #90caf9;
      }

      .card.green {
        border: 1px solid #a5d6a7;
      }

      .card.red {
        border: 1px solid #f48fb1;
      }

      .card.blue:hover {
        box-shadow: 0 0 11px #90caf9;
      }

      .card.green:hover {
        box-shadow: 0 0 11px #a5d6a7;
      }

      .card.red:hover {
        box-shadow: 0 0 11px #f48fb1;
      }

      .bold {
        font-weight: bold;
      }

      .content {
        height: 100%;
        display: flex;
        align-items: center;
      }
    `}</style>
  </>
);

export default Events;
