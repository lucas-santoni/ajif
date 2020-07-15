const Block = props => (
  <>
    <div className="wrapper bg-img" id={props.id || ''}>
      <div className={props.img && 'darken'}>
        <div className="container">
          <h1>{props.title}</h1>
          {props.children}
        </div>
      </div>
    </div>

    <style jsx>{`
      h1 {
        font-size: 2.5em;
        font-weight: bolder;
        margin: 0;
        padding: 0 0 0.5em 0;
        text-align: ${props.right ? 'right' : 'left'};
        text-align: ${props.center && 'center'};
      }

      @media screen and (max-width: 640px) {
        h1 {
          font-size: 1.5em;
        }
      }

      .wrapper {
        background: ${props.bg || '#efefef'};
        color: ${props.fg || 'inherit'};
        padding: 3em 0;
      }

      .bg-img {
        background-image: url(${props.img});
        background-position: bottom 30% left 0;
        background-size: cover;
      }

      .darken {
        background: rgba(0, 0, 0, 0.73);
        color: #eee;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: ${props.min || '30em'};
        height: auto;
        text-align: ${props.center && 'center'};
      }
    `}</style>
  </>
);

export default Block;
