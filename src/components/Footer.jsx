import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        // <footer className="bg-white shadow dark:bg-black ">
        //     <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        //         <div className="sm:flex sm:items-center sm:justify-between p-8 ">
        //             <a href="/" className="flex  items-center mb-4 sm:mb-0">
        //                 {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Logo" /> */}
        //                 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LOGO</span>
        //             </a>
        //             <p className="text-white">Lorem ipsum Fugit alias rerum aliquid.</p>

        //             <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        //                 <ul>
        //                     <p>About</p>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                 </ul>
        //                 <ul>
        //                     <p>About</p>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                 </ul>
        //                 <ul>
        //                     <p>About</p>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                     <li><a href="#" className="mr-4 hover:underline md:mr-6 ">About</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        //         <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        //     </div>
        // </footer>




        <footer className="bg-black mt-2">
            <div className=" p-8 grid grid-cols-2 gap-8 text-white">
                <div className="px-5">
                    <h2 className="mb-2 text-2xl font-bold">LOGO</h2>
                    <p className="text-xs ">Lorem ipsum dolor sit Laboriosam tempore libero animi architecto! Esse dolor aliquam </p>
                </div>
                <div className="text-gray-500 grid grid-cols-3 text-sm gap-4">
                    <ul className="space-y-2">
                        <p className="text-white font-bold mb-3">Product</p>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Newsletter</li>
                    </ul>
                    <ul className="space-y-2">
                        <p className="text-white font-bold  mb-3">Company</p>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Newsletter</li>
                    </ul>
                    <ul className="space-y-2">
                        <p className="text-white font-bold  mb-3">Resources</p>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>


            </div>

            <hr className="border-gray-500" />

            <div className="flex justify-between px-12 py-5">

                <p className="text-gray-500 text-sm">© 2023. All Rights Reserved.</p>

                <div className="flex space-x-8">
                    <BsInstagram className="text-white" />
                    <FaFacebookF className="text-white" />
                    <FaLinkedinIn className="text-white" />
                    <BsTwitter className="text-white" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;