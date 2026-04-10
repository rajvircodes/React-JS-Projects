import React, { Children } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAllJobs from './components/ViewAllJobs.jsx'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCard/>
      <JobListings/>  
      <ViewAllJobs/>
      
    </>
  )
}

export default App