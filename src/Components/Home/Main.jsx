import React from 'react'
import Header from './Header'
import FirstSection from './FirstSection'
import Services from './Services'
import ThirdSection from './ThirdSection'
import Contact from './Contact'
import './Home.css'
const Main = () => {
  return (
        <div>
            <Header/>
            <FirstSection/>
            <Services/>
            <ThirdSection/>
            <Contact/>
        </div>
  )
}
export default Main;