import React, { useState, useEffect } from 'react';
import IMG from "../img/ec.jpeg"
import PuffLoader from "react-spinners/PuffLoader";
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const About = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div >

            {
                loading ?

                    <div className="bg-primary h-screen w-screen flex justify-center pt-60">
                        <PuffLoader color={"#fff"} loading={loading} size={250} />
                    </div>

                    :

                    <div className="">
                        <Nav />
                        <section className="p-4">
                            <h2 className="font-extrabold text-center text-4xl my-5">About Us</h2>
                            <div className="md:p-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 bg-primary p-4 mb-6 rounded-xl">

                                    <div className="text-center p-4 flex-col text-white flex justify-around">
                                        <h2 className="font-extrabold text-3xl mb-4">Our Purpose and Strategy</h2>
                                        <h4 className="font-extrabold text-xl text-black mb-4">
                                            Our expertise, products and services make us a bank. Our people, purpose, values and culture make us NOX.
                                        </h4>
                                    </div>

                                    <img className="w-full rounded-xl " src={IMG} alt="" />
                                </div>


                                <h4 className="font-bold text-xl text-primary">Smart Banking</h4>

                                <h3 className="font-bold text-2xl mt-4 mb-2">Our purpose</h3>
                                <p className="mb-4">
                                    Our Purpose is to shape a world where people and communities thrive. It drives everything we do at NOX, infuses our strategy and is fundamental to shareholder returns.
                                </p>

                                <h3 className="font-bold text-2xl mt-4 mb-2">Our strategy</h3>
                                <p className="mb-4">
                                    We bring our Purpose to life through our Strategy: to improve the financial wellbeing and sustainability of customers by providing connected, relevant and efficient services, tools and insights, directly and in partnership with others.
                                </p>

                                <h3 className="font-bold text-2xl mt-4 mb-2">The Bank we're building</h3>
                                <p className="mb-3">
                                    We know, from studying organisations globally, that companies with a clear strategy linked to their purpose outperform, over the long term, in terms of returns to shareholders, contribution to society and value to their customers – and the engagement of their staff.
                                </p>

                                <p className="mb-3">
                                    "Over the last five years, we have made great strides, significantly simplifying the bank well ahead of our peers, enduring a once in a century global pandemic and laid the foundations for growth.”
                                </p>

                                <p className="mb-3">
                                    By building the financial wellbeing and sustainability of our customers we will have a better reputation, a more engaged team, acquire customers at a lower cost, grow loyalty, generate better financial outcomes – and deliver more capital to reinvest in the business and continue to improve customers’ lives.
                                </p>

                                <p className="mb-4">
                                    It’s a virtuous cycle, captured in this value wheel chart, and the essential philosophy of the Bank We’re Building. The growth in value of each of our businesses, in Australia, New Zealand or Institutional, can be understood in terms of this cycle.
                                </p>

                                <p className="mb-3">
                                    To succeed we must employ people committed to our purpose who listen, learn and adapt. We need to equip them with the best tools and insights. We need to focus on those few things that really improve the financial wellbeing and sustainability of our customers.
                                </p>
                            </div>

                            <div className="">

                            </div>
                        </section>
                        <Footer />
                    </div>
            }

        </div>

    );
}

export default About;