import Head from 'next/head';
import { Row, Col } from 'react-grid-system';

import Layout from '../components/layout';
import Staff from '../components/staff';
import Block from '../components/block';

const Nous = () => (
  <>
    <Layout>
      <Head>
        <title>AJIF - Qui sommes nous ?</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <Block min="10em">
          <h1>Qui sommes-nous ?</h1>
        </Block>

        <Block bg="#222" min="1px">
          <Row>
            <Col md={12}>
              <Staff
                name="Kevan Gafaïti"
                position="Président-Fondateur"
                img="kevan.png"
                linkedin="https://www.linkedin.com/in/kevan-gafaiti-3137927b/"
              />
            </Col>
          </Row>
        </Block>

        <Block min="1px">
          <Row>
            <Col md={6}>
              <Staff
                name="Sara Gafaïti"
                position="Trésorière"
                img="sara.png"
                linkedin="https://www.linkedin.com/in/sara-gafaïti-4761591b4/"
              />
            </Col>

            <Col md={6}>
              <Staff
                name="Amitis Sadeghian"
                position="Secrétaire Générale"
                img="amitis.png"
                linkedin="https://www.linkedin.com/in/amitis-sadeghian-808b86194/"
              />
            </Col>
          </Row>
        </Block>

        <Block bg="#222" min="1px">
          <Row>
            <Col md={6}>
              <Staff
                name="Emmanuelle Cousin"
                position="Responsable Événementiel"
                img="emmanuelle.png"
                linkedin="https://www.linkedin.com/in/emmanuelle-cousin-35bb3412b/"
              />
            </Col>

            <Col md={6}>
              <Staff
                name="Anna Lenoir"
                position="Responsable Partenariats"
                img="anna.png"
                linkedin="https://www.linkedin.com/in/anna-lenoir-03bb7917b/"
              />
            </Col>
          </Row>
        </Block>

        <Block min="1px">
          <Row>
            <Col md={12}>
              <Staff
                name="Yosr S."
                position="Responsable Communication"
                img="yosr.png"
                linkedin="https://www.linkedin.com/in/yosr-s-8014791a6/"
              />
            </Col>
          </Row>
        </Block>
      </div>
    </Layout>

    <style jsx>{`
      h1 {
        text-align: center;
      }
    `}</style>
  </>
);

export default Nous;
