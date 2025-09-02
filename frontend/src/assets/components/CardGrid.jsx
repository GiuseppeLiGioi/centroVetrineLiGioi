import { useState } from "react"

export default function CardGrid() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = ["/lisboa5.jpg", "/lisboa6.jpg"]

    const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length)


    return (
        <div className="container-cards-component">

            <div className="container-card-component">
                <div className="card-carousel">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`img-${index}`}
                            className={index === currentIndex ? "active" : ""}
                        />
                    ))}

                    <button onClick={prevImage} className="btn-carousel-prev"> ‹ </button>
                    <button onClick={nextImage} className="btn-carousel-next"> › </button>
                </div>

                <h4 className="title-product">Nome Prodotto</h4>

                <button className="btn-accordion" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Riduci" : "Estendi"}</button>


                {
                    isOpen && (

                        <div className="accordion-content">
                            <p>Descrizione completa del prodotto...</p>
                            <p>Prezzo:</p>
                            <p>altezza:</p>
                            <p>larghezza:</p>
                            <p>profondità:</p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}