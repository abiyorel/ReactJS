import React from "react";

const About = () => {
  return (
    <div className="container ubuntu h1 text-secondary mt-4">
      About
      <div className="h2 mt-4 text-info">
        Hello guys 👋🏻
        <p className="my-2">
          I'm <span className="text-secondary">Karel Abiyoga</span>
        </p>
      </div>
      <div className="h2 text-info">
        This is my{" "}
        <span className="text-secondary">Rick and Morty ReactJS</span> with{" "}
        <span className="text-secondary">Apollo GraphQL</span>
        <p className="my-2">See ya 🙏🏻</p>
      </div>
    </div>
  );
};

export default About;
