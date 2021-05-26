import React from 'react';

import {Grid, Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {SupervisedUserCircle} from '@material-ui/icons'


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
        boxShadow: '-5px 0 0 0 rgba(0, 0, 0, 0.1), -5px 0 0 0 rgba(0, 0, 0, 0.1)'
    },
    grid2:{
        minHeight:'100vh',
        boxShadow: '-7px 0 0 0 rgba(0, 0, 0, 0.1), -7px 0 0 0 rgba(0, 0, 0, 0.1)'
    }
    
  })

const MinuteMember = () => {
    const classes = useStyles()

    return(
        <div>
            <div className={classes.main}>

            <Grid container>
                        <Grid item xs={2}>
                            <Box pl={1}>
                                <SupervisedUserCircle className={classes.icon} />
                            </Box>

                        </Grid>
                        <Grid item xs={10}>
                        <Typography variant='h5' component='h5'>
                        <Box fontWeight='bold' pt={1} className={classes.header}>
                            Members
                            </Box>
                        </Typography>
                        </Grid>
                    </Grid>
                    </div>
                    <hr />


        <Box p={2}>
            <Typography>1. One</Typography>    
            <Typography>2. Two</Typography>    
            <Typography>3. Three</Typography>    

        </Box>
    </div>

    )
}

export default MinuteMember