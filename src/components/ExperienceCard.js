import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Box, CardActions } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 300,
    background: "#282828",
    color: "rgb(175, 175, 175)",
    boxShadow: "2px 2px 8px black",
    marginBottom: '48px',
  },
  header: {
      width: '100%',
      paddingBottom: '16px',
      marginBottom: '16px',
      borderBottom: "1px solid #656565",
      [theme.breakpoints.down('xs')]:{
          flexDirection: 'column',
          alignItems: 'center'
      }
  },
  positionInfo: {
    margin: "0 0 0 15px",
      flexGrow: '1',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]:{
        flexDirection: 'column',
        alignItems: 'center'
    }
  },
  logo: {
    maxWidth: "100px",
    maxHeight: "100px",
    background: 'white',
    padding: '8px',
    borderRadius: '5%'
  },
  company: {

    fontWeight: "300"
  },
  role: {
      justifySelf: 'flex-end',
    margin: "5px 0"
  },

  cardFooter: {
      padding: '16px',
      fontSize: '14px',
      backgroundColor: '#333333'
  }
}));

const ExperienceCard = ({ logo, company, role, description, tasks, durationFrom, durationTo, location}) => {
  const classes = useStyles();

    let taskItems = tasks ?
    tasks.map((task, idx) => <li key={idx}>{task}</li>)
    : null

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.header} display="flex" justifyContent="space-between">
            <img className={classes.logo} src={logo} alt="Power Line Design" />
          <Box className={classes.positionInfo} display="flex" justifyContent="space-between" alignItems="center">
          <Typography className={classes.company} variant="h5" component="h2">
              {company}
            </Typography>
            <Typography className={classes.role} variant="body1" component="h2">
              {role}
            </Typography>
          </Box>
        </Box>

        <div className={classes.divider}></div>
        <Typography variant="body1" component="p">
          <em>{description}</em>
        </Typography>
        <Typography  variant="body1" component="div">
          {tasks && <ul>
              {taskItems}
          </ul>}
        </Typography>
        
      </CardContent>
      <CardActions className={classes.cardFooter}>
            {durationFrom} - {durationTo} | {location}
        </CardActions>
    </Card>
  );
};

export default ExperienceCard;
