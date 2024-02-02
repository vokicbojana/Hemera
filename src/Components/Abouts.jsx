import React from "react";

import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <div className="team-section">
                <div className="team-member">
                    <div className="text">
                        <h2>Marina Bajin</h2>
                        <p>Marina Bajin je stručnjak u oblasti psihologije sa bogatim iskustvom u radu sa pojedincima i grupama.
                            Njen pristup je posvećen, empatičan i usmeren ka podršci klijentima u postizanju emocionalnog blagostanja.
                            Sa fokusom na različite aspekte ljudskog ponašanja, Marina koristi raznolike metode i tehnike kako bi pomogla
                            klijentima da prevaziđu izazove i razviju lični rast.</p>
                    </div>
                    <div className="image">
                        <img src="/Assets/Images/profil4.jpg" alt="Team Member 1" />
                    </div>
                </div>

                <div className="team-member">
                    <div className="text">
                        <h2>Marinina Drugarica</h2>
                        <p>Marinina Drugarica je iskusna savetnica koja se posvećuje podršci klijentima u postizanju emocionalne ravnoteže.
                            Sa pažljivim pristupom i razumevanjem, ona radi na razvoju pozitivnih promena u životima svojih klijenata.
                            Kroz svoj rad, Marinina Drugarica kombinuje različite pristupe i tehnike kako bi pomogla pojedincima u suočavanju sa izazovima
                            i postizanju ličnog razvoja.</p>
                    </div>
                    <div className="image">
                        <img src="/Assets/Images/profil5.jpg" alt="Team Member 2" />
                    </div>
                </div>
            </div>

            <hr />

            <div className="mission-section">
                <div className="mission-text">
                    <h2>Naša Misija</h2>
                    <p>
                        Naša misija je posvećena pružanju podrške pojedincima na njihovom putu ka emocionalnom blagostanju i ličnom razvoju.
                        Verujemo u snagu ljudskog uma i srca, te se trudimo da stvorimo okruženje gde svaki pojedinac može otkriti svoj unutrašnji potencijal.
                    </p>
                    <p>
                        Kroz pažljivo vođene seanse i individualizovane pristupe, naš tim stručnjaka radi na razumevanju i rešavanju različitih životnih izazova.
                        Cilj nam je pomoći klijentima da razviju emocionalnu otpornost, samopouzdanje i da pronađu smisao u svakodnevnim iskustvima.
                    </p>
                    <p>
                        Verujemo u važnost zajednice i podrške, te težimo izgradnji mostova između pojedinaca kako bismo zajedno stvarali zdravije i srećnije okoline.
                        Naša posvećenost radu je inspirisana željom da doprinesemo pozitivnim promenama u životima naših klijenata i šire zajednice.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;