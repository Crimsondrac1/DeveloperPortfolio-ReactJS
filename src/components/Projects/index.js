import React from "react";
import Project from "../Project";

const Projects = () => {
  const projects = [
    {
      name: "Run Buddy",
      proj_id: "01",
      description:
        "Simple website using basic web technology that displays layout and how powerful simple CSS can be. The purpose of the website is to connect people with fitness trainers.",
      image: "runbuddy2.jpg",
      technologies: "HTML, CSS",
      github: "https://github.com/Crimsondrac1/Portfolio",
      deployed: "https://crimsondrac1.github.io/run-buddy/",
    },
    {
      name: "Crypto Watch",
      proj_id: "02",
      description:
        "Website designed to allow users to create a list of crypto investments and monitor social media in regards to crypto. The site is enabled for local storage to save user information and pulls crypto symbols and news for third party APIs.",
      image: "page1.jpg",
      technologies: "HTML, CSS, Javascript, JQuery, Bulma",
      github: "https://github.com/Crimsondrac1/Crypto-Watch",
      deployed: "https://crimsondrac1.github.io/Crypto-Watch/",
    },
    {
      name: "Chat App Live",
      proj_id: "03",
      description:
        "A small site developed to showcase use of more powerful and advanced technologies to create an online chat room.",
      image: "ChatAppLive_proj3.jpg",
      technologies:
        "HTML, CSS, Javascript, JQuery, Bulma, ExpressJS, NodeJS, Handlebars.js, mySQL, and Sequelize ORM",
      github: "https://github.com/Crimsondrac1/ChatAppLive",
      deployed: "https://livechat-app-1.herokuapp.com/",
    },
    {
      name: "React Developer Portfolio",
      proj_id: "04",
      description:
        "My personal developer's portfolio showing a single-page application using React.",
      image: "react-dev-portfolio.jpg",
      technologies: "HTML, CSS, JavaScript, JQuery, Bulma, ExpressJS and React",
      github: "https://github.com/Crimsondrac1/developerportfolio-reactjs",
      deployed: "https://crimsondrac1.github.io/developerportfolio-reactjs/",
    },
    {
      name: "does-not-equal",
      proj_id: "05",
      description:
        "Tchnology forum Q&A site to provide space to discuss coding and technology problems and solutions",
      image: "dne_01.jpg",
      technologies:
        "HTML, CSS, MongoDB, Apollo Server, GraphQL, Express, Node, React, Material UI",
      github: "https://github.com/Crimsondrac1/console-log",
      deployed: "https://does-not-equal.herokuapp.com",
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">Projects</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
