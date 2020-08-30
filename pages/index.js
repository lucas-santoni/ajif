import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Block from '../components/block';
import Contact from '../components/contact';
import Events from '../components/events';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Social from '../components/social';

import {
  intro,
  values,
  meetups,
  afterworks,
  forum,
  join,
} from '../texts/index';

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

      <Hero txt={intro} />
      <Block title="Nos Valeurs" bg="#222" fg="#eee" id="valeurs">
        {values}
        <p>
          <a href="/qui-sommes-nous">Cliquez ici pour en savoir plus...</a>
        </p>
      </Block>

      <Block title="Événements" id="evenements">
        <Events meetups={meetups} afterworks={afterworks} forum={forum} />
      </Block>

      <Block title="Nous Rejoindre" bg="#222" fg="#eee" id="rejoindre">
        {join}
        <Social />
      </Block>

      <Block title="Contact" id="contact">
        <Contact />
      </Block>
    </Layout>
  </>
);

export default Index;
