import React from "react";
import {
   FaFacebook,
   FaInstagram,
   FaLinkedinIn,
   FaTwitter,
} from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="relative bg-color-background text-gray-100 pt-20 pb-6 mt-4">
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
               <div className="w-full lg:w-6/12 px-4">
                  <h4 className="text-2xl font-semibold text-blueGray-700">
                     Lorem ipsum dolor sit amet.
                  </h4>
                  <h5 className=" mt-0 mb-2 ">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
                     blanditiis.
                  </h5>
                  <div className="mt-6 lg:mb-0 mb-6 text-white">
                     <button
                        className="  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <FaTwitter size={32} />
                     </button>
                     <button
                        className="  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <FaFacebook size={32} />
                     </button>
                     <button
                        className="   font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <FaInstagram size={32} />
                     </button>
                     <button
                        className=" text-blueGray-800  font-normal h-10 w-10 items-center justify-center  align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <FaLinkedinIn size={32} />
                     </button>
                  </div>
               </div>
               <div className="w-full text-center lg:text-left lg:w-6/12 px-4">
                  <div className="flex flex-wrap items-top mb-6">
                     <div className="w-full lg:w-4/12 px-4 ml-auto">
                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                           Useful Links
                        </span>
                        <ul className="list-unstyled">
                           <li>
                              <a
                                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                 href="#"
                              >
                                 About Us
                              </a>
                           </li>
                           <li>
                              <a
                                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                 href="#"
                              >
                                 Blog
                              </a>
                           </li>

                           <li>
                              <a
                                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                 href="#"
                              >
                                 Free Products
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className="w-full lg:w-4/12 px-4">
                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                           Other Resources
                        </span>
                        <ul className="list-unstyled">
                           <li>
                              <a
                                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                 href="#"
                              >
                                 MIT License
                              </a>
                           </li>
                           <li>
                              <a
                                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                 href="#"
                              >
                                 Terms &amp; Conditions
                              </a>
                           </li>
                           <li>
                              <a
                                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                 href="#"
                              >
                                 Privacy Policy
                              </a>
                           </li>
                           <li>
                              <a
                                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                 href="#"
                              >
                                 Contact Us
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
               <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                     Copyright © <span id="get-current-year">2024</span>
                     <a
                        href="#"
                        className="text-blueGray-500 hover:text-gray-800"
                        target="_blank"
                     >
                        {" "}
                        PSM Nepal
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
