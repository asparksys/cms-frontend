import React from 'react'
import { Typography, Box, Grid, Button, Paper, Avatar } from '@material-ui/core';
import Navigation from './Navigation';
import { makeStyles } from '@material-ui/core/styles';
import rtr_logo from '/public/images/rotract.png'

const dashboardStyle = makeStyles({
  mainBackground:{
    background: 'rgba(242, 151, 39, 0.2)',
    },
  paperStyle:{
    borderRadius:50,
  },
  avatar:{
    height:100,
    width:100
  }
})
const DashboardView = () => {
  const classes = dashboardStyle()

  return (
    <div>
      <Grid container className={classes.mainBackground}>
        <Grid item xs={1}>
          <Navigation />
        </Grid>

        <Grid item xs={11}>
          <Box mt={5}>

          <Grid container>
            <Grid item xs={8}>
              <Box 
                align='right' 
              >
                <Button 
                  name="add"
                  variant="contained"
                  size="large"
                  align='right'
                >
                  Add Minute
                </Button>
              </Box>
             
                <Typography 
                  variant="h2" 
                  component="h2"
                >
                <Paper elevation={3}  className={classes.borderRadius}>
                <Box 
                        p={5}
                        mt={5}
                        fontWeight="fontWeightBold"
                        >
                  <Grid container>
                    <Grid item xs={10}>
                       
                        Good morning! Leo Abc Def
                        <Typography variant="h5" gutterBottom color="textSecondary">
                        Nice day to have a meeting.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <center>
                      <Avatar alt="Remy Sharp" src={rtr_logo} className={classes.avatar}/>
                      </center>

                    </Grid>
                  </Grid>
                  </Box>

                  </Paper>
                </Typography>
            </Grid>

            <Grid item xs={4}>


            </Grid>

          </Grid>
          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default DashboardView
