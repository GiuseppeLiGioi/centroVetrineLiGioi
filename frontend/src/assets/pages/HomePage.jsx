
import Carousel from "../components/Carousel"
import { Link } from "react-router-dom"
export default function HomePage(){
    return(
        <>
        
        <Carousel />
        <div className="container-content">
            <div className="container-title-home">

            <h2 className="title-home">I NOSTRI SERVIZI</h2>
            </div>

            <div className="category-containers-home">
            
            <Link to={'/espositori-display'} className="container-single-category-link">            
              <div className="container-single-category">
                <img className="foto-category" src="/lisboa5.jpg" alt="lisboa5" />
                <h5 className="title-category">Titolo Categoria</h5>
                <p className="p-category">Qua scriveremo qualcosa inerente alla categoria</p>
              </div>
            </Link>

             <Link to={'/espositori-display'} className="container-single-category-link">            
              <div className="container-single-category">
                <img className="foto-category" src="/lisboa5.jpg" alt="lisboa5" />
                <h5 className="title-category">Titolo Categoria</h5>
                <p className="p-category">Qua scriveremo qualcosa inerente alla categoria</p>
              </div>
            </Link>

             <Link to={'/espositori-display'} className="container-single-category-link">            
              <div className="container-single-category">
                <img className="foto-category" src="/lisboa5.jpg" alt="lisboa5" />
                <h5 className="title-category">Titolo Categoria</h5>
                <p className="p-category">Qua scriveremo qualcosa inerente alla categoria</p>
              </div>
            </Link>

             <Link to={'/espositori-display'} className="container-single-category-link">            
              <div className="container-single-category">
                <img className="foto-category" src="/lisboa5.jpg" alt="lisboa5" />
                <h5 className="title-category">Titolo Categoria</h5>
                <p className="p-category">Qua scriveremo qualcosa inerente alla categoria</p>
              </div>
            </Link>

             <Link to={'/espositori-display'} className="container-single-category-link">            
              <div className="container-single-category">
                <img className="foto-category" src="/lisboa5.jpg" alt="lisboa5" />
                <h5 className="title-category">Titolo Categoria</h5>
                <p className="p-category">Qua scriveremo qualcosa inerente alla categoria</p>
              </div>
            </Link>

             <Link to={'/espositori-display'} className="container-single-category-link">            
              <div className="container-single-category">
                <img className="foto-category" src="/lisboa5.jpg" alt="lisboa5" />
                <h5 className="title-category">Titolo Categoria</h5>
                <p className="p-category">Qua scriveremo qualcosa inerente alla categoria</p>
              </div>
            </Link>
            
              
            </div>
        </div>
        </>
    )
}