// components/Footer.js
import React from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link'; // Ensure Link is imported from 'next/link'


const Footer = () => {
    return (
        <footer className="footerBackground relative bg-gray-200 pt-44 pb-10 sm:pb-20 -mt-28">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-center lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="footerTitle text-3xl font-semibold mb-2">Nove mogućnosti d.o.o.</h4>
                        <h6 className="text-lg mt-0 mb-4 sm:mb-6 text-blueGray-600 mb-8">Mi u svakom poslovanju vidimo nove mogućnosti i u svakoj osobi perspektivu.</h6>
                    </div>
                    <div className="w-full lg:w-6/12 px-4 lg:ml-auto lg:pr-4">
                        <div className="flex flex-wrap items-top mb-8 sm:mb-12">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="footerTitle block uppercase text-sm font-semibold mb-2">NOVE MOGUĆNOSTI</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/o-nama" className="footerLinks font-semibold block pb-2 text-sm">
O nama
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/usluge" className="footerLinks font-semibold block pb-2 text-sm">
Usluge
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/radionica" className="footerLinks font-semibold block pb-2 text-sm mb-8">
Radionica
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-5/12 px-4">
                                <span className="footerTitle block uppercase text-sm font-semibold mb-2">KONTAKT</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="" className="footerLinks font-semibold block pb-2 text-sm">
mail
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="footerLinks font-semibold block pb-2 text-sm" target="_blank" rel="noopener noreferrer">
adresa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="footerLinks font-semibold block pb-2 text-sm">
telefon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="footerLinks font-semibold block pb-2 text-sm" target="_blank" rel="noopener noreferrer">
                                                LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mb-2 border-gray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 mx-auto mt-6 md:mt-0 sm:mb-6 md:-mb-16 text-center">
                        <div className="text-sm font-semibold">
                            Copyright © 2024 Nove mogućnosti d.o.o.
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
