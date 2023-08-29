import { PuffLoader } from "react-spinners";
import  { useState, useEffect } from 'react';
import Nav from "../components/Nav";

import Footer from "../components/Footer";
import SignupMain from "../components/SignupMain";


const SignUp = () => {
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
        <div className="h-full">
        <Nav />
        <SignupMain/>
        <Footer />
        </div>
      }
        </>
    );
}

export default SignUp;