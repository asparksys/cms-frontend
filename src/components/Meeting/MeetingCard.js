import React from 'react'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import VisibilityIcon from '@material-ui/icons/Visibility'

const useStyles = makeStyles({
	root: {
		width: '100%',
		display: 'inline-block',
	},
	title: {
		fontSize: 14,
		fontWeight: 'bolder',
	},
	pos: {
		fontWeight: 'bold',
		fontSize: '0.8em',
		paddingLeft: '8px',
	},
})

const MeetingCard = () => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textPrimary" gutterBottom>
					Meeting 1
				</Typography>
				<Typography variant="h5" component="h2">
					Agenda
				</Typography>
				<Typography variant="body2" component="p">
					Lorem ipsum doler it ola ola
				</Typography>
			</CardContent>
			<CardActions>
				<Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
					<Typography className={classes.pos} color="textSecondary">
						March 9, 2021
					</Typography>
					<IconButton color="secondary" aria-label="preview">
						<VisibilityIcon />
					</IconButton>
				</Box>
			</CardActions>
		</Card>
	)
}

export default MeetingCard
