import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "Mayank Butani",
  title: "React & Redux Developer | Front-End Developer",
  contact: {
    email: "mayankbutanii22@gmail.com",
    phone: "9737968372",
    Address: "",
    GitHub: "https://github.com/mayankbutanii22",
    Vercel: "https://vercel.com/mayankbutanii22s-projects",
    Linkedin: "https://www.linkedin.com/in/mayank-butani-9a63a0342/",
  },
  summary: [
  "Frontend Developer with 1 year of experience in building responsive and dynamic web applications.",
  "Proficient in HTML, CSS, JavaScript, Bootstrap, React, and Redux for creating modern, user-friendly interfaces.",
  "Passionate about crafting clean, maintainable code and continuously improving web performance.",
  "Eager to grow as a React/Redux developer and contribute to high-quality, scalable digital solutions."
],


  skills: [
    "HTML & HTML5",
    "CSS & CSS3",
    "Bootstrap",
    "JavaScript",
    "React.js",
    "React Router",
    "CSS Modules",
    "Styled Components",
    "React Hooks",
    "Redux Toolkit",
    "State Management",
    "Redux",
    "Json & API",
    "Mobile Application",
    "Responsive Web Design",
    "Web Application",
    "Web Development",
    "Fetch API",
    "Rest API",
    "Context API",
    "Vercel",
    "Git & GitHub",
  ],
  languages: [
    { name: "Gujarati", level: 5 },
    { name: "Hindi", level: 4 },
    { name: "English", level: 3 },
  ],
 
  projects: [
  {
    title: "E-Commerce Website – React + Redux",
    duration: "2025",
    details: [
      "Full-featured shopping site with product pages, cart, checkout, and user login.",
      "Built using React and Redux for dynamic state management.",
      "Deployed live on Vercel with complete responsive design.",
      "Live: https://e-commerce-website-react-redux-eta.vercel.app/",
      "Code: https://github.com/mayankbutanii22/E-Commerce-Website-React-Redux",
    ],
  },
  {
    title: "Food Delivery Platform – React + Redux",
    duration: "2025",
    details: [
      "Displays restaurant listings, menu pages, and a working cart.",
      "Includes fully responsive design and modern UI/UX.",
      "Deployed on Vercel for easy public access.",
      "Live: https://food-delivery-website-react-redux.vercel.app/",
      "Code: https://github.com/mayankbutanii22/Food-Delivery-Website-React-Redux",
    ],
  },
  {
    title: "Event Booking Website – React + Redux",
    duration: "2025",
    details: [
      "Features upcoming events, ticket booking system, and a contact form.",
      "Utilizes Redux Toolkit for efficient state management.",
      "Modern SaaS-inspired responsive design.",
      "Live: https://event-booking-website-react-redux.vercel.app/",
      "Code: https://github.com/mayankbutanii22/Event-Booking-Website-React-Redux",
    ],
  },
],
  education: [
    {
      Study: "12th - Science",
      school: "N.M. Sheth Kumar Vidyalaya, Kunkavav",
      description: "Completed 12th from N.M. Sheth Kumar Vidyalaya, Kunkavav, Amreli (Gujarat).",
      Course: "Online Learning React & Redux and HTML, CSS, JavaScript languages from Bhanu Infotech",
    },
  ],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {},
});

export default resumeSlice.reducer;

