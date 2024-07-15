import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";
import React from "react";

const Navbar = () => {
    return (
        <nav className="hidden md:block bg-white px-6 py-4 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <img src="/logo.png" alt="Nove mogućnosti Logo" className="h-20 mr-2" />
                    </Link>
                </div>

                <div className="flex items-center justify-center flex-grow">
                    <Link href="/" className="navbarLink mx-4">Početna</Link>
                    <Link href="/o-nama" className="navbarLink mx-4">O nama</Link>
                    <Link href="/usluge" className="navbarLink mx-4">Usluge</Link>
                    <Link href="/radionica" className="navbarLink mx-4">Radionica</Link>
                </div>

                <div className="flex items-center">
                    <div style={{ width: 'auto', flexShrink: 0 }}> {/* Fix width to prevent shift */}
                        <button className="animated-button" style={{ whiteSpace: 'nowrap' }}>
                            Kontakt
                            <span className="arrow-icon"><FiArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
