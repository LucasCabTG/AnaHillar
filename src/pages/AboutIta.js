import React, { useRef }  from "react"
import '../styles/contact.css'
import { Nav } from "../components/navbar"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/about.css'
import { NavIta } from "../components/navbarIta";

export function AboutIta() {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_jefgs01', 'template_lr9q4tj', form.current, 'sQyI-yEsMH062tK5g')
      .then((result) => {
          toast('Messaggio inviato correttamente')
      }, (error) => {
          toast('Non è stato possibile inviare il messaggio, riprovare tra qualche minuto.')
      });
  };



    return (
        <div>
            <NavIta/>
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
        Artista italo-Argentina, Ana Cecilia Hillar nasce a Santa Fé, Argentina nel 1969, dopo il diploma alla Accademia di Belle Arti di Santa Fe, si trasferisce a Faenza nel 1998 per studiare restauro della ceramica archeologica.<br/>
        Ha scelto la terra, la più primitiva delle tecniche ceramiche come mezzo privilegiato nella sua ricerca, proponendo installazioni di grande introspezione inizialmente portate in un ambito più materico e primordiale, ora volte ad uno sguardo di assoluta leggerezza.<br/>
        Nel lavoro emerge una intenzione d’ascolto verso le origini, la natura umana più essenziale e primitiva, e per questo motivo più istintiva e selvaggia. <br/>
        Sussiste un interesse ad osservare e indagare i segni vitali che legano l’uomo ad altri essere viventi, questa somiglianza che unisce intimamente l’essere umano al mondo naturale, si spezza in tante forme di vita attuale, negando l’ascolto al primordiale.<br/>
        Uno sguardo interrogativo verso l’uomo, l’ambiente naturale, il proprio spazio abitato e abitabile. <br/>
        L’intorno come condizioni per alloggiare la vita, l’intento d’immaginare un habitat leggero e trasparente, elastico, mutabile. Una geografia propria senza confini definiti.<br/>
        Appaiono evidenti riferimenti all’ascolto della vita interna fatta da organi, cellule, membrane, così come alla energia che essi producono e sprigionano e una analogia con l’energia propria di altre forme vitali, geologiche e minerali.<br/>
        La ricerca parte dalla terra come materia primordiale, siamo fatti di terra, riconoscendo in questa la capacità di veicolare il messaggio stesso dell’opera. La scelta di un materiale naturale che conforma gran parte della crosta terrestre non è casuale, ci trasporta alle sue antiche origini geologiche.<br/>
        Lavorare le terre di geografie diverse, significa stabilire contatti con la tradizione locale ripercorrendo la memoria del luogo attraverso la cultura materiale. <br/><br/><br/>

        “L’argilla scelta da Ana Hillar, terra prelevata dalla Terra, da un luogo fisico che<br/>
        conferisce alla materia una potenzialità inesauribile di valenze metaforiche, simboliche e soprattutto energetiche.<br/>
        In effetti, nell’indagine della “memoria”di quella creta prelevata direttamente dai luoghi, e nella ricerca di quella spiritualità connaturata nella materia ceramica stessa, si riassume la poetica<br/>
        di Ana Hillar, la cui opera sembra essere comandata da una sorta<br/>
        d’imperativo naturale, percepibile negli atteggiamenti, nella scelta dei materiali e<br/>
        delle tecniche, nella progettazione delle forme e dei colori.”J.Ruiz de Infante.<br/><br/><br/>

        Ana Hillar fu rivelata alla critica ceramica internazionale come vincitrice del Premio Faenza nella 52 °edizione del Concorso Internazionale della Ceramica d'Arte del 2001 con l'installazione dal titolo Sombra del Viento.<br/>
        Nel 2003 arriva la sua prima mostra personale in Italia: Humano, presso il Museo Internazionale delle Ceramiche in Faenza. <br/>
        Da allora numerose mostre in Italia e all’estero, vive e lavora a Faenza, Italia.<br/>

        </p>
        <p> <h5>Mostre personali </h5> 
            2023 Simbra directa, a cura di Alessandra Carini e Paolo Pileri, Palazzo San Giacomo Russi, RA Catalogo @eee_studio<br/>
            2022 Tummo, Tempesta Gallery, Milan<br/>
            2018 ExtraMurum Arte Contemporanea tra le mura di cinque città venete, a cura di M. Polloniato e F. Scremin. Castello degli Ezzelini, Bassano del Grappa. Catalogo Lampi Creativi<br/>
            2017 Blanco Dentro, a cura di Artealmonte, Palazzo del Monte di Pietà, Forlì FC<br/>
            2014 Artifex - La materia del Tempo, a cura di Marisa Zattini. Galleria Comunale d'Arte, Faenza RA Catalogo Il Vicolo Sezione Arte -Cesena<br/>
            2008 Il Vicolo Gallery. Cesena FC<br/>
            2007 Blanco, Museo Zauli / Banca di Romagna, a cura di Viola Emaldi, Catalogo Banca di Romagna. Faenza RA<br/>
            2006 Galerie Orfeo, curator Susy Ciaccini. Lussemburgo.<br/>
            Después de la noche, Off Gallery, a cura di Silvia Calcagno. Albissola Marina SA<br/>
            Fuori di sé, Rassegna d'Arte Contemporanea, a cura di Stefania Vecchi. Casa Rossigni, Lugo RA<br/>
            2005 Donde pasa el rio. Palazuolo sul Senio FI<br/>
            2004 Ginnico Celeste, a cura di Opera nuova e Art-zat. Il laboratorio dell’Imperfetto, Gambettola FC<br/> 
            2003 Humano, Museo Internazionale della Ceramica in Faenza, a cura di Josune Ruiz de Infante.<br/>
            Catalogo a cura di L. Fabbri <br/>
            De-composizione Galleria Giardino Segreto, a cura di Oscar Aciar. Roma <br/>

            1997Donde el rio termina, a cura di Miguel Gratier. Museo Municipal de Artes Visuales josefa Díaz y Clucellas, Santa Fe, Argentina. Cataologo Fundaciòn Bica.</p> 


      </div>
    </div>
    <div className="cv">
    <p >
        <h5>Mostre colletive, selezione</h5>
        2021 Ancoluto, a cura di Giorgia Pirrone, Galleria Lara & Rino Costa, Valenza<br/>
        2020 Galleria BACC, Scuderie Aldobrandini per l'Arte. Frascati, Rome<br/>
        2019 Benyamini Contemporary Ceramics Center, Tel Aviv, Israel<br/>
        Faenza Contemporanea a cura di O. Dominguez, Regione Emilia Romagna, Bologna<br/>
        Il colore interiore, a cura di M. Zauli, Galleria Facto, Montelupo Fiorentino (FI)<br/>
        2018 European Ceramic, Art Avenue Art Gallery Taoxichuan, Jingdezhen, China<br/>
        Collect Gallery MADEINBRITALY, a cura di V. Emaldi, Londra<br/>
        Gyeonggi International Ceramic Biennale Korea, a cura di I. Biolchini, Icheon, Korea<br/>
        2015/2016 2016 CERAMIX international exhibition on 20th century ceramic sculpture,<br/>
        Bonnefantenmuseum Maastricht, La Maison Rouge Paris. Mostra e catalogo a cura di C. Morineau e L. Pesapane, Netherlands / France<br/>

        59th International Competition of Contemporary Ceramic Art, International Museum of Ceramics in Faenza (RA) Italy<br/>
        Exhibition Ceramics Symposium Gmunden 2015 - Keramikmuseum Westerwald Höhr-Grenzhausen, Germany<br/>
        IKSIT, a cura di G. Nepo-Stieldorf e K. Schmidinger. Kaiserlichen Hofburg, Insbruck, Austria<br/>
        Viaggio attraverso la ceramica, a cura di Vittorio Sgarbi, Vietri sul Mare<br/>
        Nuda Terra, a cura di A. Rubini, Galleria Bruno Lisi, Rome<br/>
        2014 Dejà Vu- Buenos Aires, a cura di F. Bonano. Galleria Macelleria D'Arte/ Museumsnatch, St. Gallen, Switzerland<br/>
        2013 China Caolin Grand Prix for the International Ceramic Art. Jingdezhen City, Great China  <br/>     
        Museum China. Honorable Mention Award.<br/>
        2012 Selvatico Spore due. e bianca. A cura di Massimiliano Fabbri. Chiesa del Pio Sufraggio, Fusignano (RA) Italia.<br/>
        2011 Premio Camera dei deputati per il 150° Aniversario dell’unità d’Italia, a cura di Renata C. Mazzantini. Catalogo Electa. Asta Sotheby’s. Palazzo Montecitorio, Roma<br/>
        </p>

        <p >
        <h5>Collezioni pubbliche</h5> 
        Museo Internazionale delle Ceramiche di Faenza (RA) Italia.<br/>  
        Museo Settore Territorio Arte Contemporanea, Palazzo Comunale Zanelli, Faenza (RA) Italia.  <br/>  
        Nove, Museo Civico della Ceramica (VI) Italia.<br/>
        Museo di Belle Arti Rosa Galisteo de Rodriguez. Santa Fe, Argentina.<br/>
        Palace de Glass, Buenos Aires, Argentina.<br/>
        Museo Nazionale D'Arte, Il Cairo, Egitto.<br/>
        Museo Civico di Nasice, Croatia.<br/>
        Museo Civico di Gmunden, Austria.<br/>
        Ceramic Art Avenue Art Gallery Taoxichuan, Jingdezhen, Cina.<br/>
        Istituto Italiano de Cultura - Tel Aviv, Israele.<br/>

        </p>
    </div>


    <div className="contact-container">
      <h2>Contatto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="from_name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email_id" required />

        <label htmlFor="message">Messaggio:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Inviare</button>
      </form>
    </div>
            <Toaster/>
        </div>
    )
}
