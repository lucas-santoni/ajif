const PP = ({ url }) => (
  <>
    <div className="pp" />

    <style jsx>{`
      .pp {
        height: 170px;
        width: 170px;
        background-image: url(${url});
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 50px;
      }
    `}</style>
  </>
);

export default PP;
