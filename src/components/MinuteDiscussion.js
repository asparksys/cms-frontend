import React from 'react'

import { Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SpeakerNotes } from '@material-ui/icons'

const useStyles = makeStyles({
	main: {
		minHeight: '60px',
	},
	icon: {
		fontSize: 50,
		color: '#BF6D24',
	},
	header: {
		color: '#BF6D24',
	},
	division: {
		fontSize: 30,
		border: 5,
	},
	avatar: {
		height: 100,
		width: 100,
	},
	grid: {
		minHeight: '100vh',
		boxShadow: '-5px 0 0 0 rgba(0, 0, 0, 0.1), -5px 0 0 0 rgba(0, 0, 0, 0.1)',
	},
	grid2: {
		minHeight: '100vh',
		boxShadow: '-7px 0 0 0 rgba(0, 0, 0, 0.1), -7px 0 0 0 rgba(0, 0, 0, 0.1)',
	},
})

const MinuteDiscussion = () => {
	const classes = useStyles()

	return (
		<div>
			<div className={classes.main}>
				<Grid container>
					<Grid item xs={1}>
						<Box pl={1}>
							<SpeakerNotes className={classes.icon} />
						</Box>
					</Grid>
					<Grid item xs={11}>
						<Typography variant="h5" component="h5">
							<Box fontWeight="bold" pt={1} className={classes.header}>
								Discussion
							</Box>
						</Typography>
					</Grid>
				</Grid>
			</div>
			<hr />
			<Box p={2}>
				<Typography>
					What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type specimen
					book. It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
					release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</Typography>
			</Box>
		</div>
	)
}

export default MinuteDiscussion
