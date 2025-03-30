
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import coffee  from "../assets/projects/coffee.jpg"
import movie from "../assets/projects/movie.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Frontend Developer trainee",
    company: "Deeksha Technologies",
    description: `Completed training in Frontend Development, focusing on HTML, CSS, and JavaScript. Gained hands-on experience in building responsive web pages, styling with CSS frameworks, and implementing dynamic functionalities using JavaScript. Worked on real-world projects to enhance UI/UX skills and improve web performance.`,
    technologies: ["HTML", "CSS", "JavaScript"]

  },
  {
    year: "2025",
    role: "Frontend Developer Intern",
    company: "Saras Consultancy",
    description: `Completed a 2-month internship focused on frontend development. Built a business website using WordPress and developed a fully functional e-commerce website using React.js. Worked with HTML, CSS, and JavaScript to create responsive and visually appealing user interfaces. Gained experience in website customization, component-based UI development, and optimizing user experience.`,
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "WordPress","Nodejs"]
  },
];

export const PROJECTS = [
  {
    title: "Coffee Tracker",
image: coffee,
description:
  "A coffee tracking application built with React.js, allowing users to log and manage their coffee consumption. Features include user authentication, data storage, and real-time updates using Firebase. Provides an intuitive UI for tracking coffee preferences and consumption history.",
technologies: ["React.js", "HTML", "CSS", "JavaScript", "Firebase"],

  },
  {
    title: "Movie-App",
    image: movie,
    description:
          "A movie discovery application built with React.js, allowing users to browse, search, and view details of movies. Integrated a movie database API for real-time updates and implemented a responsive UI for a seamless user experience.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "API Integration"],

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwindcss", "React", "Bootstrap"],
  },
  {
    title: "Admin Dashboard",
    image: project4,
    description:
      "A web-based admin dashboard built with React.js for managing users, products, and analytics. Features include real-time data visualization, role-based authentication, and CRUD operations for efficient management.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "OMBR Layout, Banaswadi, Bengaluru, Karnataka 560043 ",
  phoneNo: "+12 4555 666 00 ",
  email: "akhilkantepalli2@gmail.com",
};
