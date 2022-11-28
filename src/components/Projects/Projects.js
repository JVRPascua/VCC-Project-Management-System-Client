import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProjects } from "../../actions/projects";
import FormProject from "../Form/FormProject.js";
import ProjectList from "./ProjectList.js";
import useStyles from "./styles.js";

const Projects = () => {
    const [currentId, setCurrentId] = useState(null); 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProjects());
    }, [currentId, dispatch])

    return ( 
      <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="left">Projects</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" justifyContent="flex-end" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                  <ProjectList setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                  <FormProject currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
     );
}
 
export default Projects;