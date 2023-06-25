import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"



const App = () => {

  return (
    <div className="bg-white w-full overflow-hidden">
          <Router>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/signin' element={<SignIn />}></Route>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </Router>
    </div>
  )
}

export default App
