import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton, Box } from '@material-ui/core'
import { Home, ExitToApp, Message } from '@material-ui/icons'

const dashboardStyle = makeStyles({
	sidebar: {
		background: '#732020',
		color: 'white',
		margin: 0,
		padding: 0,
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	icon: {
		fontSize: 40,
		paddingTop: 20,
		paddingBottom: 20,
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	iconButton: {
		padding: 0,
	},
})

const Navigation = () => {
	const classes = dashboardStyle()

	return (
		<div>
			<Box
				display={{ xs: 'none', sm: 'none', md: 'block' }}
				>

			<Grid container>
				<Grid item xs={4} lg={4} className={classes.sidebar} style={{ height: '100vh' }}>
					<center>
						<IconButton aria-label="home" color="inherit" className={classes.iconButton}>
							<Home className={classes.icon} />
						</IconButton>

						<IconButton aria-label="minutes" color="inherit" className={classes.iconButton}>
							<Message className={classes.icon} />
						</IconButton>

						<IconButton aria-label="logout" color="inherit" className={classes.iconButton}>
							<ExitToApp className={classes.icon} />
						</IconButton>
					</center>
				</Grid>
			</Grid>
			</Box>
		</div>
	)
}

export default Navigation
