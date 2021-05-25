import React from 'react';

import {Avatar} from '@material-ui/core'
import {Grid, Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MeetingNav from './MinuteNav'
import NumberTitle from './NumberTitle'

import rtrLogo from '/public/images/rotract.png'
 

const useStyles = makeStyles({
    avatar: {
        height: 100,
        width:100
    }
  })


const Minute = () => {
    const classes = useStyles()
    return(
        <div>
            <Box p={3}>

            <MeetingNav />
            <Grid container>

                <Grid item xs={3}>
                    <Box
                        p={3}
                        alignItems='center'
                    >
                        <Avatar src={rtrLogo} className={classes.avatar} />


                    </Box>
                    <Grid container>

                        <NumberTitle value='11' name='Members'/>
                        <NumberTitle value='12' name='Tasks'/>
                        <NumberTitle value='1' name='Club'/>
                    
                    </Grid>

                    <Typography
                      variant='h5'
                      component='h5'
                      >
                        <Box>
                            Key points
                        </Box>
                    </Typography>

                    <Typography>
                        <Box>
                            Powered By: Aspark Systems
                        </Box>
                        <Box>
                            Prepared By: Leo Shyam hari
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                                     
                </Grid>

                <Grid item xs={6}>

                </Grid>

            </Grid>
            </Box>

        </div>
    )
}

export default Minute;