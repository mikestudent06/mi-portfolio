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
  { title: "TypeScript", img: "/ts.svg", category: "Frontend" },
  { title: "React", img: "/re.svg", category: "Frontend" },
  { title: "Next.js", img: "/nextjs.svg", category: "Frontend" },
  { title: "Vue.js", img: "/vue.svg", category: "Frontend" },

  // Mobile
  { title: "React Native", img: "/react-native.svg", category: "Mobile" },

  // Backend
  { title: "Node.js", img: "/nodejs.svg", category: "Backend" },
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
  { title: "AWS", img: "/aws.svg", category: "Cloud" },
  { title: "Vercel", img: "/vercel.svg", category: "Deployment" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Gymo - Site web pour s'exercer",
    des: "Gardez la forme grâce à notre site fait exclusivement pour les sportifs, hommes et femmes.",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://gymo.vercel.app/",
  },
  {
    id: 2,
    title:
      "Pitcheur - Application web pour les entrepreneurs qui souhaitent pitcher des projets et trouver des projets intéressants.",
    des: "Pitcheur est une application web conçue pour les entrepreneurs souhaitant présenter leurs idées innovantes et découvrir des projets prometteurs.",
    img: "/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://pitcheur.vercel.app/",
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
      "La collaboration avec Michel MOUHANI a été fluide et enrichissante. Son approche professionnelle et sa capacité à résoudre les défis techniques en un temps record sont impressionnantes. Grâce à son travail, notre plateforme a gagné en performance et en attractivité. Un partenaire fiable pour tout projet ambitieux.",
    name: "Jean-Luc Moreau",
    title: "CEO de NovaTech Solutions",
    img: "/user.png",
  },
  {
    quote:
      "Michel MOUHANI a transformé notre site web en une vitrine moderne et dynamique. Son écoute, son expertise technique et son engagement à fournir un travail de qualité sont remarquables. Travailler avec lui a été un vrai plaisir, et je n'hésiterai pas à refaire appel à ses services.",
    name: "Catherine Dubois",
    title: "Directrice Marketing chez Élan Créatif",
    img: "/user.png",
  },
  {
    quote:
      "Michel MOUHANI a été un atout précieux pour notre projet. Il a su nous guider avec des recommandations pertinentes et a livré un travail impeccable dans des délais serrés. Si vous recherchez un expert fiable et talentueux, Michel est la personne qu'il vous faut.",
    name: "Thomas Garnier",
    title: "Responsable IT chez SoftWave Industries",
    img: "/user.png",
  },
];

export const companies: Company[] = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
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
    title: "Stagiaire Ingénieur Frontend",
    desc: "A aidé au développement d'une plateforme web utilisant React.js, améliorant l'interactivité.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur d'App Mobile",
    desc: "Conçu et développé une application mobile pour les plateformes iOS et Android en utilisant React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projet de Développement Site web",
    desc: "Dirigé le développement d'un site web pour un client, depuis le concept initial jusqu'au déploiement sur le net.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Développeur Frontend",
    desc: "Développé et maintenu des fonctionnalités orientées utilisateur en utilisant les technologies frontend modernes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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
