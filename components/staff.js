import PP from './pp';

const Staff = ({ name, position, img, linkedin }) => (
  <>
    <div className="wrap">
      <div className="card" onClick={() => window.open(linkedin, '_blank')}>
        <PP url={img} />
        <span style={{ fontWeight: 'bold' }}>{name}</span>
        <br />
        <span style={{ fontStyle: 'italic' }}>{position}</span>
      </div>
    </div>

    <style jsx>{`
      .wrap {
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .card {
        text-align: center;
        width: 280px;
        margin: 0 auto;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default Staff;
