import React from 'react'
import Homepage from './Components/HomePage/Homepage'
import Page2 from './Components/Page2/Page2'
import Footer from './Components/footer/Footer'
import Loader from './Components/loader/Loader'


const App = () => {
  return (
    <div>
      <Loader />
      <Homepage/>
      <Page2/>
      <Footer/>
    </div>
  )
}

export default App