import * as React from 'react'

import Nav from './Nav'
import Jumbotron from './Jumbotron'

function Template({ children, title }) {
  return (
    <>
      <Nav />
      <Jumbotron title={title} />
      <main id="content" role="main" style={{ padding: '0 15px' }}>
        {children}
      </main>
    </>
  )
}

export default Template
