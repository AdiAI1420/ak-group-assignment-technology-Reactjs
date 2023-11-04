import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Pricing from './pages/Pricing/Pricing'


import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact'


import Coursepage from './pages/Coursepage/Coursepage'

const App = () => {
  return (
<>

<BrowserRouter>
<Navbar />
<Routes>

<Route path='/'  element={<Home/>}/>

<Route path='/pricing'  element={<Pricing/>}/>
<Route path='/contact'  element={<Contact/>}/>
<Route path='/Coursepage'  element={<Coursepage/>}/>



</Routes>
<Footer />
</BrowserRouter>
</>
  )
}

export default App