import React from "react";

import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="page-title">Naše Usluge</h1>

            <div className="service-card workshops">
                <h2>Savetovanje</h2>
                <p>Savetodavni rad podrazumeva pružanje pomoći i podrške u rešavanju emotivnih i
                    interpersonalnih odnosa, učenje strategija suočavanja sa stresom i povećanje kvaliteta
                    života. Ova usluga je posebno pogodna za one koji traže profesionalnu podršku u
                    suočavanju sa stresom, prokrastinacijom (odlaganjem obaveza), međuljudskim
                    odnosima ili periodima tranzicije (promena mesta prebivališta, posla, razvod, itd.).
                    Pružamo vam poverljiv prostor za traživanje rešenja i promovisanje psiho-
                    emocionalne ravnoteže, vodeći vas ka razvoju emocionalne otpornosti i
                    samopouzdanja.
                </p>
            </div>

            {/* Add more service cards as needed */}

        </div>
    );
}

export default Services;