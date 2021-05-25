import React from 'react'
import { Box, Grid, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import rtrLogo from '/public/images/rotract.png'

const clubCss = makeStyles((theme) => ({
    avatar:{
        height:80,
        width:80
      },
  }));

const Member = (props) => {
    const classes = clubCss()

    return(
        <Box pt={2}>

        <Grid container>
            <Grid item xs={2}>
                <Avatar alt="Remy Sharp" src={rtrLogo} className={classes.avatar}/>
            </Grid>
            <Grid item xs={10}>
                <Typography variant='h6' component='h6'> 
                     <Box
                      pl={2}
                      pt={1}

                     >
                       {props.name}
                    </Box>
                </Typography>

                <Typography variant='h5' component='h5'>
                    <Box
                    fontWeight="fontWeightBold"
                    // pt={1}
                    pl={2}  
                    >
                    {props.position}
                    </Box>
                </Typography>
            </Grid>
        </Grid>
        </Box>

    )
}

export default Member;
