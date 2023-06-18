import Nav from './components/Nav'
import Header from './components/Header'
import Services from './components/Services'
import StandOut from './components/StandOut'
import Mission from './components/Mission'
import Business from './components/Business'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

// test
import Test from './test/Test'

const App = () => {

  return (
    <div className="bg-white w-full overflow-hidden">
      <Nav />
       {/* <Header /> */}
      <Services />
      <StandOut />
      <Mission />
      <Business /> 
      <Testimonials />
      <Stats />
      <CTA />
      <Footer /> 
    </div>
  )
}

export default App
