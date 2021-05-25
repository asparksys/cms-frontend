import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Avatar, Grid } from '@material-ui/core';
import rtrLogo from '/public/images/rotract.png'
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
                <Avatar alt="Remy Sharp" src={rtrLogo} className={classes.avatar}/>
                </center>
            </Grid>

            <Grid item xs={9}>
                <Typography
                    variant="h6" 
                    component="h6"
                >
                    <Box mt={2} >
                    Leo Club of Kathmandu Samakhusi

                    </Box>
                </Typography>   
                <Typography
                    variant="body1" 
                    component="h5"
                >
                    <Box >
                        <u>
                        info@rotractclub.com
                        </u>

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
            <Member name='Ram singh' position='Secretary' />
            <Member name='Shyam singh' position='Treasurer' />
        </Box>

        </Box>

    )
}

export default Club;
