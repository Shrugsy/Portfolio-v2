import React, { Component } from "react";
import Banner from "../components/Banner";
import { Grid, Paper, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import GitIcon from "../images/icons/git-icon.svg";
import GitHubIcon from "../images/icons/github-icon-1.svg";
import ReactIcon from "../images/icons/react.svg";
import NodeIcon from "../images/icons/nodejs-1.svg";
import HTMLIcon from "../images/icons/html-5.svg";
import CSSIcon from "../images/icons/css-3.svg";
import JSIcon from "../images/icons/javascript.svg";
import BootstrapIcon from "../images/icons/bootstrap-4.svg";
import MaterialUIIcon from "../images/icons/material-ui.svg";

const styles = theme => ({
  paper: {
    // backgroundColor: '#dadada',
    // height: '80px',
    width: "auto"
  },
  iconGrid: {
    margin: "0 auto",
    justifyContent: 'space-evenly',
    '& > div': {
        textAlign: 'center'
    },
    "& img": {
      maxHeight: "60px",
      margin: '10px'
    }
  },
  listHeading: {
    marginTop: 0
  },
  list: {
    fontSize: '1.25rem',
    textAlign: 'center',
    marginTop: 0,
    '& ul': {
        padding: 0
    },
    '& li': {
        listStyleType: 'none',
    }
  }
});

class Skills extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Banner title={"Skills"} color={"#9C13AE"} />

        <div className="container content">
          
            <Paper elevation={3} className={classes.paper}>
            <Box py={4}>
              <Grid
                className={classes.iconGrid}
                container
              >
                <Grid item xs={4} sm={4} md={3} lg={1}>
                  <img src={GitIcon} alt="Git" />
                </Grid>
                <Grid item xs={4} sm={4} md={3} lg={1}>
                  <img src={GitHubIcon} alt="Github" />
                </Grid>
                <Grid item xs={4} sm={4} md={3} lg={1}>
                  <img src={ReactIcon} alt="React" />
                </Grid>
                <Grid item xs={4} sm={4} md={3} lg={1}>
                  <img src={NodeIcon} alt="NodeJS" />
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1}>
                  <img src={HTMLIcon} alt="HTML" />
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1}>
                  <img src={CSSIcon} alt="CSS" />
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1}>
                  <img src={JSIcon} alt="Javascript" />
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1}>
                  <img src={BootstrapIcon} alt="Bootstrap" />
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1}>
                  <img src={MaterialUIIcon} alt="Material UI" />
                </Grid>
              </Grid>
              </Box>
            </Paper>
          
          <p>
            I am versed in the following modern languages, libraries and
            frameworks used to create full stack web applications:
          </p>
          <Grid container justify="center">
            <Grid className={classes.list} item xs={4}>
            <h3 className={classes.listHeading}>Front End</h3>
              <ul>
                <li>React</li>
                <li>Vue</li>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Vanilla Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Semantic UI</li>
              </ul>
            </Grid>
            <Grid className={classes.list} item xs={4}>
            <h3 className={classes.listHeading}>Back End</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Django</li>
                <li>Python</li>
              </ul>
            </Grid>
          </Grid>

          <p>
            In addition to to the above, I have experience in many other
            technologies including EJS, AutoLisp, Visual Basic For
            Applications, C and C++.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Skills);
