import React from "react";
import { Grid } from "@material-ui/core";
import Banner from "../../components/Banner";
import ExperienceCard from "../../components/ExperienceCard";
import experienceData from "./experienceData";

export default function Experience() {
  return (
    <React.Fragment>
      <Banner title={"Experience"} color={"#3CBCD4"} />
      <div className="container content">
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={8}>
            {experienceData.map((job, idx) => <ExperienceCard key={idx} {...job}/>)}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
