import React from "react";
import Banner from "../components/Banner";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    //   maxWidth: 345,
    minWidth: '200px',
    background: "#282828",
    color: "rgb(175, 175, 175)",
    boxShadow: '2px 2px 8px black'
  }
});

export default function Education() {
  const classes = useStyles();
  return (
    <div>
      <Banner title={"Education"} color={"#EC452D"} />
      <div className="container content">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6} xl={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  University of Wollongong
                </Typography>
                <Typography variant="h6" component="p">
                  Wollongong, NSW
                </Typography>
                <Typography variant="h6" component="p">
                  Bachelor of Engineering (Electrical)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
