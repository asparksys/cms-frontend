import React from 'react'
import { Typography, Box, Grid, Button, Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InsertComment } from '@material-ui/icons';


const meetingStyle = makeStyles({
    icon:{
        fontSize: 60,
        paddingTop: 20,
        paddingBottom: 20,
    },
    iconButton:{
        padding:0,
    }
  })


const Meeting = (props) => {
    const classes = meetingStyle()

    return(
                <Grid item xs={4}>
                <Grid container>
                    <Grid item xs={2}>
                    <InsertComment  className={classes.icon} />

                    </Grid>
                    <Grid item xs={10}>
                        <Box pt={2}>
                        <Typography 
                        variant='h6'
                        component='h6'>
                    {props.date}

                    </Typography>
                    
                    <Typography
                        variant='h4'
                        component='h4'
                    >
                        {props.title}
                    </Typography>
                        </Box>
                  
                    </Grid>
                </Grid>
                   
                </Grid>
          
           
    )
}

export default Meeting;