import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(4),
		},
	},
	tab: {
		'& > ul': {
			justifyContent: 'center',
		},
	},
}))

const CustomPagination = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Pagination className={classes.tab} count={10} color="primary" />
		</div>
	)
}

export default CustomPagination
