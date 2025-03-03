import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    footercompanyLinks,
    footerProductLinks,
    footerSupportLinks,
} from "../../static/data";

const Footer = () => {
    return (
        <div className="bg-[#000] text-white">
            

           
            <div>

                {/* NEWS LETTER */}

                <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-2xl font-bold text-[#F16521] md:text-4xl">
                        ARTISTRY NEWSLETTER
                    </h2>

                    <p className="hidden text-gray-700 sm:mt-4 sm:block">
                        Get updates on the latest creations, special deals, and inspiring stories.
                    </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                        <label htmlFor="email" className="sr-only">Email</label>

                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-md border border-solid bg-white p-3 text-gray-700 shadow-sm transition focus:border-[#F16521] focus:ring focus:ring-[#F16521]"
                            style={{ borderColor: "#F16521" }}
                        />
                        </div>

                        <button
                            type="submit"
                            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#F16521] px-5 py-2 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
                            <span className="text-sm font-medium"> JOIN FREE </span>

                            <svg
                                className="rtl:rotate-180 w-[30px]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                    </div>
                </div>
                </section>
            </div>



            {/* ACTUAL FOOTER */}


            <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
                <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                    <img
                        src="/Artistry-logo-1.png"
                        alt="Artistry"
                        style={{ filter: "brightness(0) invert(1)" }}
                        className="w-[300px] h-[80px] object-contain"
                    />
                    <br />
                    <p>Connecting with Creativity — <br /> One Piece at a Time.</p>
                    <div className="flex items-center mt-[15px]">
                        <AiFillFacebook size={25} className="cursor-pointer" />
                        <AiOutlineTwitter
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                        <AiFillInstagram
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                        <AiFillYoutube
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                    </div>
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Company</h1>
                    {footerProductLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Shop</h1>
                    {footercompanyLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Support</h1>
                    {footerSupportLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
            >
                <span>© 2025. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <div className="sm:block flex items-center justify-center w-full">
                    <img
                        src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;