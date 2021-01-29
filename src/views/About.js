import React from "react";
import Banner from "../components/Banner";

export default function About() {
  return (
    <section className="section section-light">
      <Banner title={"About"} color={"#1F8074"} />
      <div className="container content">
        <p>
          I am a Full Stack Web Developer currently residing in Wollongong, NSW.
          I have experience working with React, Redux, HTML, Typescript, Javascript and CSS
          among others.
        </p>
        <p>
          I am passionate about learning new technologies and implementing them
          to create functional applications for any problem, as well as keeping
          up to date on cutting edge technologies in order to improve work
          efficiency and streamline output.
        </p>
      </div>
    </section>
  );
}
