import React from 'react'
import { Typography, Box, Grid, Button, Paper, Avatar } from '@material-ui/core';
import Navigation from './Navigation';
import { makeStyles } from '@material-ui/core/styles';
import rtr_logo from '/public/images/rotract.png'
import { People, Message } from '@material-ui/icons';
import Meeting from './Meeting';
import IconDescription from './IconDesciption';
import Club from './Club';


const dashboardStyle = makeStyles((theme) => ({
  mainBackground:{
    background: 'rgba(242, 151, 39, 0.2)',
    },
  paperStyle:{
    borderRadius:50,
  },
  avatar:{
    height:100,
    width:100
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(30),
    },
  },
  icon:{
    fontSize: 60,
    paddingTop: 20,
    paddingBottom: 20,
},
}));


const DashboardView = () => {
  const classes = dashboardStyle()

  return (
    <div>
      <Grid container className={classes.mainBackground}>
        <Grid item xs={1}>
          <Navigation />
        </Grid>

        <Grid item xs={11}>

          <Grid container>
            <Grid item xs={8}>
              <Box 
                align='right' 
                pt={5}
                pr={2}
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

                <Typography
                   variant="h2" 
                   component="h2"
                 >
                   <Box 
                      mt={5}
                      fontWeight="fontWeightBold"
                  >
                   Club

                  </Box>
                  </Typography>
                  
                  <div className={classes.root}>

                  <IconDescription name='Meeting' value='21' icon={<Message className={classes.icon}/>}/>      
                  <IconDescription name='Members' value='22' icon={<People className={classes.icon}/>} />      

                  </div>


                  <Typography
                   variant="h2" 
                   component="h2"
                 >
                   <Box 
                      mt={3}
                      fontWeight="fontWeightBold"
                  >
                   Minutes 

                  </Box>
                  </Typography>
                  <Grid container>
                  <Meeting title='Meeting 1' date='May 10, 2021'/>
                  <Meeting title='Meeting 2' date='May 12, 2021'/>
                  </Grid>
                 

            </Grid>

            <Grid item xs={4}>

            <Club />
            </Grid>

          </Grid>

        </Grid>

      </Grid>
    </div>
  )
}

export default DashboardView
