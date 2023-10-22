import * as React from "react"
import Navbar from '../components/Navbar.js'
import Home from '../components/Home.js'
const IndexPage = () => {
  return (
   <main>

<Navbar/>
<Home/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
