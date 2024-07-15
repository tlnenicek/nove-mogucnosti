import React from 'react';
import {FaCheck, FaRocket, FaUsers, FaChartLine, FaDollarSign} from 'react-icons/fa'; // Importing icons
import {FiArrowRight} from 'react-icons/fi';
import Testimonials from '../components/Testimonials'; // Assuming correct path
import Link from "next/link";

const Home = () => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">

            {/* Section 1 */}
            <section className="relative bg-white p-4 md:p-8 z-0 h-auto w-full md:w-screen flex flex-col md:px-28">
                <div className="my-8 md:my-16 mt-4 md:mt-8 text-center">
                    <div className="text-5xl max-w-4xl mx-auto font-bold mb-8 text-black">
                        <h1>U svakom poslovanju vidimo nove mogućnosti i u svakoj osobi perspektivu</h1>
                    </div>
                    <p className="sectionFontSize max-w-3xl mx-auto mb-6">
                        Konzultantske usluge tvrtke Nove mogućnosti predstavljene su kroz praktične probleme koje
                        rješavamo zahvaljujući dvadesetogodišnjem iskustvu i predstavljaju različite životne faze
                        poslovanja. Identificirali smo četiri ciljne skupine klijenata, a to su mikro, mali i
                        srednji poduzetnici, te razvojni timovi.
                    </p>
                    <button className="animated-button">
                        Ugovorite sastanak
                        <span className="arrow-icon"><FiArrowRight/></span>
                    </button>
                </div>
                <img
                    src="/light-bulb.jpg"
                    alt="banner koji simbolizira kreativnost i planiranje u konzultantskim uslugama, mentorstvu i poslovnim edukacijama"
                    className="hidden md:block w-full h-auto rounded-lg mb-16 mt-2"
                />
            </section>


            {/* Section 2 */}
            <section className="relative bg-gray-100 py-8 lg:py-16 z-0 w-full flex flex-col mb-8 px-6 lg:px-28">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-4 text-black">Radionica za poduzetnike</h1>
                    <p className="max-w-3xl mx-auto"></p>
                </div>
                <div
                    className="bg-white border border-gray-200 rounded-lg shadow flex flex-col lg:flex-row lg:max-w-5xl mx-auto">
                    <img
                        className="object-cover w-full lg:w-96 h-96 lg:h-auto rounded-t-lg lg:rounded-none lg:rounded-l-lg"
                        src="/rjesavanje-problema.png"
                        alt="dijagram rjesavanja problema kroz korake: situacija, opcije, izbor, djelovanje i evaluacija"/>
                    <div className="p-8 leading-normal flex flex-col justify-between">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Učinkovito rješavanje problema</h3>
                        <span
                            className="text-lg mb-4">Online &#183; 90min &#183; do 10 polaznika &#183; za početnike</span>
                        <p className="mb-4">
                            Ova radionica pomaže identificirati nesvjesne probleme u poslovanju i brže pronaći
                            rješenja spajanjem poduzetničkih i psihoterapijskih vještina. Polaznici će naučiti
                            prepoznati stvarne probleme, povećati kapacitet rješavanja problema, razraditi različite
                            opcije te poticati razmišljanje i osobni razvoj.
                        </p>
                        <div className="flex items-center space-x-4">
                            <button className="animated-button mt-4">
                                Prijavite se
                                <span className="arrow-icon"><FiArrowRight/></span>
                            </button>
                            <a href="/learn-more"
                               className="aboutNumber flex items-center hover:text-gray-900 mt-4">
                                Saznaj više <FiArrowRight className="ml-1"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 3 */}
            <section className="relative bg-white p-8 z-0 h-auto w-full flex flex-col mb-8 px-6 md:px-28 -mt-6">
                <div className="my-8 text-center">
                    <div className="text-3xl font-bold mb-4 text-black">
                        <h1>Naše usluge</h1>
                    </div>
                    <p className="max-w-3xl mx-auto mb-6"> {/* Increased bottom margin */}
                        U radu s klijentima kombiniraju se tri vrste usluga.
                    </p>
                </div>
                {/* New content */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 mb-4">
                    {/* Card 1 */}
                    <Link href=""
                          className="cardsBackground flex flex-col rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                        <h3 className="aboutNumber mt-4 mb-2 text-2xl font-bold tracking-tight">Konzultantske
                            usluge</h3>
                        <p className="mb-4">
                            U rastu i razvoju poslovanja ključnu ulogu igra pružanje stručnih savjeta i podrške
                            organizacijama kako bi postigle poslovne ciljeve. To uključuje aktivnosti koje pomažu
                            identificiranju prilika za poboljšanja, optimizaciju resursa i održivi rast.
                        </p>
                    </Link>
                    {/* Card 2 */}
                    <Link href=""
                          className="cardsBackground flex flex-col rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                        <h3 className="aboutNumber mt-4 mb-2 text-2xl font-bold tracking-tight">Mentorstvo i
                            coaching</h3>
                        <p className="mb-4">
                            Izuzetno korisni za poduzetnike, upravu i zaposlenike kako bi ostvarili ciljeve u
                            dinamičnom poslovnom okruženju. Ova tehnika često koristi pristup koji je usmjeren na
                            sadašnjost i budućnost te se fokusira na praktične korake za rješavanje problema.
                        </p>
                    </Link>
                    {/* Card 3 */}
                    <Link href=""
                          className="cardsBackground flex flex-col rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
                        <h3 className="aboutNumber mt-4 mb-2 text-2xl font-bold tracking-tight">Edukacijske
                            radionice</h3>
                        <p className="mb-4">
                            Poslovne edukacije ključne su za razvoj znanja, vještina i kompetencija zaposlenika i
                            poduzetnika, te za jačanje njihove sposobnosti postizanja ciljeva. Mogu se provoditi na
                            različitim razinama, od osnovnih do specijaliziranih treninga.
                        </p>
                    </Link>
                </div>
            </section>


            {/* Section 4 */}
            <section className="relative bg-gray-100 p-8 md:p-16 z-0 h-auto w-full md:w-screen flex flex-col md:px-28">
                <div className="my-8 mt-2 text-center">
                    <div className="text-3xl font-bold mb-4 text-black">
                        <h1>Pronalazite li se u nekoj od ovih poslovnih situacija</h1>
                    </div>
                    <p className="max-w-3xl mx-auto mb-6">
                        Naše ciljne skupine klijenata
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:mb-4">
                    {/* Card 1 */}
                    <div className="overflow-hidden servicesBorder">
                        <div className="p-4 flex flex-col">
                            <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">START</h3>
                            <p className="mb-4 flex-grow">
                                Samostalni ste poduzetnik ili imate mali tim koji uključuje asistente i
                                administrativno osoblje. Tržišno se želite pozicionirati s prepoznatljivim
                                proizvodom/uslugom.
                            </p>
                            <Link href="/learn-more" className="aboutNumber hover:text-gray-900 flex items-center">
                                Saznaj više <FiArrowRight className="ml-1"/>
                            </Link>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="overflow-hidden servicesBorder">
                        <div className="p-4 flex flex-col">
                            <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">TIM</h3>
                            <p className="mb-4 flex-grow">
                                Tim ste stručnjaka koji radi na raznim projektima i vaša je uloga kao tim lidera da
                                osigurate isporuku očekivane usluge/proizvoda u ograničenom vremenu.
                            </p>
                            <Link href="/learn-more" className="aboutNumber hover:text-gray-900 flex items-center">
                                Saznaj više <FiArrowRight className="ml-1"/>
                            </Link>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="overflow-hidden servicesBorder">
                        <div className="p-4 flex flex-col">
                            <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">RAST</h3>
                            <p className="mb-4 flex-grow">
                                Kupci su vas prepoznali, te su narudžbe vaših usluga i proizvoda sada veće od vaše
                                realne mogućnosti isporuke, što ukazuje na veliki rast i popularnost vašeg
                                poslovanja.
                            </p>
                            <Link href="/learn-more" className="aboutNumber hover:text-gray-900 flex items-center">
                                Saznaj više <FiArrowRight className="ml-1"/>
                            </Link>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="overflow-hidden servicesBorder">
                        <div className="p-4 flex flex-col">
                            <h3 className="aboutNumber text-2xl md:text-xl font-bold mb-3">ZRELOST</h3>
                            <p className="mb-4 flex-grow">
                                Razvili ste uspješni posao prepoznatljiv na tržištu, i svatko bi želio s vama
                                raditi, te vam već dolaze prvi upiti za prodaju cijelog vašeg poslovanja.
                            </p>
                            <Link href="/learn-more" className="aboutNumber hover:text-gray-900 flex items-center">
                                Saznaj više <FiArrowRight className="ml-1"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 5 */}
            <section className="relative bg-white p-8 z-0 w-full flex flex-col mb-8 px-6 md:px-28 mt-2 lg:px-44">
                <div className="my-8 text-center">
                    <div className="text-3xl font-bold mb-4 text-black">
                        <h1>Zašto nas angažirati</h1>
                    </div>
                    <p className="max-w-3xl mx-auto mb-6">
                        Usklađujemo poduzetničke i psihoterapijske vještine kroz konzultantski i mentorski rad.
                    </p>
                </div>

                {/* Adjusted layout for different screen sizes */}
                <div
                    className="flex flex-col lg:flex-row justify-between items-center"> {/* Changed flex properties */}
                    <div className="md:flex-1 mb-8 lg:mb-0 lg:mr-8"> {/* Added right margin for spacing */}
                        <h3 className="hFont font-bold text-orange-500 mb-1">Ekonomski</h3> {/* Increased bottom margin */}
                        <p className="mb-5">
                            Naglasak je na važnosti profitabilnosti i produktivnosti kako bismo pružili rješenja
                            prilagođena vašim potrebama, s fokusom na dugoročnu održivost poslovanja.
                        </p>
                        <h3 className="hFont font-bold text-orange-500 mb-1">Ljudski</h3> {/* Increased bottom margin */}
                        <p className="mb-5">
                            Posvećeni smo razvoju rukovoditelja i članova tima, što doprinosi cjelokupnom razvoju
                            organizacije. Potičemo kreativnost i timsku sinergiju.
                        </p>
                        <h3 className="hFont font-bold text-orange-500 mb-1">Sustavni</h3> {/* Increased bottom margin */}
                        <p className="mb-8">
                            Identificiramo i rješavamo ključne probleme uzročno-posljedično, što dovodi do boljih
                            rezultata.
                        </p>
                        <button className="animated-button mb-4">
                            Ugovorite sastanak
                            <span className="arrow-icon"><FiArrowRight/></span>
                        </button>
                    </div>
                    {/* Image that moves below the text on md screens */}
                    <div className="md:flex-1 flex justify-center items-start lg:items-end lg:ml-8 mt-4 md:mt-0 lg:mt-0">
                        <img src="/sastanak.jpg" alt="poslovni partneri uspjesno ugovaraju sastanak"
                             className="w-full max-w-md lg:max-w-none lg:h-auto lg:w-full rounded-lg shadow-lg mt-0"/> {/* Adjusted width and height */}
                    </div>
                </div>
            </section>


            {/* Section 6 */}
            <section
                className="relative bg-gray-100 p-4 md:p-8 z-0 h-auto w-full md:w-screen flex flex-col md:px-6 lg:px-28 mb-8">
                <div className="my-8 md:my-8 text-center">
                    <div className="text-3xl font-bold mb-4 text-black">
                        <h1>Proces rada</h1>
                    </div>
                    <p className="max-w-3xl mx-auto mb-6">
                        Svi koraci se predstavljaju i potvrđuju od strane vlasnika/uprave
                    </p>
                </div>

                {/* Responsive grid layout: 2 rows x 3 columns on large screens, 2 columns on medium screens */}
                <div className="flex flex-wrap justify-around items-stretch mb-4">
                    <div className="p-4 md:p-8 mb-2 md:mb-4 w-full md:w-1/2 lg:w-1/3">
                        <dt className="aboutNumber text-3xl md:text-5xl font-bold mb-2 opacity-70">01</dt>
                        <dt className="text-xl md:text-2xl font-medium">Započinje kontaktom i prvim sastankom</dt>
                    </div>
                    <div className="p-4 md:p-8 mb-2 md:mb-4 w-full md:w-1/2 lg:w-1/3">
                        <dt className="aboutNumber text-3xl md:text-5xl font-bold mb-2 opacity-70">02</dt>
                        <dt className="text-xl md:text-2xl font-medium">Snimka stanja – definiranje problema</dt>
                    </div>
                    <div className="p-4 md:p-8 mb-2 md:mb-4 w-full md:w-1/2 lg:w-1/3">
                        <dt className="aboutNumber text-3xl md:text-5xl font-bold mb-2 opacity-70">03</dt>
                        <dt className="text-xl md:text-2xl font-medium">Ideje za rješavanje problema</dt>
                    </div>
                    <div className="p-4 md:p-8 mb-2 md:mb-4 w-full md:w-1/2 lg:w-1/3">
                        <dt className="aboutNumber text-3xl md:text-5xl font-bold mb-2 opacity-70">04</dt>
                        <dt className="text-xl md:text-2xl font-medium">Odabir najbolje opcije</dt>
                    </div>
                    <div className="p-4 md:p-8 mb-2 md:mb-4 w-full md:w-1/2 lg:w-1/3">
                        <dt className="aboutNumber text-3xl md:text-5xl font-bold mb-2 opacity-70">05</dt>
                        <dt className="text-xl md:text-2xl font-medium">Provedba dogovorenog rješenja</dt>
                    </div>
                    <div className="p-4 md:p-8 mb-2 md:mb-4 w-full md:w-1/2 lg:w-1/3">
                        <dt className="aboutNumber text-3xl md:text-5xl font-bold mb-2 opacity-70">06</dt>
                        <dt className="text-xl md:text-2xl font-medium">Evaluacija postignutih rezultata</dt>
                    </div>
                </div>
            </section>


            {/* Section 7 */}
            <section className="bg-white py-8 w-full mb-10 lg:mb-16 px-4 md:px-10 lg:px-28">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-black">Naše obećanje vama</h1>
                    <p className="max-w-3xl mx-auto text-xl mt-4">...</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-6">
                    <div className="w-full lg:w-2/5 md:w-1/2 p-6 flex justify-center mb-5 lg:mb-0">
                        <div className="text-left">
                            <ul className="list-none space-y-4">
                                <li className="flex items-center">
                                    <FaCheck className="text-orange-500 mr-4" size={28}/>
                                    Veća produktivnost
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-orange-500 mr-4" size={28}/>
                                    Povećanje profita
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-orange-500 mr-4" size={28}/>
                                    Brže rješavanje problema
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-orange-500 mr-4" size={28}/>
                                    Brže donošenje odluka
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-orange-500 mr-4" size={28}/>
                                    Više slobodnog vremena
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-orange-500 mr-4" size={28}/>
                                    Smanjenje stresa
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-orange-500 mr-4" size={28}/>
                                    Bolje zdravstveno stanje
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="/slika13.jpg"
                         alt="graf koji simbolizira upravljanje, analizu i rast poslovnih performansi"
                         className="w-full lg:w-3/5 rounded-lg shadow-lg"/>
                </div>
            </section>


            {/* Right List */}
            {/* <div className="w-full lg:w-1/2 flex justify-start lg:pl-20 mt-8 lg:mt-0">
                <div className="flex flex-col justify-start items-start text-left">
                    <ul className="list-none">
                        <li className="mb-4 flex items-center text-xl">
                            <FaCheck className="aboutNumber mr-4" size={28} />
                            Veća produktivnost
                        </li>
                        <li className="mb-4 flex items-center text-xl">
                            <FaCheck className="aboutNumber mr-4" size={28} />
                            Povećanje profita
                        </li>
                        <li className="mb-4 flex items-center text-xl">
                            <FaCheck className="aboutNumber mr-4" size={28} />
                            Brže rješavanje problema
                        </li>
                        <li className="mb-4 flex items-center text-xl">
                            <FaCheck className="aboutNumber mr-4" size={28} />
                            Brže donošenje odluka
                        </li>
                        <li className="mb-4 flex items-center text-xl">
                            <FaCheck className="aboutNumber mr-4" size={28} />
                            Više slobodnog vremena
                        </li>
                        <li className="mb-4 flex items-center text-xl">
                            <FaCheck className="aboutNumber mr-4" size={28} />
                            Smanjenje stresa
                        </li>
                        <li className="mb-4 flex items-center text-xl">
                            <FaCheck className="aboutNumber mr-4" size={28} />
                            Bolje zdravstveno stanje
                        </li>
                    </ul>
                </div>
            </div>*/}

            {/*
            <Testimonials/>
            */}


            {/* Section 8 */}
            <section className="bg-gray-100 p-4 md:p-8 h-auto w-full md:w-screen mb-16 md:px-28">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="orangeColorQuote h-12 mx-auto mb-3" viewBox="0 0 24 27" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"/>
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900">"Vrlo smo zadovoljni sa dosadašnjom
                                suradnjom s tvrtkom Nove mogućnosti, jer nam
                                je njihovo znanje i iskustvo pomoglo u našim projektnim aktivnostima da postanemo
                                konkurentniji na tržištu."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3 mb-72">
                            <img className="w-6 h-6 rounded-full"
                                 src="https://media.licdn.com/dms/image/C4D03AQGXW3NyzoipTA/profile-displayphoto-shrink_200_200/0/1661971906932?e=2147483647&v=beta&t=uQps59ApkkZ8xgj9eGHLjck8E81fmJ8ymLbkhwy0Xy0"
                                 alt="Boris Budinjas vlasnik SAB d.o.o."/>
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <div className="pr-3 font-medium text-gray-900">Boris Budinjaš</div>
                                <div className="pl-3 text-sm font-light text-gray-500">CEO at SAB d.o.o.</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>


            {/* Call to Action Section */}
            <section
                className="sectionOrange flex flex-wrap justify-center shadow-xl rounded-lg py-16 px-4 md:px-8 relative z-10 w-full md:w-11/12 lg:w-11/12 -mt-72">
                <div className="w-full text-center lg:w-8/12">
                    <h3 className="font-semibold text-3xl">Unaprijedite svoje poslovanje</h3>
                    <p className="sectionOrangeSubtext text-lg leading-relaxed mt-4 mb-4">
                        Individualiziranim pristupom rješavamo vaše probleme, povećavamo sigurnost i stabilnost
                        poslovanja, te bolji balans između privatnog i poslovnog života.
                    </p>
                    <button className="animated-button mt-4 buttonOne">
                        Ugovorite sastanak
                        <span className="arrow-icon"><FiArrowRight/></span>
                    </button>
                </div>
            </section>


        </div>
    );
};

export default Home;
