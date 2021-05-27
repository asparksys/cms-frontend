import React from 'react'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles({
	root: {
		width: '100%',
		display: 'inline-block',
	},
	title: {
		fontSize: 14,
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
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</CardContent>
			<CardActions>
				<Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
					<Skeleton width="25%" />
					<IconButton color="secondary" aria-label="preview">
						<VisibilityIcon />
					</IconButton>
				</Box>
			</CardActions>
		</Card>
	)
}

export default MeetingCard
