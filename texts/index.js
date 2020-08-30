import { facebook, forum as forumLink } from './links';

export const intro = (
  <p>
    L’Association des Jeunes Iraniens de France vise à rapprocher les
    Franco-Iraniens, Français d’origine iranienne, Iraniens de France et
    iranophiles. Elle concerne notamment les étudiants et jeunes professionnels,
    en facilitant les rencontres et connexions avec des acteurs du monde
    professionnel.
  </p>
);

export const values = (
  <>
    <p>
      Fondée en 2020 par un groupe d’étudiants Franco-Iraniens, l’AJIF a pour
      vocation d’accompagner les étudiants durant leurs études supérieures et
      leurs débuts dans le monde professionnel. Ainsi, à travers ses actions,
      l’AJIF souhaite instituer une véritable communauté étudiante et
      professionnelle à l’échelle nationale.
    </p>

    <p>
      L’AJIF est une association apolitique, non-religieuse et
      non-communautariste.
    </p>
  </>
);

export const meetups = (
  <p>
    Des rencontres sont organisées avec des professionnels qui partagent leurs
    expériences, idées et répondent à vos questions. Au programme&nbsp;: salon
    professionnel, café-débat, séminaire.
  </p>
);

export const afterworks = (
  <p>
    Chaque mois, venez rencontrer les autres adhérents de l’AJIF. Vous pourrez
    discuter, étendre votre réseau de connaissances, et surtout échanger.
  </p>
);

export const forum = (
  <p>
    <a href={forumLink}>Ce forum</a> est l’espace d’échange propre à l’AJIF.
    Vous pourrez poser vos questions, partager vos expériences personnelles et
    professionnelles.
  </p>
);

export const join = (
  <>
    <p>
      Vous souhaitez nous rejoindre, proposer vos idées, nous poser vos
      questions ou tout simplement échanger avec nous ?
    </p>

    <p>
      Ecrivez-nous sur <a href={facebook}>notre page Facebook</a>, ou venez
      directement à un de nos événements ! Nous vous répondrons au plus vite et
      avec plaisir.
    </p>
  </>
);
