import React from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const numTitle = makeStyles({
    box:{
        boxShadow: '0 -5px 0 0 rgba(191, 109, 36, 1), 0 0 0 0 rgba(0, 0, 0, 0.1)',
        width:'80px',
    }
}
)

const NumberTitle = (props) => {
    const classes = numTitle()
    return(
       <div>
           <center>

           <Box mt={3} p={1} className={classes.box}>
                   <Typography 
                     variant='h3'
                     component='h3'
                     >
                    <center>
                    {props.value}
                </center>
                   </Typography>
                   <Typography
                     variant='body1'
                     component='body1'
                   > 
                    <center>
                    {props.name}
                    </center>

                   </Typography>
               </Box>
               </center>


       </div>
    )
}

export default NumberTitle