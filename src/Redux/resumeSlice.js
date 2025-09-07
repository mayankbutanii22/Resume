import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "Mayank Butani",
  title: "React & Redux Developer | Front-End Developer",
  contact: {
    email: "mayankbutanii22@gmail.com",
    phone: "9737968372",
    Address: "",
    Vercel: "https://vercel.com/mayankbutanii22s-projects",
  },
  summary: [
  "Frontend Developer in building responsive and dynamic website and web applications.",
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
    "Context API",
    "Vercel",
    "Git & GitHub",
  ],
  languages: [
    { name: "Gujarati", level: 5 },
    { name: "Hindi", level: 4 },
    { name: "English", level: 3 },
  ],
 
    projects : [
{
title: "E-Commerce Website – React + Redux",
duration: "2025",
details: [
"Full-featured shopping site with product pages, cart, checkout, and user login.",
"Built using React and Redux for dynamic state management.",
"Deployed live on Vercel with complete responsive design.",
],
live: "https://e-commerce-website-react-redux-eta.vercel.app/",
description:
"This project is a modern e-commerce web application built using React and Redux. It features a complete shopping workflow, including product listings, detail pages, a persistent shopping cart, and a checkout system with validation. User authentication allows login and order history, making the experience realistic and professional. Redux Toolkit is leveraged for state management, ensuring smooth synchronization across components. The design is fully responsive, clean, and minimalistic, optimized for performance and accessibility. Deployed on Vercel, the app demonstrates my ability to build and deliver production-ready solutions that mirror real-world e-commerce platforms while applying reusable components, routing, and performance best practices.",
},
{
title: "Food Delivery Platform – React + Redux",
duration: "2025",
details: [
"Displays restaurant listings, menu pages, and a working cart.",
"Includes fully responsive design and modern UI/UX.",
"Deployed on Vercel for easy public access.",
],
live: "https://food-delivery-website-react-redux.vercel.app/",
description:
"The Food Delivery Platform replicates popular food ordering services with React and Redux. Users can browse restaurant listings, view detailed menus, and add dishes to a synchronized cart. The app features a responsive layout with modern UI/UX principles, ensuring usability across devices. State management is handled with Redux Toolkit, maintaining cart data and user selections consistently. React Router provides smooth navigation between pages like Home, Menu, Cart, and Checkout. Deployed on Vercel, the project highlights my ability to design interactive, real-world applications with reusable components, scalable architecture, and optimized performance for both mobile and desktop experiences.",
},
{
title: "Event Booking Website – React + Redux",
duration: "2025",
details: [
"Features upcoming events, ticket booking system, and a contact form.",
"Utilizes Redux Toolkit for efficient state management.",
"Modern SaaS-inspired responsive design.",
],
live: "https://event-booking-website-react-redux.vercel.app/",
description:
"This Event Booking Website allows users to discover, view, and book tickets for upcoming events. It includes event listings with detail pages, a ticket booking workflow, and a contact form for inquiries. Built with React and Redux Toolkit, the app manages booking states and user selections efficiently. The design is SaaS-inspired with a modern, responsive layout suitable for all screen sizes. Smooth navigation is implemented with React Router, and features like lazy loading and reusable components enhance performance. Deployed on Vercel, the project demonstrates my capability to build scalable, transaction-based platforms with a professional look and robust functionality.",
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

