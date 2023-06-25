import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md'
// import { BsWhatsapp } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef()

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_8vn6bj5', 'template_0qjqlsx', form.current, '_nlc3b1GlLi64zZSj')

    //     e.target.reset()
    // };

    return (
        <section className="p-4">
            <h2 className="font-extrabold text-center text-2xl my-5">Contact Us</h2>

            <div className="p-2">

                <div className="p-6 rounded-2xl grid grid-cols-1 space-y-3 sm:grid-cols-3 sm:space-x-5 sm:space-y-0 text-center shadow-sm">
                    <article className='bg-white text-black hover:bg-primary hover:text-white p-8 rounded-xl shadow-xl'>
                        <ImLocation className='text-lg' />
                        <h4 className='text-xl'>Our Location:</h4>
                        <h5>121 King Melbourne, Australia </h5>

                    </article>
                    <article className="bg-primary p-8 rounded-xl shadow-xl hover:bg-white hover:text-black">
                        <MdOutlineEmail className='text-lg' />
                        <h4 className='text-xl'>Email Us</h4>
                        <a href="mailto:nox@gmail.com" target="_blank">NOX@gmail.com</a>
                    </article>

                    {/* <article className="contact_option">
                            <BsWhatsapp className='' />
                            <h4>Whatsapp</h4>
                            <h5>+123 456 789</h5>
                            <a href="https://wa.me/{number}?text=urlencodedtext" target="_blank">Send a messsage</a>
                        </article> */}

                    <article className='bg-white text-black p-8 rounded-xl shadow-xl hover:bg-primary hover:text-white'>
                        <FaPhoneAlt className='text-lg' />
                        <h4 className='text-xl'>Call Us</h4>
                        <a href="tel:61 576 234532">(+61) 576 234532</a>
                    </article>
                </div>


                {/* <form ref={form} onSubmit={sendEmail}> */}
                <div className="py-8 max-w-md mx-auto">
                    <img src="" alt="" />
                    <h3 className='font-extrabold text-center'>Send Us A Message</h3>

                    <form ref={form} className=" bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="7"
                                placeholder="Enter your message"
                                required
                            />
                        </div>
                        <button
                            className="bg-primary text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            
                        >
                            Submit
                        </button>
                    </form>

                </div>

            </div >
        </section >
    );
}

export default Contact;