import React from 'react'
import { Typography, Box, Paper } from '@material-ui/core'

const IconDescription = (props) => (
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

export default IconDescription
