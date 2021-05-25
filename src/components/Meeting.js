import React from 'react'
import { Typography, Box, Grid, Button, Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InsertComment, InsertDriveFile } from '@material-ui/icons';


const meetingStyle = makeStyles({
    icon:{
        fontSize: 65,
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
                    <InsertDriveFile  className={classes.icon} />

                    </Grid>
                    <Grid item xs={10}>
                        <Box 
                          pt={3}
                          px={1} >
                        <Typography 
                        variant='subtitle2'
                        component='subtitle2'>
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