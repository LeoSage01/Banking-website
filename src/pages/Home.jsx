import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Header from '../components/Header'
import Services from '../components/Services'
import StandOut from '../components/StandOut'
import Mission from '../components/Mission'
import Business from '../components/Business'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import PuffLoader from "react-spinners/PuffLoader";



const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>

      {
        loading ?

          <div className="bg-primary h-screen w-screen flex justify-center pt-60">
            <PuffLoader color={"#fff"} loading={loading} size={250} />
          </div>

          :
          
          <div>
            <Nav />
            <Header />
            <Services />
            <StandOut />
            <Mission />
            <Business />
            <Testimonials />
            <Stats />
            <CTA />
            <Footer />
          </div>
      }

    </div>
  );
}

export default Home;