'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {FiArrowRight} from "react-icons/fi";

const HamburgerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }

        return () => {
            body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <nav className="block md:hidden bg-white px-6 py-2 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <img src="/logo.png" alt="Nove mogućnosti Logo" className="h-14 mr-2" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes className="text-3xl text-orange-500" /> : <FaBars className="text-3xl text-orange-500" />}
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center z-50 transition-transform duration-300 ease-out`}>
                <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
                    <FaTimes className="text-3xl text-orange-500" />
                </button>
                <ul className="list-none text-center">
                    <li className="mb-8">
                        <Link href="/" className="navbarLink" onClick={toggleMenu}>
                            Početna
                        </Link>
                    </li>
                    <li className="mb-8">
                        <Link href="/o-nama" className="navbarLink" onClick={toggleMenu}>
                            O nama
                        </Link>
                    </li>
                    <li className="mb-8">
                        <Link href="/usluge" className="navbarLink" onClick={toggleMenu}>
                            Usluge
                        </Link>
                    </li>
                    <li className="mb-8">
                        <Link href="/radionica" className="navbarLink" onClick={toggleMenu}>
                            Radionica
                        </Link>
                    </li>
                    <li className="mb-8">
                        <button className="animated-button">
                            Ugovorite sastanak
                            <span className="arrow-icon"><FiArrowRight /></span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HamburgerNavbar;
