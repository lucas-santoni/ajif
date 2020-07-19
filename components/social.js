import { SocialIcon } from 'react-social-icons';

const Social = () => (
  <>
    <span className="social">
      <span className="social-wrapper">
        <SocialIcon url="https://twitter.com/geographeur" />
      </span>
      <span className="social-wrapper">
        <SocialIcon url="https://instagram.com/santoni_lucas" />
      </span>
      <span className="social-wrapper">
        <SocialIcon url="https://facebook.com/lucas.santoni.1337/" />
      </span>
      <span className="social-wrapper">
        <SocialIcon url="https://www.linkedin.com/in/lucas1337/" />
      </span>
    </span>
    <style jsx>{`
      .social-wrapper {
        padding: 0 0.5em;
      }

      .social {
        padding-top: 2em;
      }
    `}</style>
  </>
);

export default Social;
