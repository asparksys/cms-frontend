import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Avatar, Grid } from '@material-ui/core'
import rtrLogo from '../assets/images/rotract.png'
import Member from './Member'

const clubCss = makeStyles((theme) => ({
	avatar: {
		height: 80,
		width: 80,
		[theme.breakpoints.down('md')]: {
			marginTop: '10px',
		},
	},
	mainBackground: {
		background: 'rgba(255, 255, 255, 0.6)',
		minHeight: '100vh',

		[theme.breakpoints.down('md')]: {
			marginTop: '10px',
			marginLeft: '0px',
			paddingTop: '20px',
		},
	},
	header: {
		[theme.breakpoints.down('md')]: {
			paddingTop: '40px',
		},
	},
}))

const Club = (props) => {
	const classes = clubCss()
	return (
		<Box pt={15} px={2} ml={2} className={classes.mainBackground}>
			<Grid container>
				<Grid item xs={3}>
					<center>
						<Avatar alt="Remy Sharp" src={rtrLogo} className={classes.avatar} />
					</center>
				</Grid>

				<Grid item xs={9}>
					<Typography variant="h6" component="h6">
						<Box mt={1}>Leo Club of Kathmandu Samakhusi</Box>
					</Typography>
					<Typography variant="body1" component="h5">
						<Box>
							<u>info@rotractclub.com</u>
						</Box>
					</Typography>
				</Grid>
			</Grid>

			<Typography variant="h4" component="h4">
				<Box pt={12} px={2} fontWeight="fontWeightBold" className={classes.header}>
					Members
				</Box>
			</Typography>
			<Box px={2}>
				<Member name="Ram singh" position="President" />
				<Member name="Shyam singh" position="Vice President" />
				<Member name="Ram singh" position="Secretary" />
				<Member name="Shyam singh" position="Treasurer" />
			</Box>
		</Box>
	)
}

export default Club
