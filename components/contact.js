const Contact = () => (
  <>
    <p>
      Une question ? Un message à faire passer ? Une idée ? N'hésitez pas à nous
      contacter ! S'il vous plait, assurez-vous que l'adresse mail que vous nous
      communiquez est correcte. Autrement, nous serons dans l'impossibilité de
      vous répondre.
    </p>

    <br />
    <div className="ctn">
      <form action="#">
        <label htmlFor="fname">Nom</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Votre nom..."
        />

        <label htmlFor="lname">Prénom</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Votre prénom..."
        />

        <label htmlFor="lname">Adresse Mail</label>
        <input
          type="text"
          id="mail"
          name="mail"
          placeholder="Votre adresse mail..."
        />

        <label htmlFor="subject">Message</label>
        <textarea
          type="text"
          id="txt"
          name="txt"
          placeholder="Nous vous répondrons dans les plus brefs delais..."
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>

    <style jsx>{`
      input[type='text'],
      select,
      textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-top: 12px;
        margin-bottom: 20px;
        resize: vertical;
        display: block;
        font-family: inherit;
      }

      label {
        font-weight: bold;
      }

      input[type='submit'] {
        background-color: black;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default Contact;
