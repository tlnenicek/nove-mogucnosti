import React from 'react';
import {FiArrowRight} from "react-icons/fi";

const KonzultantskeUsluge = () => {
    return (
        <div className="w-full max-w-3xl mx-auto mt-4"> {/* Added negative top margin */}
            <ul className="flex flex-col gap-3 list-disc pl-5">
                <li className="liUsluge">
                    <strong className="aboutNumber">Strategijsko savjetovanje:</strong> Definiranje i implementacija dugoročnih ciljeva i strategija rasta.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Operacijsko savjetovanje:</strong> Optimizacija poslovnih procesa za poboljšanje učinkovitosti i smanjenje troškova.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Projektno upravljanje:</strong> Planiranje, provedba i praćenje projekata za uspješno izvršenje.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Inovacije i razvoj proizvoda:</strong> Savjetovanje o inovacijama i razvoju proizvoda za održavanje konkurentske prednosti.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Upravljanje promjenama:</strong> Podrška uvođenju organizacijskih promjena i podrška zaposlenicima.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Financijsko savjetovanje:</strong> Izrada dugoročnih financijskih planova, uključujući proračune i analize.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Upravljanje likvidnošću:</strong> Praćenje novčanih tokova i osiguranje potrebne likvidnosti.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Investicijsko savjetovanje:</strong> Analiza investicija i savjeti o najboljim financijskim strategijama.
                </li>
                <li className="liUsluge">
                    <strong className="aboutNumber">Analiza troškova i prihoda:</strong> Identifikacija mogućnosti za optimizaciju troškova i prihoda.
                </li>
            </ul>

        </div>
    );
};

export default KonzultantskeUsluge;
