"use client";
// Types pour les données

export interface NavItem {
  name: string;
  link: string;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface Skill {
  title: string;
  img: string;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  img: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  url: string;
}

export interface TechStackItem {
  id: number;
  img: string;
  title: string;
}

// Données
export const navItems: NavItem[] = [
  { name: "À propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Développeur Full-Stack passionné par l'innovation technologique",
    description:
      "Plus de 3 ans d'expérience dans la création d'applications web et mobiles",
    className: "lg:col-span-3 md:col-span-6 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 2,
    title: "Collaboration flexible dans tous les fuseaux horaires",
    description:
      "Adapté au travail en équipe internationale et aux projets clients diversifiés",
    className: "lg:col-span-2 md:col-span-6 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma stack technologique en évolution constante",
    description:
      "Toujours à la recherche des dernières innovations pour créer des solutions performantes",
    className: "lg:col-span-5 md:col-span-6 sm:col-span-6 sm:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Prêt à transformer vos idées en réalité digitale",
    description:
      "De la conception à la mise en production, accompagnement complet de vos projets",
    className: "lg:col-span-2 md:col-span-3 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center w-full text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Approche centrée sur la performance et l'expérience utilisateur",
    description: "Code propre, architecture scalable et interfaces intuitives",
    className: "lg:col-span-3 md:col-span-3 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Passionné par l'apprentissage continu",
    description:
      "Veille technologique constante et formation aux dernières tendances du développement",
    className: "lg:col-span-6 md:col-span-6 sm:col-span-6 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

// Compétences étendues et bien typées
export const skills: Skill[] = [
  // Frontend
  { title: "HTML5", img: "/html.svg", category: "Frontend" },
  { title: "CSS3", img: "/css.svg", category: "Frontend" },
  { title: "Tailwind CSS", img: "/tail.svg", category: "Frontend" },
  { title: "JavaScript", img: "/javascript.svg", category: "Frontend" },
  { title: "Wordpress", img: "/wp.svg", category: "Frontend" },
  { title: "TypeScript", img: "/ts.svg", category: "Frontend" },
  { title: "React", img: "/re.svg", category: "Frontend" },
  { title: "Next.js", img: "/nextjs.svg", category: "Frontend" },
  { title: "Gsap", img: "/gsap.svg", category: "Frontend" },
  { title: "Framer Motion", img: "/fm.svg", category: "Frontend" },

  // Mobile
  { title: "React Native", img: "/react-native.svg", category: "Mobile" },

  // Backend
  { title: "Node.js", img: "/node.svg", category: "Backend" },
  { title: "Express.js", img: "/express.svg", category: "Backend" },
  { title: "NestJS", img: "/nestjs.svg", category: "Backend" },
  { title: "Python", img: "/python.svg", category: "Backend" },

  // Database
  { title: "MongoDB", img: "/mongodb.svg", category: "Database" },
  { title: "PostgreSQL", img: "/sql.svg", category: "Database" },
  { title: "MySQL", img: "/sql.svg", category: "Database" },

  // Tools
  { title: "Git", img: "/git.svg", category: "Tools" },
  { title: "Docker", img: "/dock.svg", category: "DevOps" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Site web de la société Lordson Congo",
    des: "Lordson Congo est une entreprise spécialisée dans les services offshore et d'échafaudage.",
    img: "/lodson.png",
    iconLists: ["/wp.svg", "/html.svg", "/php.svg", "/css.svg"],
    link: "https://candid-begonia-e3c199.netlify.app",
  },
  {
    id: 2,
    title: "Cogym - Site web pour s'exercer",
    des: "Cogym est un site web proposant un service d'entraînement personnalisé.",
    img: "/cogym.png",
    iconLists: ["/wp.svg", "/html.svg", "/php.svg", "/css.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Decrea - Agence de conception de logo",
    des: "Decrea est une agence spécialisée dans la création de logos et d'identités visuelles pour les entreprises.",
    img: "/decrea.png",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://decrea.vercel.app/",
  },
  {
    id: 4,
    title: "Gymo - Application web pour s'exercer",
    des: "Trouvez des exercices adaptés à vos besoins et des exemples en vidéos youtube associés.",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://gymo.vercel.app/",
  },
  {
    id: 5,
    title:
      "Pitcheur - Application web pour les entrepreneurs qui souhaitent pitcher des projets et trouver des projets intéressants.",
    des: "Pitcheur est une application web conçue pour les entrepreneurs souhaitant présenter leurs idées innovantes et découvrir des projets prometteurs.",
    img: "/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://pitcheur.vercel.app/",
  },
  {
    id: 6,
    title: "Dino Jump",
    des: "Jeu de Dino Jump inspiré du célèbre jeu de Google Chrome, développé avec JavaScript.",
    img: "/dino.png",
    iconLists: ["js.svg", "/html.svg", "/css.svg"],
    link: "https://dino-game-pearl.vercel.app/",
  },
  {
    id: 7,
    title: "Latodo",
    des: "Application de gestion de tâches développée avec React et Tailwind CSS.",
    img: "/latodo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://latodo-xi.vercel.app/",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Travailler avec Michel MOUHANI a été une expérience exceptionnelle. Son expertise, sa réactivité et son souci du détail ont permis de donner vie à notre vision. Michel a su comprendre nos besoins spécifiques et livrer un résultat qui dépasse nos attentes. Je recommande vivement ses services à quiconque souhaite faire évoluer son projet.",
    name: "BIKO RO BIEKO Gilles",
    title: "CEO de Ginov",
    img: "/profile1.jpg",
  },
  {
    quote:
      "La collaboration avec Michel MOUHANI a été fluide et enrichissante. Grâce à son travail, notre plateforme a un design moderne et attrayant. Un partenaire fiable pour tout projet ambitieux.",
    name: "Ruben KIMBEMBE",
    title: "CEO de KM Dreams",
    img: "/user.png",
  },
  {
    quote:
      "Michel MOUHANI a fait preuve d'un professionnalisme exemplaire tout au long de notre collaboration. Sa capacité à transformer des idées complexes en solutions simples et efficaces est impressionnante. Je suis très satisfait du résultat final et je n'hésiterai pas à faire appel à lui pour de futurs projets.",
    name: "Paul MOUKALA",
    title: "CEO de Cogym",
    img: "/user.png",
  },
];

export const companies: Company[] = [
  {
    id: 1,
    name: "Ginov",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Lordson",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Développeur Frontend",
    desc: "A aidé au développement de plusieurs solutions web au sein de Ginov et en freelance utilisant React.js et Vue.js, améliorant l'interactivité.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur Frontend Vuejs",
    desc: "A contribué au développement d'une application de gestion des calendriers en collaboration avec l'entreprise Française Interstis en utilisant Vue.js pour une expérience utilisateur fluide.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Développeur Frontend Reactjs",
    desc: "A contribué au développement d'une application de gestions de devis et factures en collaboration avec l'entreprise Française Mediasoft en utilisant React.js.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 4,
    title: "Développeur Backend",
    desc: "Développé l'API complète d'une application de chat en temps réel au sein de Ginov, utilisant Nest.js et Socket.io.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 5,
    title: "Développeur d'App Mobile",
    desc: "Conçu et développé des applications mobiles pour les plateformes iOS et Android en utilisant React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 6,
    title: "Projet de Développement Site web",
    desc: "Dirigé le développement d'un site web pour un client, depuis le concept initial jusqu'au déploiement sur le net.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 7,
    title: "Lead Développeur Frontend",
    desc: "Supervisé une équipe de développeurs frontend pour créer une application web complexe avec React.js.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 8,
    title: "Développeur Full-Stack",
    desc: "Contribué au développement complet d'une application web, gérant à la fois le frontend et le backend.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    img: "/git-second.svg",
    url: "https://github.com/mikestudent06",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/MouhaniMic44729",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/michel-mouhani-b563b1262",
  },
];

export const TeckStackLists: TechStackItem[] = [
  {
    id: 1,
    img: "/git.svg",
    title: "Git",
  },
  {
    id: 3,
    img: "/next.svg",
    title: "Next.js",
  },
  {
    id: 5,
    img: "/ts.svg",
    title: "TypeScript",
  },
  {
    id: 6,
    img: "/tail.svg",
    title: "Tailwind",
  },
];
