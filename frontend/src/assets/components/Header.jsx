import Contacts from "./Contacts"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="container-header">
            <div className="container-single-header">
                <Contacts />
            </div>
            <div className="container-single-header-bottom">
                <div className="container-logo-header">
                    <Link to={'/'}>
                    <figure>
                        <img src="logovetrine.jpg" className="foto-logo" alt="foto logo" />
                    </figure>
                    </Link>
                </div>
                <div className="container-navbar-header">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}