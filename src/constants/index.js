import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
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
  nike,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Scrum Master",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "SOS INFORMATICA GT ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2016 - Octuber 2022",
    points: [
      "Built and deployed fully responsive  and modern applications.",
      "Applied Modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities, complete integration with CMS or Headless CMS.",
      "Worked on advanced React best practices such as folder and file structure, hooks and refs.",
      "Added Next.js Best Practices such as File-based routing, Data fetching that allows server-side rendering and static generation which makes your websites incredibly optimized (show getServerSideProps, getStaticPaths, getStaticProps), using Next.js as a backend endpoint.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Master",
    company_name: "Cs Servicios Administrativos, S.A.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2012 - July 2015",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, Ajax and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Help Desk Support",
    company_name: "Man Power, S.A.",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2010 - September 2011",
    points: [
      "Diagnose failures in cell phones and tablets with Android and iOS operating systems.",
      "Diagnose and resolve network connectivity failures, program configuration.",
      "Preventive and corrective maintenance on computers with Windows and Mac OS operating systems hardware and software.",
      "Manage network users, mail, printer access or diversity organizational policies using Windows server and active directory.",
      "Create, Modify or Delete profiles and access to different databases by employees",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Furniture sale",
    description:
      "platform that offers a wide variety of furniture products at discounted prices. furniture options, including sofas, beds, tables, chairs, and other household items.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ventademuebles.netlify.app/tienda.html",
  },
  {
    name: "E-commerce demo",
    description:
      "Web application created payment integration with Stripe. For processing payment use 4242 4242 4242 4242 as Credit Card information.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://heaphones-sanity-stripe.vercel.app/",
  },
  {
    name: "Ecommerce Desing",
    description:
      "Do you want to give your best in every training session? You need the right sports shoes! Our line of sports footwear is designed to provide you with the comfort and stability.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://nike-ecommerce-frontend.vercel.app/",
  },
  {
    name: "Bank Website",
    description:
      "A bank website is an online platform that allows customers to access a range of banking services and information. The website typically offers a variety of features.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://modern-ui-ux-react-web.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
