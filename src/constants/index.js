const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Technologies Learned" },
  { value: 40, suffix: "+", label: "Completed Projects" },
  { value: 200, suffix: "+", label: "Hours Spent Learning to Code" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-supabase.png",
  },
  {
    imgPath: "/images/logos/company-logo-netlify.png",
  },
  {
    imgPath: "/images/logos/company-logo-firebase.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-expo.png",
  },
  {
    imgPath: "/images/logos/company-logo-mongodb.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Django's structure and conventions have helped keep projects maintainable and scalable. It’s a framework I’ve grown comfortable with and confident using across a range of applications — from MVPs to production-level systems.",
    imgPath: "/images/django.png",
    logoPath: "/images/logodjango.png",
    title: "Backend Developer",
    date: "March 2023 - Present",
    learnings: [
      "How to define data structures using Django’s ORM and efficiently query databases without writing raw SQL",
      "How to separate logic and presentation by creating clean, modular views and dynamic HTML templates.",
      "How to build, serialize, and secure APIs efficiently using DRF’s powerful tools.",
    ],
  },
  {
    review:
      "Working with React has really changed the way I approach building user interfaces. I love how easy it is to break things down into components — it keeps everything organized and makes it way easier to scale as the app grows.",
    imgPath: "/images/reactlogo.png",
    logoPath: "/images/react.png",
    title: "Frontend Developer",
    date: "May 2024 - Present",
    learnings: [
      "How to write HTML-like syntax within JavaScript to create dynamic UI components.",
      "How to manage side effects and stateful logic in functional components with React Hooks.",
      "How to break interfaces into reusable, modular components that manage their own state and logic.",
    ],
  },
  {
    review:
      "Next.js has been a game-changer for how I build web apps — especially when it comes to performance and structure. I’ve used it to create fast, SEO-friendly applications with built-in routing, API routes, and server-side rendering out of the box.",
    imgPath: "/images/nextjslg.png",
    logoPath: "/images/nextjs.png",
    title: "Fullstack Developer",
    date: "July 2024 - Present",
    learnings: [
      "How to quickly set up page navigation using Next.js’s file-based routing system without extra configuration.",
      "How to create backend functionality directly within my Next.js project using built-in API routes.",
      "How to use middleware for authentication, redirects, and request handling closer to the user.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/github1.png",
    url: "https://github.com/Kaelmur",
  },
  {
    name: "telegram",
    imgPath: "/images/telegram.png",
    url: "https://t.me/Kael_mur",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/Pizza_Swallower",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/asylmur/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
