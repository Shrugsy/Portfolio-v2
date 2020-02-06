import React from "react";
import Banner from "../components/Banner";
import ExperienceCard from "../components/ExperienceCard";
import { Grid } from "@material-ui/core";

import pldLogo from "../images/Logos/pld_logo.png";
import woolworthsLogo from "../images/Logos/woolworths-5.svg";

export default function Experience() {
  return (
    <React.Fragment>
      <Banner title={"Experience"} color={"#3CBCD4"} />
      <div className="container content">
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <ExperienceCard
              link="https://powerdesign.com.au/"
              logo={pldLogo}
              company="Power Line Design"
              role="Electrical Design Consultant"
              description="Small electrical Level 3 Accredited Service Provider with projects spanning the entirety of NSW."
              tasks={[
                "Solo self-driven development of desktop GUI apps and browser extensions to integrate work processes and improve productivity",
                "Solo self-driven development of AutoCAD script addons and VBA scripts to introduce automation software to the workplace",
                "Solo development of Python & Powershell scripts to facilitate the transition of company data restructuring",
                "Consistent output of Computer Aided Design drafting",
                "Frequent liaising with clients",
                "Detailed site visits and data collection (survey data, soil resistivity testing)",
                "Level 3 design/engineering for Supply Authority Networks (Endeavour Energy, Essential Energy)",
                "Project Management",
                "Auditing and inspection of peer designs",
                "Overseeing & co-ordinating multiple simultaneous projects",
                "Adherence to work requirements, Supply Authority standards & Electrical Standards",
                "Application of continuous improvement principles to the design process"
              ]}
              durationFrom="Mar 2017"
              durationTo="Oct 2019"
              location="Mittagong, NSW"
            />
            <ExperienceCard
              link="https://www.woolworths.com.au/"
              logo={woolworthsLogo}
              company="Woolworths"
              role="Service Cashier"
              description="Nation wide supermarket chain"
              tasks={[
                "Supervision of fellow staff members",
                "Serving customers as well as dealing with customer queries & complains",
                "Frequent handling of large sums of cash"
              ]}
              durationFrom="2006"
              durationTo="2017"
              location="Wagga Wagga & Wollongong"
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
