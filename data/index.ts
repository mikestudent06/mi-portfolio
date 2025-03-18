export const navItems = [
  { name: "À propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Contact", link: "#contact" }
];
export const gridItems = [
  { 
    id: 1,
    title: "Michel MOUHANI",
    description: "Je m'appelle",
    className: "h-[20rem] w-[200px] mx-auto lg:col-span-5 md:col-span-3 sm:col-span-6 sm:row-span-1",
    imgClassName: "w-full h-auto object-contain",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/me.jpeg"
  },
  {
    id: 2,
    title: "Je suis très flexible avec les communications dans différents fuseaux horaires",
    description: "",
    className: "lg:col-span-3 md:col-span-6 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: ""
  },
  {
    id: 3,
    title: "Mon stack technologique",
    description: "J'essaie constamment de m'améliorer",
    className: "lg:col-span-2 md:col-span-3 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 4,
    title: "Passionné de technologie avec une passion pour le développement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg"
  },
  {
    id: 5,
    title: "Actuellement en train de créer une bibliothèque d'authentification avec nodejs et express",
    description: "Les Dernières Nouvelles",
    className: "lg:col-span-3 md:col-span-6 sm:col-span-6 sm:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg"
  },
  {
    id: 6,
    title: "Vous voulez commencer un projet ensemble ?",
    description: "",
    className: "mx-auto lg:col-span-5 md:col-span-6 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: ""
  }
];

export const projects = [
  {
    id: 1,
    title: "Gymo - Site web pour s'exercer",
    des: "Gardez la forme grâce à notre site fait exclusivement pour les sportifs, hommes et femmes.",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://gymo.vercel.app/"
  },
  {
    id: 2,
    title: "Pitcheur - Application web pour les entrepreneurs qui souhaitent pitcher des projets et trouver des projets intéressants.",
    des: "Pitcheur est une application web conçue pour les entrepreneurs souhaitant présenter leurs idées innovantes et découvrir des projets prometteurs.",
    img: "/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://pitcheur.vercel.app/"
  },
  {
    id: 3,
    title: "MimoCam - Application de visioconférence",
    des: "Une application réelle Software-as-a-Service avec des fonctionnalités AI et un système de paiements et crédits utilisant le dernier stack technologique.",
    img: "/p3.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://mimocam.vercel.app/"
  },
  {
    id: 4,
    title: "Site de génération de prompts IA",
    des: "Créez et trouvez des prompts que les IA comme ChatGpt comprend facilement.",
    img: "/p4.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", ],
    link: "https://mimoprompty.vercel.app"
  }
];

export const testimonials = [
  {
    quote:
      "Travailler avec Michel MOUHANI a été une expérience exceptionnelle. Son expertise, sa réactivité et son souci du détail ont permis de donner vie à notre vision. Michel a su comprendre nos besoins spécifiques et livrer un résultat qui dépasse nos attentes. Je recommande vivement ses services à quiconque souhaite faire évoluer son projet.",
    name: "BIKO RO BIEKO Gilles",
    title: "CEO de Ginov",
    img:"/profile1.jpg"
  },
  {
    quote:
      "La collaboration avec Michel MOUHANI a été fluide et enrichissante. Son approche professionnelle et sa capacité à résoudre les défis techniques en un temps record sont impressionnantes. Grâce à son travail, notre plateforme a gagné en performance et en attractivité. Un partenaire fiable pour tout projet ambitieux.",
    name: "Jean-Luc Moreau",
    title: "CEO de NovaTech Solutions",
    img:"/user.png"
  },
  {
    quote:
      "Michel MOUHANI a transformé notre site web en une vitrine moderne et dynamique. Son écoute, son expertise technique et son engagement à fournir un travail de qualité sont remarquables. Travailler avec lui a été un vrai plaisir, et je n'hésiterai pas à refaire appel à ses services.",
    name: "Catherine Dubois",
    title: "Directrice Marketing chez Élan Créatif",
    img:"/user.png"
  },
  {
    quote:
      "Michel MOUHANI a été un atout précieux pour notre projet. Il a su nous guider avec des recommandations pertinentes et a livré un travail impeccable dans des délais serrés. Si vous recherchez un expert fiable et talentueux, Michel est la personne qu'il vous faut.",
    name: "Thomas Garnier",
    title: "Responsable IT chez SoftWave Industries",
    img:"/user.png"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg"
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg"
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg"
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg"
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Stagiaire Ingénieur Frontend",
    desc: "A aidé au développement d'une plateforme web utilisant React.js, améliorant l'interactivité.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "Développeur d'App Mobile",
    desc: "Conçu et développé une application mobile pour les plateformes iOS et Android en utilisant React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg"
  },
  {
    id: 3,
    title: "Projet de Développement Site web",
    desc: "Dirigé le développement d'un site web pour un client, depuis le concept initial jusqu'au déploiement sur le net.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg"
  },
  {
    id: 4,
    title: "Lead Développeur Frontend",
    desc: "Développé et maintenu des fonctionnalités orientées utilisateur en utilisant les technologies frontend modernes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg"
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git-second.svg",
    url:"https://github.com/mikestudent06"
  },
  {
    id: 2,
    img: "/twit.svg",
    url:"https://x.com/MouhaniMic44729"
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/michel-mouhani-b563b1262"
  }
];

export const TeckStackLists = [
  {
    id: 1,
    img: "/git.svg",
    title: "Git"
  },
  {
    id: 3,
    img: "/next.svg",
    title: "Next.js"
  },
  {
    id: 5,
    img: "/ts.svg",
    title: "TypeScript"
  },
  {
    id: 6,
    img: "/tail.svg",
    title: "Tailwind"
  }
];
