import React from 'react'
import { Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { InsertDriveFile } from '@material-ui/icons'

const meetingStyle = makeStyles({
	icon: {
		fontSize: 65,
		paddingTop: 20,
		paddingBottom: 20,
	},
	iconButton: {
		padding: 0,
	},
})

const Meeting = (props) => {
	const classes = meetingStyle()

	return (
		<Grid item md={4} sm={12}>
			<Grid container>
				<Grid item md={2}>
					<InsertDriveFile className={classes.icon} />
				</Grid>
				<Grid item md={10}>
					<Box pt={3} px={2}>
						<Typography variant="body1" component="p">
							{props.date}
						</Typography>

						<Typography variant="h4" component="h4">
							{props.title}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Meeting
