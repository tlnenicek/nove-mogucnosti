// pages/o-nama.js
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import {FiArrowRight} from "react-icons/fi";

const About = () => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">




            {/* Section 1 */}
            <section className="sectionFontSize relative bg-white pt-4 md:pt-8 z-0 h-72 w-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-72 mt-4">
                    <div className="absolute top-0 left-0 w-full h-full pocetnaSekcija opacity-20 z-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent z-10"></div>
                    <img
                        src="/o-nama.jpg"
                        alt="tim zaposlenika na poslovnom sastanaku"
                        className="w-full h-72 object-cover"
                        style={{ objectPosition: 'top' }} // Ensure the whole picture is shown
                    />
                </div>
                <div className="relative z-20 flex flex-col items-center pt-16 md:pt-24">
                    <div className="text-center">
                        <div className="text-5xl font-bold mb-8 text-black">
                            <h1 className="text-white">O nama</h1>
                        </div>
                        <p className="max-w-3xl mx-auto mb-96 text-white">
                            „Krenite odakle se nalazite. Koristite ono što imate. Učinite što možete.“
                            - Arthur Ashe
                        </p>
                    </div>
                </div>
            </section>


















            {/* Section 2 */}
            <section className="relative bg-white p-8 md:p-16 z-0 h-auto w-full flex flex-col md:px-28">
                {/* Top centered div */}
                <div className="my-8 mt-2 text-center">
                    <div className="text-3xl font-bold mb-4 text-black">
                        <h1>Neki naslov</h1>
                    </div>
                    <p className="max-w-3xl mx-auto mb-6">
                        {/* Add any introductory text here if needed */}
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="md:col-span-1">
                        {/* Card 1 */}
                        <div className="overflow-hidden servicesBorder mb-4 md:mb-0">
                            <div className="p-4 flex flex-col">
                                <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">Vizija</h3>
                                <p className="mb-4 flex-grow">
                                    Mi smo Vaš partner u organizaciji i razvoju uspješnog poslovanja.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="overflow-hidden servicesBorder">
                            <div className="p-4 flex flex-col">
                                <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">Misija</h3>
                                <p className="mb-4 flex-grow">
                                    Mi naš uspjeh mjerimo vašim uspjehom.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        {/* Card 3 */}
                        <div className="overflow-hidden servicesBorder mb-4 md:mb-0">
                            <div className="p-4 flex flex-col">
                                <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">Vrijednosti</h3>
                                <p className="mb-4 flex-grow">
                                    Povjerenje, lojalnost, odgovornost, win win odnosi, dugoročna suradnja.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="overflow-hidden servicesBorder">
                            <div className="p-4 flex flex-col">
                                <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">Način rada</h3>
                                <p className="mb-4 flex-grow">
                                    Rješavamo strateške probleme na operativnoj razini.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="md:col-span-2">
                        <div className="overflow-hidden servicesBorder">
                            <div className="p-4 flex flex-col">
                                <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">Cilj poslovne suradnje</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <ol className="list-decimal pl-5 md:mb-4 flex-grow sm:mb-0">
                                            <li className="liOnama mb-2">
                                                Povećanje profitabilnosti – bolja organizacija za veći prihod.
                                            </li>
                                            <li className="liOnama md:mb-2 sm:mb-0">
                                                Povećanje produktivnosti – veće zadovoljstvo i motivacija.
                                            </li>
                                        </ol>
                                    </div>
                                    <div>
                                        <ol className="list-decimal pl-5 mb-4 flex-grow -mt-2 md:ml-4 lg:ml-4" start="3">
                                            <li className="liOnama mb-2">
                                                Transformacija poslovanja – lakši dolazak u željeno stanje.
                                            </li>
                                            <li className="liOnama mb-2">
                                                Upravljanje promjenama – lakši proces promjena u poslovanju.
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

































            {/* Section 3 */}
            <section className="sectionFontSize relative bg-gray-100 p-4 z-0 h-auto w-full flex flex-col items-center px-8 md:px-16 lg:px-40 xl:px-48"> {/* Increased padding for larger screens */}
                <div className="my-8 text-center">
                    <div className="text-3xl font-bold mb-4 text-black md:mt-6">
                        <h1>Individualni pristup</h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:space-x-12 mb-2"> {/* Adjusted spacing for lg screens */}
                    <div className="w-full lg:w-1/2 lg:flex lg:justify-end text-justify"> {/* Ensured equal margins by using flex justify-end */}
                        <p className="lg:max-w-2xl mb-0 md:mb-12"> {/* Constrained width for consistent margins */}
                            Tvrtka Nove mogućnosti ima 20 godišnje iskustvo i kontinuirano radi na razvoju svog poslovanja.
                            Dosadašnje iskustvo nam je omogućilo da prepoznamo prave probleme razvoja svojih klijenata, a
                            to je osobni i organizacijski rast i razvoj.
                            Kako bi odgovorili na ove izazove prije pet godina smo pokrenuli transformaciju od pružanja
                            usluga razvoja projekata financiranih iz EU fondova, gdje je najčešće bilo investiranje u
                            materijalnu imovinu. Fokusirali se na osobni razvoj rukovoditelja, kroz ulaganje u razvojni
                            mindset (promjenu uvjerenja i stavova kroz usvajanje različitih novih liderskih vještina) do
                            specifičnih znanja potrebnih za uspješan razvoj i upravljanje organizacijama.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center  lg:justify-start lg:mt-0"> {/* Ensured equal margins by using flex justify-start */}
                        <img
                            src="/nove-mogucnosti.png"
                            alt="20 godina postojanja trvrtke Nove mogucnosti"
                            className="w-full md:w-2/3 lg:w-auto h-72 md:h-96 object-cover rounded-lg lg:max-w-2xl mb-2 md:mb-6" // Constrained width for consistent margins
                        />
                    </div>
                </div>
            </section>






















            {/* Section 4 */}
            <section className="sectionFontSize relative bg-white p-8 md:p-8 z-0 h-auto w-full md:w-screen flex flex-col md:px-28 mt-2 md:mt-8 md:pb-52 pb-48">
                <div className="text-center text-gray-500 py-16 mx-auto lg:py-16 lg:px-6">
                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/tomislav-lnenicek.jpeg" alt="Tomislav Lnenicek vlasnik tvrtke Nove mogucnosti" />
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                        Tomislav Lneniček
                    </h3>
                    <p>Vlasnik Nove mogućnosti d.o.o.</p>
                    <p className="max-w-3xl mx-auto my-2 text-gray-600">
                        Osnivač tvrtke Nove mogućnosti, konzultant, mentor, coach, edukator i poduzetnik s 20 godina iskustva u poslovnom razvoju. Pomaže organizacijama i liderima ostvariti puni potencijal. Sudjelovao u preko 100 projekata u raznim sektorima. Magistar menadžmenta, certificirani coach za malo gospodarstvo i EMCC global EIA akreditirani coach/mentor. Edukant pod supervizijom za terapeuta u transakcijskoj analizi. U svakom poslovanju vidi nove mogućnosti i koristi mrežu suradnika za zadovoljavanje potreba klijenata.
                    </p>
                    <ul className="flex justify-center mt-4 space-x-2 mb-20">
                        <li>
                            <Link href="https://www.linkedin.com/in/tomislav-lnenicek" className="text-[#0077B5] hover:bg-gray-300 rounded-full bg-gray-200 p-2 w-10 h-10 flex items-center justify-center">
                                <FaLinkedinIn />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>













            {/* Call to Action Section */}
            <section className="sectionOrange flex flex-wrap justify-center shadow-xl rounded-lg py-16 px-4 md:px-8 relative z-10 w-full md:w-11/12 lg:w-11/12 bg-gray-100 -mt-52">                 <div className="w-full text-center lg:w-8/12">
                    <h3 className="font-semibold text-3xl">Unaprijedite svoje poslovanje</h3>
                    <p className="sectionFontSize sectionOrangeSubtext leading-relaxed mt-4 mb-4">
                        Individualiziranim pristupom rješavamo vaše probleme, povećavamo sigurnost i stabilnost poslovanja, te bolji balans između privatnog i poslovnog života.
                    </p>
                <button className="animated-button mt-4 buttonOne">
                    Ugovorite sastanak
                    <span className="arrow-icon"><FiArrowRight /></span>
                </button>
                </div>
            </section>


        </div>
    );
};

export default About;
