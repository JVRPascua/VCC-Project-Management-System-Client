import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

const Dashboard = () => {
    return ( 
        <Container maxwidth="lg">
          <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Welcome to the Dashboard</Typography>
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>

                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>

    );
}
 
export default Dashboard;