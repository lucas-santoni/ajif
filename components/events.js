import { Row, Col } from 'react-grid-system';

import { facebook } from '../texts/links';

const Events = ({ meetups, afterworks, forum }) => (
  <>
    <div className="events">
      <Row>
        <Col md={4}>
          <div className="card blue">
            <span style={{ fontWeight: 'bold' }}>Rencontres</span>
            <div className="content">{meetups}</div>
          </div>
        </Col>

        <Col md={4}>
          <div className="card green">
            <span style={{ fontWeight: 'bold' }}>Afterworks</span>
            <div className="content">{afterworks}</div>
          </div>
        </Col>

        <Col md={4}>
          <div className="card red">
            <span style={{ fontWeight: 'bold' }}>Forum AJIF</span>
            <div className="content">{forum}</div>
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
        <a href={facebook}>Cliquez ici</a>&nbsp;pour rejoindre notre groupe !
      </span>
    </p>

    <style jsx>{`
      .events {
        margin-top: 1.5em;
        text-align: center;
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
