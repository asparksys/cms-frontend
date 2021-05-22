import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Avatar, Grid } from '@material-ui/core';
import rtr_logo from '/public/images/rotract.png'
import Member from './Member';

const clubCss = makeStyles((theme) => ({
    avatar:{
        height:100,
        width:100
      },
    mainBackground:{
        background: 'rgba(255, 255, 255, 0.6)',
        minHeight: '100vh',
        },
  }));


const Club = (props)  => {
    const classes = clubCss()
    return (
        <Box py={20} px={2} ml={2} className={classes.mainBackground}>
        <Grid container>

            <Grid item xs={3}>   
                <center>
                <Avatar alt="Remy Sharp" src={rtr_logo} className={classes.avatar}/>
                </center>
            </Grid>

            <Grid item xs={9}>
                <Typography
                    variant="h5" 
                    component="h5"
                >
                    <Box mt={2} >
                    Leo Club of Kathmandu Samakhusi

                    </Box>
                </Typography>   
                <Typography
                    variant="overline" 
                    component="overline"
                >
                    <Box >
                    info@hello.com

                    </Box>
                </Typography>
            </Grid>
        </Grid>
        
        <Typography
            variant="h2" 
            component="h2"
            >
            <Box 
                pt={12}
                px={2}
                fontWeight="fontWeightBold"
            >
            Members

            </Box>
        </Typography>
        <Box 
                px={2}
            >
            <Member name='Ram singh' position='President' />
            <Member name='Shyam singh' position='Vice President' />
        </Box>

        </Box>

    )
}

export default Club;
