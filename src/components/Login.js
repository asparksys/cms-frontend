import React, { useState } from 'react'
import { Box, Grid, Typography, TextField, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import rtr_logo from '/public/images/rotract.png'
import leo_logo from '/public/images/leo.png'
import aama from '/public/images/aama.png'

const useStyles = makeStyles({
  leo: {
    background: '#F29727',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

const Login = () => {
  const classes = useStyles()

  // const [loginInput, setLoginInput] = useState({username:'',password:''});
  // const [loginStatus, setLoginStatus] = useState(flase);

  return (
    <>
    <Box mt={5}>
    <img src={rtr_logo} height='100px'/>
      <img src={leo_logo} height='100px'/>
    </Box>
    

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="h2" component="h2">
            <Box fontWeight="fontWeightBold" mt={7}>
              Login.
            </Box>
          </Typography>
          <Typography variant="h5" gutterBottom color="textSecondary">
            Login with your credentials
          </Typography>
          <form>
            <Box mt={7}>
              <Box mt={3}>
                <TextField
                  id="standard"
                  placeholder="Username"
                  fullWidth
                  name="username"
                  required
                />
              </Box>

              <Box mt={3}>
                <TextField
                  id="standard"
                  placeholder="Password"
                  type="password"
                  fullWidth
                  name="password"
                  required
                />
              </Box>

              <Box mt={3}>
                <Button
                  name="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  className={classes.leo}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </form>

          <Typography variant="h6" gutterBottom color="textSecondary" align="center">
            <Box mt={2}>Forgot Password?</Box>
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="textSecondary" align="center">
            <Box mt={5}>
              Don’t have an account? Register <span>here.</span>
            </Box>
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h5" component="h5" color="textSecondary" align="center">
            <Box mt={7}>Nice to see you again</Box>
          </Typography>

          <Typography variant="h2" component="h2" align="center">
            <Box fontWeight="fontWeightBold" mt={1}>
              Welcome Back!
            </Box>
          </Typography>
            <center>
                      <img src={aama} height='500px'/>

            </center>
          <Typography variant="overline" component="h2" align="center">
            <Box mt={1}>
              Powered by: <span>Aspark System</span>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
