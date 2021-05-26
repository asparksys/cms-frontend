import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Paper, Avatar, Grid } from '@material-ui/core'
import rtr_logo from '/public/images/rotract.png'

const clubCss = makeStyles((theme) => ({
	avatar: {
		height: 100,
		width: 100,
	},
}))

const Club = (props) => {
	const classes = clubCss()
	return (
		<Box mt={14} mx={2}>
			<Grid container>
				<Grid item xs={4}>
					<center>
						<Avatar alt="Remy Sharp" src={rtr_logo} className={classes.avatar} />
					</center>
				</Grid>

				<Grid item xs={8}>
					<Typography />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Club
