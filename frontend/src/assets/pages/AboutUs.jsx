import Carousel from "../components/Carousel"

export default function AboutUs() {
    return (
        <>
            <Carousel />

            <div className="container-content">
                <h1 className="title-home title-about">CHI SIAMO</h1>
                <p className="p-aboutUs">Da oltre 20 anni arrediamo negozi con passione e competenza, curando ogni dettaglio per trasformare gli spazi in ambienti funzionali, eleganti e capaci di valorizzare al meglio i prodotti.</p>

                <div className="container-description-about">
                    <img src="/lisboa5.jpg" alt="lisboa5" className="img-desc-about" />
                    <p className="p-desc-about">Qua ci sarà del testo che dovrà rimanere centrato al centro delle due foto</p>
                    <img src="/lisboa5.jpg" alt="lisboa5" className="img-desc-about" />
                </div>



                <h2 className="title-home title-about-bottom">LE NOSTRE REALIZZAZIONI</h2>

                <div className="container-achievements">
                 <div className="container-single-achievement">
                   <img src="/lisboa5.jpg" alt="lisboa5" />
                   <h3 className="title-achievement"><strong>Titolo Realizzazione</strong></h3>
                   <p className="p-achievement">qua scriveremo qualcosa sulla realizzazione</p>
                 </div>

                 <div className="container-single-achievement">
                   <img src="/lisboa5.jpg" alt="lisboa5" />
                   <h3 className="title-achievement"><strong>Titolo Realizzazione</strong></h3>
                   <p className="p-achievement">qua scriveremo qualcosa sulla realizzazione</p>
                 </div>

                 <div className="container-single-achievement">
                   <img src="/lisboa5.jpg" alt="lisboa5" />
                   <h3 className="title-achievement"><strong>Titolo Realizzazione</strong></h3>
                   <p className="p-achievement">qua scriveremo qualcosa sulla realizzazione</p>
                 </div>

                 <div className="container-single-achievement">
                   <img src="/lisboa5.jpg" alt="lisboa5" />
                   <h3 className="title-achievement"><strong>Titolo Realizzazione</strong></h3>
                   <p className="p-achievement">qua scriveremo qualcosa sulla realizzazione</p>
                 </div>
                </div>

                <div className="timeline-horizontal">
                    <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <h4 className="h-timeline-about">Fondazione</h4>
                        <p className="p-timeline-about">Anno, contesto iniziale...</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <h4 className="h-timeline-about">Crescita / Evoluzioni</h4>
                        <p className="p-timeline-about">Traguardi principali</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <h4 className="h-timeline-about">Oggi</h4>
                        <p className="p-timeline-about">Progetti attuali, valori...</p>
                    </div>



                    
                </div>
                    <div className="container-contacts-partner">
                        <div className="container-about-contacts">
                            <h3 className="title-about-contacts">CONTATTACI</h3>
                           <ul>
                            <li><span>📞</span><strong>Cellulare:</strong><a href="tel:+39 3284595823">+39 3284595823</a></li>
                            <li><span>☎️</span><strong>Tel fisso:</strong><a href="tel:+39078925580">+39 078925580</a></li>
                            <li><span>✉️</span><strong>E-mail:</strong><a href="mailto:ligioimarco@gmail.com">ligioimarco@gmail.com</a></li>
                           </ul>
                        </div>
                        <div className="container-about-partner">
                            <h3 className="title-about-contacts">AZIENDE PARTNER</h3>

                        </div>

                    </div>



            </div>
        </>
    )
}