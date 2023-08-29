import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from './pages/Dashboard';
import Confirmation from './pages/Confirmation';
import Otp from './pages/Otp';
import Card from './components/Card/Card';
import AccDetails from './components/Transfers/AccDetails';
import Settings from './components/Settings/Settings';
import Analytics from './components/Analytics/Analytics';
import Report from './components/Report/Report';
import Payments from './components/Payments/Payments';
import Transfer from './pages/Transfer';



const App = () => {

  return (
    <div className="bg-white w-full overflow-hidden">
          <Router>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/signin' element={<SignIn />}></Route>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/confirm' element={<Confirmation />}></Route>
              <Route path='/otp' element={<Otp />}></Route>
              <Route path='*' element={<Navigate to="/"  />}></Route>

              <Route path='/card' element={<Card />}></Route>
              <Route path='/transfer' element={<Transfer />}></Route>
              <Route path='/setting' element={<Settings />}></Route>
              <Route path='/analytics' element={<Analytics /> }></Route>
              <Route path='/payment' element={<Payments />}></Route>
              <Route path='/report' element={<Report /> }></Route>
            </Routes>
          </Router>
    </div>
  )
}

export default App
