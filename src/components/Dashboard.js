import React from 'react'
import { Typography, Box, Grid, Button, Paper, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { People, Message } from '@material-ui/icons'
import Navigation from './Navigation'
import Meeting from './Meeting'
import IconDescription from './IconDesciption'
import Club from './Club'

import rtrLogo from '/public/images/rotract.png'

const dashboardStyle = makeStyles((theme) => ({
	mainBackground: {
		background: 'rgba(242, 151, 39, 0.2)',
	},
	paperStyle: {
		borderRadius: 50,
	},
	avatar: {
		height: 80,
		width: 80,
	},
	title: {
		margin: '10px',
		[theme.breakpoints.up('md')]: {
			'& > *': {
				margin: 'inherit',
			},
		},
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(20),
			height: theme.spacing(30),
		},
		[theme.breakpoints.down('md')]: {
			'& > *': {
				margin: theme.spacing(1),
				width: theme.spacing(20),
				height: theme.spacing(30),
			},
		},
	},
	icon: {
		fontSize: 60,
		paddingTop: 20,
		paddingBottom: 20,
	},
}))

const DashboardView = () => {
	const classes = dashboardStyle()

	return (
		<div>
			<Grid container className={classes.mainBackground}>
				<Grid item md={1} sm={0}>
					<Navigation />
				</Grid>

				<Grid item md={11} sm={12}>
					<Grid container>
						<Grid item md={8} sm={12}>
							<Box align="right" pt={3} pr={2}>
								<Button name="add" variant="contained" size="large" align="right">
									Add Minute
								</Button>
							</Box>

							<Typography variant="h4" component="h4">
								<Paper elevation={3} className={classes.borderRadius}>
									<Box p={5} mt={3} fontWeight="fontWeightBold">
										<Grid container>
											<Grid item xs={10}>
												Good morning! Leo Abc Def
												<Typography variant="h5" gutterBottom color="textSecondary">
													Nice day to have a meeting.
												</Typography>
											</Grid>
											<Grid item xs={2}>
												<center>
													<Avatar alt="Remy Sharp" src={rtrLogo} className={classes.avatar} />
												</center>
											</Grid>
										</Grid>
									</Box>
								</Paper>
							</Typography>

							<Typography variant="h4" component="h4">
								<Box mt={3} fontWeight="fontWeightBold" className={classes.title}>
									Club
								</Box>
							</Typography>

							<div className={classes.root}>
								<IconDescription
									name="Meeting"
									value="21"
									icon={<Message className={classes.icon} />}
								/>
								<IconDescription
									name="Members"
									value="22"
									icon={<People className={classes.icon} />}
								/>
							</div>

							<Typography variant="h4" component="h4">
								<Box mt={3} fontWeight="fontWeightBold" className={classes.title}>
									Minutes
								</Box>
							</Typography>
							<Grid container>
								<Meeting title="Meeting 1" date="May 10, 2021" />
								<Meeting title="Meeting 2" date="May 12, 2021" />
							</Grid>
						</Grid>

						<Grid item md={4} sm={12}>
							<Club />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default DashboardView
