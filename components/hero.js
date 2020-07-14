import { LoremIpsum } from 'react-lorem-ipsum';

const Hero = () => (
  <>
    <div className="wrapper">
      <div className="darken">
        <div className="container">
          <h1>
            Association des Jeunes
            <br />
            Iraniens de France
          </h1>
          <div className="text">
            <LoremIpsum p={1} avgSentencesPerParagraph={5} />
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

      .wrapper {
        background-image: url('/hero-background.jpeg');
        background-position: bottom 30% left 0;
        background-size: cover;
      }

      .darken {
        background: rgba(0, 0, 0, 0.6);
        color: #eee;
      }
    `}</style>
  </>
);

export default Hero;
