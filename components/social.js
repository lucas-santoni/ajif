import { SocialIcon } from 'react-social-icons';

import { twitter, instagram, facebook, linkedin } from '../texts/links';

const Social = () => (
  <>
    <span className="social">
      <span className="social-wrapper">
        <SocialIcon url={twitter} />
      </span>
      <span className="social-wrapper">
        <SocialIcon url={instagram} />
      </span>
      <span className="social-wrapper">
        <SocialIcon url={facebook} />
      </span>
      <span className="social-wrapper">
        <SocialIcon url={linkedin} />
      </span>
    </span>
    <style jsx>{`
      .social-wrapper {
        padding: 0 0.5em< / a>;
      }

      .social {
        padding-top: 2em;
      }
    `}</style>
  </>
);

export default Social;
