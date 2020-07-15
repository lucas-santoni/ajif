import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => (
  <>
    <Navbar />

    <main>{children}</main>

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

export default Layout;
