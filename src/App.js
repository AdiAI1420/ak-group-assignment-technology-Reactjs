import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Pricing from './pages/Pricing/Pricing'
import Services from './pages/Services/Services'

const App = () => {
  return (
<>

<Navbar />
<Home />
<Pricing />

<Services />
<Footer />
</>
  )
}

export default App