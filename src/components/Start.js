import Head from 'next/head';
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";

const Start = () => {
    return (
        <>
            <Head>
                <title>Start | My Business</title>
                <meta name="description" content="Details about our starting services." />
            </Head>
            {/* Section START */}
            <section className="relative z-0 h-auto w-full flex flex-col px-4 md:px-6 lg:px-28 m-auto">
                <div className="text-center">
                    <div className="mb-20 mt-8 text-center">
                        <div className="text-3xl font-bold mb-4 text-black">
                            <h1 className="">Start</h1>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8 items-center">
                        <div className="flex flex-col md:flex-row w-full max-w-4xl">
                            <h2 className="font-bold mr-12 mb-2 md:mb-0 md:w-1/5 text-left">Stanje</h2>
                            <p className="mt-1 md:mt-0 mb-4 md:mb-0 md:w-4/5 text-left">
                                Samostalni ste poduzetnik ili imate mali tim koji uključuje asistente i administrativno osoblje. Tržišno se želite pozicionirati s prepoznatljivim proizvodom. Pretpostavka je da postoji tržište za vaš proizvod.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row w-full max-w-4xl">
                            <h2 className="font-bold mr-12 mb-2 md:mb-0 md:w-1/5 text-left">Problem</h2>
                            <p className="mt-1 md:mt-0 mb-4 md:mb-0 md:w-4/5 text-left">
                                Kompletno znanje i vještine su kod poduzetnika i stalno se prilagođavate uvjetima na tržištu zbog ograničenog vremena nemate dovoljno kapaciteta. Potrebno vam je povećanje profitabilnosti. Stalno prilagođavanje kupcima vam onemogućava da standardizirate svoje proizvode, kako bi vas asistenti i administrativno osoblje lakše pratilo, a vi pratili njihovu produktivnost. Zbog stalne promjene i prilagodbe kupcima stalno ste pod stresom vi i vaši zaposlenici, koji sve više gube samopouzdanje. Počinje se gubiti povjerenje, a samim tim urušavaju se međuljudski odnosi. Gubite motivaciju i razmišljate da to sve napustite.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row w-full max-w-4xl">
                            <h2 className="font-bold mr-12 mb-2 md:mb-0 md:w-1/5 text-left">Rješenje</h2>
                            <p className="mt-1 md:mt-0 mb-4 md:mb-0 md:w-4/5 text-left">
                                Vraćanje na početnu viziju i ciljeve koje ste si postavili na samom početku. Identifikacija ciljnog tržišta te definiranje proizvoda i procesa pružanja usluga. Definiranje poslovnih procesa i načina praćenja uspješnosti. Izgradnja vlastitog brenda, te osiguranje proračuna za kontinuirane promidžbene aktivnosti. Identifikacija vlastitog kapaciteta i cijena te ograničavanje poslova kako bi se zadržala očekivana kvaliteta usluga.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row w-full max-w-4xl">
                            <h2 className="font-bold mr-12 mb-2 md:mb-0 md:w-1/5 text-left">Ciljna skupina</h2>
                            <p className="mt-1 md:mt-0 mb-4 md:mb-0 md:w-4/5 text-left">
                                Mikro poduzetnici, jedna hijerarhijska razina upravljanja, te izmiješane funkcije.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row w-full max-w-4xl">
                            <h2 className="font-bold mr-12 mb-2 md:mb-0 md:w-1/5 text-left">Naša pomoć</h2>
                            <p className="mt-1 md:mt-0 mb-8 md:w-4/5 text-left">
                                Sastoji se od identifikacije usluge, identifikacije ciljne skupine kupaca, razvoja poslovnih procesa i razvoja organizacije, kroz delegiranje poslovnih aktivnosti za asistente i administrativno osoblje, a samim tim i standardizacija usluge. Pomoć u definiranju uloga članova kao i usuglašavanje obostranih očekivanja.
                            </p>
                        </div>
                    </div>
                    <button className="animated-button mt-8 mb-24">
                        Ugovorite sastanak
                        <span className="arrow-icon"><FiArrowRight /></span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Start;
