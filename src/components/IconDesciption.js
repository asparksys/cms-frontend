import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Paper } from '@material-ui/core';
import { People, Message } from '@material-ui/icons';


const iconDesc = makeStyles((theme) => ({
    icon:{
      fontSize: 60,
      paddingTop: 20,
      paddingBottom: 20,
  },
  }));


const IconDescription = (props)  => {
    const classes = iconDesc()
    console.log('one')
    return (
        <div>
        <Paper elevation={3}>
            <Box 
                align='center'
                p={2}
                >
                    {props.icon}
            <Typography variant='h5' compnent='h5'>
                {props.name}
            </Typography>
            <Typography variant='h2' compnent='h2'>
                {props.value}
            </Typography>
            </Box>
        </Paper>
        </div>
    )
}


export default IconDescription;