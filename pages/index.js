import Head from 'next/head';
import { NextSeo } from 'next-seo';
import LoremIpsum from 'react-lorem-ipsum';

import Block from '../components/block';
import Contact from '../components/contact';
import Events from '../components/events';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Social from '../components/social';

const pageURL = 'https://ajif.eu/';
const OGImage = `${pageURL}og.jpg`;
const pageTitle = 'AJIF - Association des Jeunes Iraniens de France';
const pageDescription =
  "L'AJIF est l'association des Jeunes Iraniens de France. Découvez, partagez, échangez !";

const Index = () => (
  <>
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: pageTitle,
          description: pageDescription,
          images: [
            {
              url: OGImage,
              alt: pageTitle,
            },
          ],
          site_name: pageTitle,
        }}
      />

      <Hero />
      <Block title="Nos Valeurs" bg="#222" fg="#eee" id="valeurs">
        <LoremIpsum p={2} avgSentencesPerParagraph={5} />
        <p>
          <a href="#">Cliquez ici pour en savoir plus...</a>
        </p>
      </Block>

      <Block title="Événements" id="evenements">
        <Events />
      </Block>

      <Block title="Nous Rejoindre" bg="#222" fg="#eee" id="rejoindre">
        <LoremIpsum p={1} avgSentencesPerParagraph={6} />
        <Social />
      </Block>

      <Block title="Contact" id="contact">
        <Contact />
      </Block>
    </Layout>
  </>
);

export default Index;
