import React from 'react';

import {Avatar} from '@material-ui/core'
import {Grid, Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import NumberTitle from './NumberTitle'

import rtrLogo from '/public/images/rotract.png'

const useStyles = makeStyles({
    main: {
        minHeight: '60px',
    },
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
    avatar: {
        height: 100,
        width:100
    },
    grid:{
        minHeight:'100vh',
        boxShadow: '-5px 0 0 0 rgba(0, 0, 0, 0.1)'
    },
    grid2:{
        minHeight:'100vh',
        boxShadow: '-7px 0 0 0 rgba(0, 0, 0, 0.1), -7px 0 0 0 rgba(0, 0, 0, 0.1)'
    },
    box:{
        boxShadow: '0 -5px 0 0 rgba(191, 109, 36, 1), 0 0 0 0 rgba(0, 0, 0, 0.1)',
    }
    
  })

const MinuteProfile = () => {
    const classes = useStyles()

    return(
        <div>
            <div className={classes.main}>
            <Typography variant='h5' component='h5' >
                        <Box fontWeight='bold' className={classes.header} >
                        Meeting Minute
                        </Box>
                    </Typography>
                    <Typography>
                        <Box>
                        Monday May 17, 2021 
                        </Box>
                    </Typography>
            </div>
            <hr />

    <center>
    <Box
        p={3}
        justifyContent="center"
       >
        <Avatar src={rtrLogo} className={classes.avatar} />

    </Box>
        <Typography
         variant='h6'
         component='h6'
        >
            <Box fontWeight='bold' mb={5}> 
            Rotract/ Leo Club of Kathmandu
            </Box>
        </Typography>
</center>
     
    <Grid container >
        <Grid item xs={4}>
            <NumberTitle value='11' name='Members'/>
        </Grid>
        <Grid item xs={4}>
            <NumberTitle value='12' name='Tasks'/>
        </Grid>
        <Grid item xs={4}>
            <NumberTitle value='1' name='Club'/>
        </Grid>
    </Grid>

    <Typography
      variant='h5'
      component='h5'
      >
        <Box fontWeight='bold' mt={7} mr={2} p={1} className={classes.box}>
            Key points
        </Box>
      <Box pl={2}>
            <Typography>1 one</Typography>
            <Typography>1 one</Typography>
            <Typography>1 one</Typography>
        </Box>
       

    </Typography>

    <Typography>
        <Box pt={5}>
            Powered By: Aspark Systems
        </Box>
        <Box>
            Prepared By: <span className={classes.header}>
                 Leo Shyam hari </span>
        </Box>
    </Typography>
    </div>

    )
}

export default MinuteProfile