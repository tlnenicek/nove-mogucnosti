'use client';

import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FiArrowRight } from "react-icons/fi";

import Cards from '@/components/KonzultantskeUsluge';
import MentorstvoCoaching from '@/components/MentorstvoCoaching';
import EdukacijskeRadionice from '@/components/EdukacijskeRadionice';

import LayoutUsluge from '@/components/LayoutUsluge';
import Start from '@/components/Start';
import Tim from '@/components/Tim';
import Zrelost from '@/components/Zrelost';
import Rast from '@/components/Rast';

const Services = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [section, setSection] = useState('start');
    const [openSection, setOpenSection] = useState('');  // This will manage which section is open

    useEffect(() => {
        setIsMounted(true);
        const urlParams = new URLSearchParams(window.location.search);
        const sectionParam = urlParams.get('section') || 'start';
        setSection(sectionParam);
    }, []);

    if (!isMounted) {
        return null;  // Return null or a loader until the component is mounted
    }

    // Function to toggle visibility of sections
    const toggleSection = (sectionName) => {
        setOpenSection(openSection === sectionName ? '' : sectionName);
    };

    // Dynamically choose the component based on the section
    let Component;
    switch (section) {
        case 'start':
            Component = Start;
            break;
        case 'tim':
            Component = Tim;
            break;
        case 'zrelost':
            Component = Zrelost;
            break;
        case 'rast':
            Component = Rast;
            break;
        default:
            Component = () => <div>Section not found</div>;
    }

    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
            {/* Section 1 */}
            <section className="sectionFontSize relative bg-white pt-4 md:pt-8 z-0 h-72 w-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-72 mt-4">
                    <div className="absolute top-0 left-0 w-full h-full pocetnaSekcija opacity-35 z-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent z-10"></div>
                    <img
                        src="/usluge.jpg"
                        alt="poslovni sastanak s analizom financijskih podataka, simbolizirajuci usluge konzultacija, mentorstva i coachinga u poslovanju te edukacijske radionice"
                        className="w-full h-72 object-cover"
                        style={{ objectPosition: 'top' }} // Ensure the whole picture is shown
                    />
                </div>
                <div className="relative z-20 flex flex-col items-center pt-16 md:pt-24">
                    <div className="text-center">
                        <div className="text-5xl font-bold mb-8 text-black">
                            <h1 className="text-white">Usluge</h1>
                        </div>
                        <p className="max-w-3xl mx-auto mb-96 text-white">
                            „Krenite odakle se nalazite. Koristite ono što imate. Učinite što možete.“
                            - Arthur Ashe
                        </p>
                    </div>
                </div>
            </section>




            <section className="relative items-center bg-white p-8 md:p-16 pb-0 z-0 h-auto w-full flex flex-col">
                {/* Top centered div */}
                <div className="mt-8 text-center mb-8">
                    <div className="text-3xl font-bold mb-4 text-black">
                        <h1>Naše tri usluge</h1>
                    </div>
                    <p className="max-w-3xl mx-auto mb-6">
                        {/* Add any introductory text here if needed */}
                    </p>
                </div>


            {/* Section 2 */}
            <div className="cardsBackground relative p-8 z-0 h-auto w-full flex flex-col text-left max-w-3xl rounded-lg shadow mb-4">
                    <div className="flex items-center justify-left text-3xl font-bold mb-2 text-black">
                        <h3 className="text-3xl">Konzultantske usluge</h3>
                        <div
                            onClick={() => toggleSection('konzultantske')}
                            className={`ml-4 text-orange-500 transition-transform duration-300 cursor-pointer ${openSection === 'konzultantske' ? 'rotate-180' : ''}`}
                            style={{ fontSize: '24px' }}  // Adjust font size here to make the icon smaller
                        >
                            {openSection === 'konzultantske' ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    <p>
                        U rastu i razvoju poslovanja igra ključnu ulogu u pružanju stručnih savjeta i podrške organizacijama kako bi postigle svoje poslovne ciljeve.
                    </p>

                {openSection === 'konzultantske' && <Cards />}
            </div>

            {/* Additional Section 1 */}
            <div className="cardsBackground relative p-8 z-0 h-auto w-full flex flex-col text-left max-w-3xl rounded-lg shadow mb-4">
                <div className="flex items-center justify-left text-3xl font-bold mb-2 text-black">
                        <h3 className="text-3xl">Mentorstvo i Coaching u poslovanju</h3>
                        <div
                            onClick={() => toggleSection('mentorstvo')}
                            className={`ml-4 text-orange-500 transition-transform duration-300 cursor-pointer ${openSection === 'mentorstvo' ? 'rotate-180' : ''}`}
                            style={{ fontSize: '24px' }}  // Adjust font size here to make the icon smaller
                        >
                            {openSection === 'mentorstvo' ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    <p>
                        Pružamo mentorstvo i coaching usluge kako bismo vam pomogli u postizanju poslovnih ciljeva, razvijanju vještina i povećanju učinkovitosti.
                    </p>

                {openSection === 'mentorstvo' && <MentorstvoCoaching />}
            </div>

            {/* Additional Section 2 */}
            <div className="cardsBackground relative p-8 z-0 h-auto w-full flex flex-col text-left mb-10 max-w-3xl rounded-lg shadow">
                <div className="flex items-center justify-left text-3xl font-bold mb-2 text-black">
                        <h3 className="text-3xl">Edukacijske radionice</h3>
                        <div
                            onClick={() => toggleSection('edukacijske')}
                            className={`ml-4 text-orange-500 transition-transform duration-300 cursor-pointer ${openSection === 'edukacijske' ? 'rotate-180' : ''}`}
                            style={{ fontSize: '24px' }}  // Adjust font size here to make the icon smaller
                        >
                            {openSection === 'edukacijske' ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    <p>
                        Nudimo razne edukacijske programe za razvoj vaših profesionalnih vještina i unapređenje poslovanja.
                    </p>

                {openSection === 'edukacijske' && <EdukacijskeRadionice />}
            </div>


            </section>







            <LayoutUsluge>
                <Component />
            </LayoutUsluge>

            {/* Call to Action Section */}
            <section className="sectionOrange flex flex-wrap justify-center shadow-xl rounded-lg py-16 px-4 md:px-8 relative z-10 w-full md:w-11/12 lg:w-11/12 bg-gray-100 mt-8">
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

export default Services;
