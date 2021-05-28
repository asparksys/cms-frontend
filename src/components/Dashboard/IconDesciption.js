import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Paper } from '@material-ui/core'

const iconDesc = makeStyles((theme) => ({
	icon: {
		fontSize: 50,
		paddingTop: 10,
		paddingBottom: 5,
	},
}))

const IconDescription = (props) => {
	const classes = iconDesc()
	return (
		<div>
			<Paper elevation={3}>
				<Box align="center" p={1} mt={2}>
					{props.icon}
					<Typography variant="h5" compnent="h5">
						{props.name}
					</Typography>
					<Typography variant="h2" compnent="h2">
						{props.value}
					</Typography>
				</Box>
			</Paper>
		</div>
	)
}

export default IconDescription
