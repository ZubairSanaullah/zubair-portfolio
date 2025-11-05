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
  {
    name: "Testimonials",
    link: "#testimonials",
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
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "SEO-Friendly",
    desc: "Ensuring your website is optimized for search engines to rank higher and attract more traffic.",
  },
  {
    imgPath: "/images/communicate.png",
    title: "Transparent Communication",
    desc: "Keeping you informed every step of the way, from concept to launch.",
  },
  {
    imgPath: "/images/time.png",
    title: "Timely Delivery",
    desc: "Delivering your project on time, ensuring your vision becomes a reality.",
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
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Tailwind",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "GSAP",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "As a dedicated and detail-oriented cashier, I managed daily financial transactions with accuracy and professionalism. My role required strong attention to detail, honesty, and the ability to work effectively in a fast-paced environment while ensuring customer satisfaction and smooth store operations.",
    imgPath: "/images/hlogo.png",
    logoPath: "/images/honda.png",
    title: "Cashier",
    date: "April 2024 - Present",
    responsibilities: [
      "Monitored and reported any discrepancies or suspicious transactions to management.",
      "Ensured compliance with company policies and cash handling procedures.",
      "Handled cash, credit, and debit payments while maintaining cash drawer accuracy.",
    ],
  },
  {
    review:
      "As a skilled and empathetic customer service representative, I was responsible for providing exceptional support to clients and ensuring their needs were met efficiently. My role strengthened my ability to handle pressure, multitask, and deliver service excellence while representing the company’s values and maintaining customer trust.",
    imgPath: "/images/tlogo.png",
    logoPath: "/images/transdata.png",
    title: "Customer Service Representative",
    date: "September 2023 - March 2024",
    responsibilities: [
      "Responded to customer inquiries via phone, email, and chat in a timely and professional manner.",
      "Resolved customer complaints and provided effective solutions to ensure satisfaction.",
      "Maintained accurate customer records and updated databases with relevant information.",
    ],
  },
  {
    review:
      "As a meticulous and organized data entry operator, I was responsible for entering and managing company information with precision and confidentiality. My role required strong attention to detail, computer proficiency, and the ability to work independently under tight deadlines, contributing to the smooth flow of office operations and accurate record-keeping.",
    imgPath: "/images/hlogo.png",
    logoPath: "/images/honda.png",
    title: "Data Entry Operator",
    date: "Febuary 2022 - October 2023",
    responsibilities: [
      "Entered, updated, and maintained accurate data in company databases and spreadsheets.",
      "Ensured timely completion of data entry tasks to meet project deadlines.",
      "Collaborated with team members to streamline data management processes.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/honda.png",
  },
  {
    name: "logo2",
    imgPath: "/images/transdata.png",
  },
  {
    name: "logo3",
    imgPath: "/images/honda.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};