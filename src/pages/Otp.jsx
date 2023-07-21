import { PuffLoader } from "react-spinners";
import  { useState, useEffect } from 'react';
import Nav from "../components/Nav";
import OtpClearance from "../components/OtpClearance";
import Footer from "../components/Footer";


const Otp = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
    {
  loading ?

  <div className="bg-primary h-screen w-screen flex justify-center pt-60">
      <PuffLoader color={"#fff"} loading={loading} size={250} />
  </div>

  :
  <div>
  <Nav />
  <OtpClearance/>
  <Footer />
  </div>
}
  </>
  )
}

export default Otp