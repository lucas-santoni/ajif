import Head from 'next/head';
import LoremIpsum from 'react-lorem-ipsum';
import { SocialIcon } from 'react-social-icons';

import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Block from '../components/block';
import Contact from '../components/contact';

const Index = () => (
  <>
    <Head>
      <title>AJIF - Association des Jeunes Iraniens de France</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <Navbar />

    <main>
      <Hero />
      <Block title="Nos Valeurs" bg="#222" fg="#eee" id="valeurs">
        <LoremIpsum p={2} avgSentencesPerParagraph={5} />
        <p>
          <a href="#">Cliquez ici pour en savoir plus...</a>
        </p>
      </Block>

      <Block title="Événements" id="evenements">
        <LoremIpsum p={1} avgSentencesPerParagraph={5} />
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
          pour nos événements.&nbsp;<a href="#">Cliquez ici</a>&nbsp;pour
          rejoindre notre groupe !
        </p>
      </Block>

      <Block title="Nous Rejoindre" bg="#222" fg="#eee" id="rejoindre">
        <LoremIpsum p={2} avgSentencesPerParagraph={5} />
        <SocialIcon url="https://twitter.com/jaketrent" />
      </Block>

      <Block title="Contact" id="contact">
        <p>
          Une question ? Un message à faire passer ? Une idée ? N'hésitez pas à
          nous contacter ! S'il vous plait, assurez-vous que l'adresse mail que
          vous nous communiquez est correcte. Autrement, nous serons dans
          l'impossibilité de vous répondre.
        </p>
        <br />
        <Contact />
      </Block>
    </main>

    <footer>
      <Footer />
    </footer>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Open Sans, Arial;
        font-size: 1.07em;
        scroll-behavior: smooth;
      }

      * {
        box-sizing: border-box;
      }

      .container {
        max-width: 50em;
        padding: 0 1em;
        margin: 0 auto;
      }

      .large {
        max-width: 60em;
        padding: 0 1em;
        margin: 0 auto;
      }

      a {
        transition: color 0.3s;
        text-decoration: none;
        color: #3267c2;
      }

      a:hover {
        color: #7198da;
      }
    `}</style>
  </>
);

export default Index;
