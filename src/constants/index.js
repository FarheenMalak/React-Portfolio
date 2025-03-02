import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project4,
  project5,
  project6,
} from "../assets";
import internshipPakistanLogo from "../assets/company/logo.png"; // ✅ Correct Import
import htmlLogo from "../assets/tech/html.png";
import cssLogo from "../assets/tech/css.png";
import javascriptLogo from "../assets/tech/javascript.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Web DEsigning",
    icon: backend,
  },
  {
    title: "Elevating your Projects",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: htmlLogo,
  },
  {
    name: "CSS 3",
    icon: cssLogo,
  },
  {
    name: "JavaScript",
    icon: javascriptLogo,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front End Developer Intern",
    company_name: "Young Dev Intern",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0PyZCiDXSP-g22soE9yFpMLgm1bD2HaLiw&s',
    iconBg: "#383E56",
    date: "Aug 2024 (1 Month Remote)",
    points: [
      "Developed responsive UI components using HTML, CSS, and JavaScript.",
      "Collaborated with senior developers to enhance web application performance.",
      "Fixed UI bugs and improved accessibility for better user experience.",
    ],
  },
  {
    title: "Front End Developer Intern",
    company_name: "Internship Pakistan",
    icon: internshipPakistanLogo,  // Replace with correct icon
    iconBg: "#E6DEDD",
    date: "Jan 2025 - March 2025 (2 Months Remote)",
    points: [
      "Worked on real-world projects using React.js and Bootstrap.",
      "Implemented dynamic UI components for better interactivity.",
      "Ensured cross-browser compatibility and improved page speed.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kababjees Website Clone",
    description:
      "A responsive restaurant website clone, showcasing an interactive menu, reservation system, and elegant UI, providing users with an immersive browsing experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    live_demo_link: "https://farheenmalak.github.io/Kababjees-Replica/",  // ✅ New Live Link
  },
  {
    name: "Magic Spoon Clone",
    description:
      "A sleek and modern e-commerce website clone, offering a smooth shopping experience with dynamic product filtering, cart management, and user-friendly design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    live_demo_link: "https://farheenmalak.github.io/Magic-Spoon-Clone/",  // ✅ New Live Link
  },
  {
    name: "Microsoft Clone",
    description:
      "A fully responsive Microsoft website replica featuring engaging UI components, interactive sections, and optimized performance for an authentic browsing experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    live_demo_link: "https://microsoft-clone-delta-ashen.vercel.app/",  // ✅ New Live Link
  },
  {
    name: "Creative Website",
    description:
      "An innovative portfolio website with a visually appealing layout, smooth animations, and a user-friendly interface, highlighting creativity and modern web design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    live_demo_link: "https://farheenmalak.github.io/Freelance-Project/",  // ✅ New Live Link
  },
  {
    name: "Travel Tracker",
    description:
      "An interactive travel tracking platform integrating Google Maps API, allowing users to mark locations, plan trips, and explore new destinations with ease.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Google Maps Api",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    live_demo_link: "https://farheenmalak.github.io/Js-Project/",  // ✅ New Live Link
  },
  {
    name: "Snake Game",
    description:
      "A classic Snake game built with HTML, CSS, and JavaScript, featuring smooth controls, real-time score tracking, and an engaging retro gaming experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    live_demo_link: "https://farheenmalak.github.io/Snake-Game/",  // ✅ New Live Link
  },
];

export { services, technologies, experiences, testimonials, projects };
