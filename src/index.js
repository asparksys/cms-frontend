import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <h1
    style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    alp<span style={{ color: '#E63946' }}>ine.</span>
  </h1>
)

ReactDOM.render(<center>{App()}</center>, document.getElementById('root'))
