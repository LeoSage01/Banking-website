import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Logo from "../img/logo2.png"

const Footer = () => {
  return (
    <footer className="bg-black pb-2 b">
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
        <div className="">
          <img className="h-10 lg:h-12" src={Logo} alt="Logo" />
          <p className="text-xs mt-2">
            NOX is an easy to use application that helps you manage your finances
          </p>
        </div>
        <div className="text-gray-500 grid grid-cols-3 text-xs gap-4">
          <ul className="space-y-2">
            <p className="text-white font-bold mb-3">Product</p>
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
          <ul className="space-y-2">
            <p className="text-white font-bold mb-3">Company</p>
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
          <ul className="space-y-2">
            <p className="text-white font-bold mb-3">Resources</p>
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-500" />

      <div className="flex items-center flex-col justify-center sm:flex-row sm:justify-between px-5 py-5">

        <p className="text-gray-500 text-sm mb-5 md:mb-0">© 2023. All Rights Reserved.</p>
        
        <div className="flex space-x-8">
          <BsInstagram className="text-white hover:text-primary" />
          <FaFacebookF className="text-white hover:text-primary" />
          <FaLinkedinIn className="text-white hover:text-primary" />
          <BsTwitter className="text-white hover:text-primary" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
