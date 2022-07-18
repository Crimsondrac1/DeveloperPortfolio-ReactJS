import React from "react";

function Resume() {
  return (
    <section className="container">
      <h2 className="top-title">Resumé</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <h2 className="top-title">Doug Erickson</h2>
          <ul>
            <li>
              Over 25 years of experince in the tech industry ranging from desktop and user technical support to metwork engineering and IT Director. I enjoy facing challenges that help hone my skills and expand my knowledge.
            </li>
          </ul>          
        </div>
      </div>

      <div className="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Skills</h2>
          <ul>
            <li>
              <h3>Information Technology</h3>
            <ul>
              <li>Windows 7, 8, 10, 11, Server</li>
              <li>Network design and implementation</li>
              <li>PC Desktop support</li>
              <li>PC assembly and maintenance</li>
              <li>Network security protocols and enforcement using firewalls and GPO</li>
              <li>Firewall and proxy configurations</li>
            </ul>
            </li>
            <li>
              <h3>Web Development</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>jQeury</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>mySQL, MS SQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>React</li>
              <li>Github, Git Bash</li>
              <li>Heroku</li>
              <li>Progressive Web Applications</li>
            </ul>
            </li>
            <li>
              <h3>Graphics</h3>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>miro.com</li>
              <li>wireframe.cc</li>
              <li>Blender 3D</li>
            </ul>
            </li>
          </ul>
        </div>
      </div>
      <h3>Download Resumé</h3>
      <a href={require("../../assets/files/doug_erickson_resume.docx")}
         className="link">Word </a>or 
         <a href={require("../../assets/files/doug_erickson_resume.pdf")}
         className="link"> PDF</a>
    </section>
    
  );
}

export default Resume;
