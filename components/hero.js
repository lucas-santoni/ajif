import { LoremIpsum } from 'react-lorem-ipsum';
import Social from './social';

const Hero = () => (
  <>
    <div className="wrapper">
      <div className="darken">
        <div className="container">
          <h1>Association des Jeunes Iraniens de France</h1>
          <div className="text">
            <LoremIpsum p={1} avgSentencesPerParagraph={5} />
            <br />
            <Social />
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      h1 {
        font-size: 3.3em;
        font-weight: bolder;
      }

      .text {
        font-size: 1.3em;
      }

      @media screen and (max-width: 699px) {
        .wrapper {
          background-image: url('/hero-background-mobile.jpg');
          background-position: bottom 30% left 0;
          background-size: cover;
        }
      }

      @media screen and (min-width: 700px) {
        .wrapper {
          background-image: url('/hero-background.jpeg');
          background-position: bottom 30% left 0;
          background-size: cover;
        }
      }

      @media screen and (max-width: 640px) {
        h1 {
          font-size: 2em;
        }

        .text {
          font-size: 1.1em;
        }
      }

      * {
        text-align: center;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: calc(100vh - 4.5em);
        height: auto;
      }

      .darken {
        background: rgba(0, 0, 0, 0.6);
        color: #eee;
      }
    `}</style>
  </>
);

export default Hero;
