import React from 'react'
import { Typography, Box, Grid, Button, Paper, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { InsertComment } from '@material-ui/icons'

const meetingStyle = makeStyles({
	icon: {
		fontSize: 60,
		paddingTop: 20,
		paddingBottom: 20,
	},
	iconButton: {
		padding: 0,
	},
})

const Meeting = () => {
	const classes = meetingStyle()

	return (
		<Grid item xs={4}>
			<InsertComment className={classes.icon} />
			<Typography variant="subtitle1">12 May, 2021</Typography>

			<Typography varinat="h2" component="h2">
				Meeting Log 1
			</Typography>
		</Grid>
	)
}

export default Meeting
