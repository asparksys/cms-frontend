import React from 'react';

import {Grid, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MinuteProfile from './MinuteProfile';
import MinuteDiscussion from './MinuteDiscussion';
import MinuteMember from './MinuteMember';


const useStyles = makeStyles({
    avatar: {
        height: 100,
        width:100
    },
    grid:{
        minHeight:'100vh',
        boxShadow: '-5px 5px 5px 0 rgba(0, 0, 0, 0.1)'
    },
    grid2:{
        minHeight:'100vh',
        boxShadow: '-7px 5px 7px 0 rgba(0, 0, 0, 0.16)'
    }
  })


const Minute = () => {
    const classes = useStyles()
    return(
        <div>
            <Box p={3}>

            <Grid container>

                <Grid item 
                    xs={3}
                    justify="center"
                    alignItems="center"
                  >
                    <MinuteProfile />
                   
                </Grid>
                <Grid item xs={3} className={classes.grid}>

                <MinuteMember />
                  
                </Grid>

                <Grid item xs={6} className={classes.grid2}>
                <MinuteDiscussion />
                </Grid>

            </Grid>
            </Box>

        </div>
    )
}

export default Minute;