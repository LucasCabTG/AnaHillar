import React, { useRef }  from "react"
import '../styles/contact.css'
import { Nav } from "../components/navbar"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/about.css'

export function About() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jefgs01', 'template_lr9q4tj', form.current, 'sQyI-yEsMH062tK5g')
        .then((result) => {
            toast('Message sent successfully')
        }, (error) => {
            toast('Your message could not be sent, please try again in a few minutes.')
        });
    };



    return (
        <div>
            <Nav/>
            <div className="about-container">
      <div className="img-about">
        <img
          src="https://ik.imagekit.io/xqhcmqpqo/bio/Ana%20Hillar.jpg?updatedAt=1715957187349"
          alt="Ana Hillar"
        />
                <img
          src="https://ik.imagekit.io/xqhcmqpqo/bio/ph%20Sofia%20Be%C3%A7a0.JPG?updatedAt=1715957186946"
          alt="Ana Hillar"
        />
      </div>
      <div className="text-about">
        <p>
        Italo-Argentine artist, Ana Hillar was born in Santa Fe, Argentina in 1969. After graduating from the Academy of Fine Arts in Santa Fe, she moved to Faenza in 1998 to study the restoration of archaeological ceramics.<br/>
        She has chosen earth, the most primitive of ceramic techniques, as the privileged medium in her research, proposing installations of great introspection that were initially brought into a more material and primordial sphere, now aimed at a look of absolute lightness.<br/>
        What emerges in the work is an intention to listen to the origins, to the most essential and primitive human nature, and for this reason more instinctive and wilder.<br/>
        There is an interest in observing and investigating the vital signs that link man to other living beings, this similarity that intimately unites the human being to the natural world, is broken in so many forms of present-day life, denying listening to the primordial.<br/>
        A questioning gaze towards man, the natural environment, his own inhabited and habitable space.<br/>
        There are clear references to listening to the internal life made up of organs, cells, membranes, as well as the energy they produce and release, and an analogy with the energy of other life forms, geological and mineral.<br/>
        The research starts from the earth as primordial matter, we are made of earth, recognising in this the capacity to convey the very message of the work. The choice of a natural material that forms a large part of the earth's crust is not random, it transports us to its ancient geological origins.<br/>
        The choice of working with soils from different geographies demonstrates a desire to establish contact with local traditions by tracing the memory of places through material culture.
        Ana Hillar was revealed to international ceramic critics as the winner of the Faenza Prize in the 52nd edition of the International Competition of Ceramic Art in 2001 with the installation entitled "Sombra del Viento".<br/>
        2003 saw her first solo exhibition in Italy: Humano, at the Museo Internazionale delle Ceramiche in Faenza.<br/>
        Since then, numerous exhibitions in Italy and abroad, she lives and works in Faenza, Italy.
        </p>
        <p> <h5>Solo show </h5> 
            2023 Simbra directa, curated by Alessandra Carini and Paolo Pileri, Palazzo San Giacomo Russi, Ravenna. Catalogue @eee_studio<br/>
            2022 Tummo curated by Tempesta Gallery, Milan<br/>
            2018 ExtraMurum Arte Contemporanea tra le mura di cinque città venete, curated by M. Polloniato and F. Scremin. Castello degli Ezzelini, Bassano del Grappa. Catalogue edited by Lampi Creativi<br/>
            2017 Blanco Dentro, curated by Artealmonte, Palazzo del Monte di Pietà, Forlì (FC)<br/>
            2014 Artifex - La materia del Tempo, curated by Marisa Zattini. Galleria Comunale d'Arte, Faenza (RA) Italy. Catalogue edited by Il Vicolo Sezione Arte -Cesena<br/>
            2008 Il Vicolo Gallery, curator M. Zattini. Cesena (FC) Italia.<br/>
            2007 Blanco, Museo Zauli / Banca di Romagna, curator V. Emaldi. Faenza (RA) Italia.<br/>
            2006 Galerie Orfeo, curator S. Ciaccini. Lussemburgo.<br/>
                    Después de la noche, Off Gallery, curator S. Calcagno. Albissola Marina (SA), Italia.<br/>
            Fuori di sé, Rassegna d'Arte Contemporanea, curated by Stefania Vecchi. Casa Rossigni, Lugo (RA).<br/>
            2005 Donde pasa el rio. Cultural Department of Palazuolo sul Senio (FI), Italy.<br/>
            2004 Ginnico Celeste, curator Opera nuova e Art-zat. Il laboratorio dell’Imperfetto, Gambettola (FC) Italia.<br/> 
            2003 Humano, Museo Internazionale della Ceramica in Faenza (RA) Italy, curator J. Ruiz de Infante, Catalogue edited by L. Fabbri<br/>
            Giardino Segreto Gallery, curator Oscar Aciar. Roma, Italia. <br/>
            1997 Donde el rio termina, curator M. Gratier. Museo Municipal de Artes Visuales, Santa Fe, Argentina. Catalogue Bica Fundation. </p> 


      </div>
    </div>
    <div className="cv">
    <p >
        <h5>Selection of group exhibitions</h5>
        2021 Ancoluto, curated by Giorgia Pirrone, Galleria Lara & Rino Costa, Valenza<br/>
        2020 Galleria BACC, Scuderie Aldobrandini per l'Arte. Frascati, Rome<br/>
        2019 Benyamini Contemporary Ceramics Center, Tel Aviv, Israel<br/>
        Faenza Contemporanea curated by Oscar Dominguez, Regione Emilia Romagna, Bologna<br/>
        Il colore interiore, curated by Matteo Zauli, Galleria Facto, Montelupo Fiorentino (FI)<br/>
        2018 European Ceramic, Art Avenue Art Gallery Taoxichuan, Jingdezhen, China<br/>
        Collect Gallery MADEINBRITALY, curated by Viola Emaldi, Londora<br/>
        Gyeonggi International Ceramic Biennale Korea, curated by Irene Biolchini, Icheon, Korea<br/>
        2015/2016 CERAMIX international exhibition on 20th century ceramic sculpture, Bonnefantenmuseum Maastricht, Netherlands - Paris, France, La Maison Rouge and Sèvres Cité de la Céramique<br/>
        59th International Competition of Contemporary Ceramic Art, International Museum of Ceramics in Faenza (RA) Italy<br/>
        Exhibition Ceramics Symposium Gmunden 2015 - Keramikmuseum Westerwald Höhr-Grenzhausen, Germany<br/>
        Journey through Ceramics, curated by Vittorio Sgarbi, Vietri sul Mare<br/>
        Nuda Terra, curated by Antonello Rubini, Galleria Bruno Lisi, Rome<br/>
        2014 Dejà Vu- Buenos Aires, curated by Francesco Bonano. Galleria Macelleria D'Arte/ Museumsnatch, St. Gallen, Switzerland<br/>
        2011 Chamber of Deputies Prize for the 150th anniversary of the Unification of Italy. Curated by Renata C. Mazzantini, Electa Catalogue. Palazzo Montecitorio, Rome, Italy. Sotheby's auction<br/>
        </p>

        <p >
        <h5>Public collections:</h5>
        International Museum of Ceramics, Faenza (RA) Italy.  <br/>  
        Territory Sector Museum: Contemporary Art. Municipal Palace in Via Zanelli, Faenza (RA) Italy.  <br/>  
        Nove, Museo Civico della Ceramica (VI) Italy.<br/>
        Provincial Museum of Fine Arts Rosa Galisteo de Rodriguez. Santa Fe, Argentina.<br/>
        Palace de Glass, Buenos Aires, Argentina.<br/>
        National Museum of Art, Cairo, Egypt.<br/>
        Nasice Municipal Museum, Croatia.<br/>
        Municipal Museum Gmunden, Austria.<br/>
        Ceramic Art Avenue Art Gallery Taoxichuan, Jingdezhen, China.<br/>
        </p>
    </div>


    <div className="contact-container">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="from_name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email_id" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
            <Toaster/>
        </div>
    )
}
