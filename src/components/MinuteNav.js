import React from 'react'
import {Grid, Typography, Box} from '@material-ui/core'
import {SupervisedUserCircle, SpeakerNotes} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const minputeNavStyle = makeStyles((theme) => ({
    icon:{
      fontSize: 50,
      color: '#BF6D24',

  },
  header:{
      color: '#BF6D24',
  },
  division:{
    fontSize:30,
    border: 5,
  },
  }));

const MinuteNav = () => {
    const classes = minputeNavStyle()

    return(
        <div>
            <Grid container>

                <Grid item xs={3} className={classes.division}>
                    <Typography variant='h5' component='h5'>
                        <Box fontWeight='bold' className={classes.header} >
                        Meeting Minute
                        </Box>
                    </Typography>
                    <Typography>
                        <Box>
                        Monday May 17, 2021 
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={3} className={classes.division}>
                    <Grid container>
                        <Grid item xs={2}>
                         <SupervisedUserCircle className={classes.icon} />

                        </Grid>
                        <Grid item xs={10}>
                        <Typography variant='h5' component='h5'>
                        <Box fontWeight='bold' pt={1} className={classes.header}>
                            Members
                            </Box>
                        </Typography>
                        </Grid>
                    </Grid>
                   
                </Grid>
                <Grid item xs={6} className={classes.division}>
                    <Grid container>
                        <Grid item xs={1}>
                         <SpeakerNotes className={classes.icon} />

                        </Grid>
                        <Grid item xs={11} >
                        <Typography variant='h5' component='h5'>
                        <Box fontWeight='bold' pt={1} className={classes.header}>
                            Discussion
                            </Box>
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <hr />
        </div>
    )
}

export default MinuteNav;