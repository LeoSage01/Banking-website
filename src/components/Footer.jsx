import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black mt-2">
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
        <div className="px-5">
          <h2 className="mb-2 text-2xl font-bold">LOGO</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit Laboriosam tempore libero animi architecto! Esse dolor aliquam
          </p>
        </div>
        <div className="text-gray-500 grid grid-cols-1 sm:grid-cols-3 text-sm gap-4">
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

      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between px-5 py-5">

        <div className="flex mb-3 sm:mb-0 space-x-8">
          <BsInstagram className="text-white" />
          <FaFacebookF className="text-white" />
          <FaLinkedinIn className="text-white" />
          <BsTwitter className="text-white" />
        </div>

        <p className="text-gray-500 text-sm mb-4 sm:mb-0">© 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
