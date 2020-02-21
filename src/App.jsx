import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import { Home } from './components'

function App() {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
