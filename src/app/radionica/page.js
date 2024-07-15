// pages/o-nama.js
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";

const Radionice = () => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">




            {/* Section 1 */}
            <section className="sectionFontSize relative bg-white pt-4 md:pt-8 z-0 h-72 w-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-72 mt-4">
                    <div className="absolute top-0 left-0 w-full h-full pocetnaSekcija opacity-20 z-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent z-10"></div>
                    <img
                        src="/radionica.jpg"
                        alt="radionica za rjesavanje problema"
                        className="w-full h-72 object-cover"
                        style={{ objectPosition: 'top' }} // Ensure the whole picture is shown
                    />
                </div>
                <div className="relative z-20 flex flex-col items-center pt-16 md:pt-24">
                    <div className="text-center">
                        <div className="text-5xl font-bold mb-8 text-black">
                            <h1 className="text-white">Radionica</h1>
                        </div>
                        <p className="max-w-3xl mx-auto mb-96 text-white">
Jedna recenica kako se nude besplatne radionice jednom u mjesec dana npr
                        </p>
                    </div>
                </div>
            </section>

















            {/* Section 2 */}
            <section className="relative bg-white p-8 md:p-16 z-0 h-auto w-full flex flex-col items-center md:px-28 mb-72">
                {/* Top centered div */}
                <div className="my-8 mt-2 text-center">
                    <div className="text-3xl font-bold mb-4 text-black">
                        <h1>Učinkovito rješavanje problema</h1>
                    </div>
                    <p className="max-w-3xl mx-auto mb-6">
                    </p>
                </div>

                {/* Content Container */}
                <div className="w-full max-w-5xl mt-6">
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Datum</h3>
                        <p className="mb-0 flex-grow md:w-2/3">-</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Mjesto</h3>
                        <p className="mb-0 flex-grow md:w-2/3">Online</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Opis</h3>
                        <p className="mb-0 flex-grow md:w-2/3">
                            Pomažem vam identificirati skrivene probleme u poslovanju te brže i učinkovitije pronaći rješenja. Kombiniranjem poduzetničkih i psihoterapijskih vještina, proširujemo vaše mogućnosti i kapacitete. Radimo na praktičnim primjerima iz vašeg poslovanja kako bismo zajedno pronašli i implementirali optimalna rješenja.
                        </p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Ciljana publika</h3>
                        <p className="mb-0 flex-grow md:w-2/3">
                            Poduzetnici i menadžeri s najmanje godinu dana iskustva, koji žele naučiti sustavno rješavati probleme, donijeti kvalitetne odluke i unaprijediti svoje poslovanje. Nije za one koji traže brza rješenja.
                        </p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Što ćete naučiti</h3>
                        <p className="mb-0 flex-grow md:w-2/3">
                            Identificirati stvarne probleme u poslovanju, povećati kapacitet za rješavanje problema, razraditi različite opcije za njihovo rješavanje te potaknuti razmišljanje i osobni razvoj.
                        </p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Trajanje</h3>
                        <p className="mb-0 flex-grow md:w-2/3">90 minuta</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Broj polaznika</h3>
                        <p className="mb-0 flex-grow md:w-2/3">Do 10</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Potrebno znanje</h3>
                        <p className="mb-0 flex-grow md:w-2/3">1+ godina iskustva</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Cijena</h3>
                        <p className="mb-0 flex-grow md:w-2/3">Besplatno</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Materijali</h3>
                        <p className="mb-0 flex-grow md:w-2/3">Ne, vlastite bilješke</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="p-4 flex flex-col md:flex-row items-start justify-between">
                        <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3 md:mb-0 md:w-1/3">Certifikat</h3>
                        <p className="mb-0 flex-grow md:w-2/3">Ne</p>
                    </div>

                    <div className="flex justify-center mt-16 mb-10">
                        <button className="animated-button">
                            Prijavite se
                            <span className="arrow-icon"><FiArrowRight /></span>
                        </button>
                    </div>
                </div>
            </section>


















            {/* Call to Action Section */}
            <section className="sectionOrange flex flex-wrap justify-center shadow-xl rounded-lg py-16 px-4 md:px-8 relative z-10 w-full md:w-11/12 lg:w-11/12 bg-gray-100 -mt-52">
                <div className="w-full text-center lg:w-8/12">
                    <h3 className="font-semibold text-3xl">Unaprijedite svoje poslovanje</h3>
                    <p className="sectionOrangeSubtext text-lg leading-relaxed mt-4 mb-4">
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

export default Radionice;
