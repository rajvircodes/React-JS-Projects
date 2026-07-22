import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter from here
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard.jsx';
import JobListings from './components/JobListings.jsx';
import ViewAllJobs from './components/ViewAllJobs.jsx';
import NewJob from './pages/NewJob.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeCard />
              <JobListings isHome={true} />
              <ViewAllJobs />
            </>
          }
        />
        <Route path="/jobs/:id" element={<NewJob />} />
          <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};

export default App;