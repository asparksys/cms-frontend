import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './Colors'
import App from './App.js'

ReactDOM.render(
	<ThemeProvider theme={theme}>{App()}</ThemeProvider>,
	document.getElementById('root')
)
