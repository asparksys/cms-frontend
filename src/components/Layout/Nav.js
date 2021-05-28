import React from 'react'

import Hidden from '@material-ui/core/Hidden'

import MobileNav from './MobileNav'
import Sidebar from './Sidebar'

const Nav = () => (
	<div>
		<Hidden smDown>
			<Sidebar />
		</Hidden>
		<Hidden mdUp>
			<MobileNav />
		</Hidden>
	</div>
)

export default Nav
