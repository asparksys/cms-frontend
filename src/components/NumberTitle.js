import React from 'react'

import { Box, Grid, Typography } from '@material-ui/core'

const NumberTitle = (props) => {
    return(
       <div>
           <Grid item xs={3}>

               <Box p={1}>
                   <Typography 
                     variant='h3'
                     component='h3'
                     >
                    {props.value}

                   </Typography>
                   <Typography
                     variant='body1'
                     component='body1'
                   > 
                    {props.name}
                   </Typography>
               </Box>

           </Grid>
       </div>
    )
}

export default NumberTitle