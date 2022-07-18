import React from "react";
import coverImage from "../../assets/img/doug.jpg";
function About() {
  return (
    <section className="">
      <h1 className="page-header">About me</h1>
      <img src={coverImage} className="headshot" alt="cover" />
      <div className="my-2">
        <p>
          My name is Doug Erickson and I currently reside in Houston, TX. I have
          dedicated most of my career to the tech industry and have worked
          everything from technical support up to being an IT Director of a
          national company.
        </p>
        <p>
          Now, I have entered into the exiting world of full-stack web
          development. I have learned a great deal about web development in the
          last six months but the only thing I feel I truly know is that I have
          a lot more to learn. Coding has been one of the biggest challenges of
          my life and these are the types of challenges I like. There is no
          better feeling than finally finding that solution after the answer had
          been eluding you. I look forward to the adventure as I walk the path
          and cannot wait to see what is over the next hill.
        </p>
        <p>
          Please check out my projects if you have some time and feel free to
          contact me if you want to discuss any of them. If you are here looking
          for developers, please take a look at my resume.
        </p>
        <p>
          Thanks for stopping by. Live long and prosper.{" "}
          <span role="img" aria-label="vulcan-hand-sign">
            🖖
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
