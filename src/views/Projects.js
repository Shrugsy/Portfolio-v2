import React from "react";
import { Grid } from "@material-ui/core";
import Project from "../components/Project";
import Banner from "../components/Banner";

import warbler1 from "../images/projects/warbler1.jpg";
import warbler2 from "../images/projects/warbler2.png";

import yelpcamp1 from "../images/projects/yelpcamp1.jpg";
import yelpcamp2 from "../images/projects/yelpcamp2.jpg";
import yelpcamp3 from "../images/projects/yelpcamp3.jpg";
import yelpcamp4 from "../images/projects/yelpcamp4.jpg";

import sudoku1 from "../images/projects/sudoku1.png";
import sudoku2 from "../images/projects/sudoku2.png";
import sudoku3 from "../images/projects/sudoku3.png";
import sudoku4 from "../images/projects/sudoku4.png";
import sudoku5 from "../images/projects/sudoku5.png";

import clock1 from "../images/projects/clock1.png";
import clock2 from "../images/projects/clock2.png";
import clock3 from "../images/projects/clock3.png";

import palette1 from "../images/projects/paletteGenerator1.jpg";
import palette2 from "../images/projects/paletteGenerator2.jpg";
import palette3 from "../images/projects/paletteGenerator3.jpg";

import portfolio1 from "../images/projects/portfolio1.jpg";
import portfolio2 from "../images/projects/portfolio2.jpg";
import portfolio3 from "../images/projects/portfolio3.jpg";
import portfolio4 from "../images/projects/portfolio4.jpg";
import portfolio5 from "../images/projects/portfolio5.jpg";



export default function Projects() {
  return (
    <React.Fragment>
      <Banner title={"Projects"} color={"#4D4AB4"} />
      <div className="container content">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={4}>
            <Project
              images={[palette1, palette2, palette3]}
              title="Palette Generator"
              description="Web app to generate a colour palette based off an image URL or uploaded image file."
              tech={[
                "Node.js",
                "Express",
                "React",
                "Material UI",
                "HTML",
                "CSS",
                "JS"
              ]}
              linkLive="https://cjf-palette-generator.herokuapp.com/"
              linkSource="https://github.com/Shrugsy/Palette-Generator"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Project
              images={[clock1, clock2, clock3]}
              title="Clock with countdown timer"
              description="A desktop clock with toggleable timer in the style of google.com's inbuilt timer. Built in order to experiment with using React for a desktop application."
              tech={["Node.js", "Electron", "React", "HTML", "CSS", "JS"]}
              linkSource="https://github.com/Shrugsy/Clock_with_Countdown_Timer"
            />
          </Grid>

          <Grid item xs={12} md={6} xl={4}>
            <Project
              images={[warbler1, warbler2]}
              title="Warbler"
              description="Full Stack mock Twitter clone created as a code-along exercise as part of 'The Advanced Web Developer Bootcamp' course on Udemy. The demo explores authentication using jsonwebtoken & bcrypt, as well as creating a user friendly experience using react router."
              tech={[
                "Node.js",
                "Express",
                "React",
                "mongoDB",
                "HTML",
                "CSS",
                "JS"
              ]}
              linkLive="https://warbler-client-cjf.herokuapp.com/"
              linkSource="https://github.com/Shrugsy/warbler"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Project
              images={[yelpcamp1, yelpcamp2, yelpcamp3, yelpcamp4]}
              title="YelpCamp"
              description="Full Stack mock website created as part of 'The Web Developer Bootcamp' by Colt Steele on Udemy."
              tech={[
                "Node.js",
                "Express",
                "mongoDB",
                "EJS",
                "HTML",
                "CSS",
                "JS"
              ]}
              linkSource="https://github.com/Shrugsy/yelpCamp"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Project
              images={[sudoku1, sudoku2, sudoku3, sudoku4, sudoku5]}
              title="Sudoku"
              description="Client side implementation of Sudoku to explore React."
              tech={["Node.js", "React", "HTML", "CSS", "JS"]}
              linkLive="https://sudokuboardgame.herokuapp.com/"
              linkSource="https://github.com/Shrugsy/Sudoku"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Project
              images={[portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]}
              title="Portfolio v1"
              description="Version 1 of my portfolio website."
              tech={["React", "HTML", "CSS", "JS"]}
              linkLive="https://elastic-villani-6d8371.netlify.com/"
              linkSource="https://github.com/Shrugsy/Portfolio-v1"
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
