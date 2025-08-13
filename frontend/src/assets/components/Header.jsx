import Contacts from "./Contacts"
import NavBar from "./NavBar"
export default function Header() {
    return (
        <div className="container-header">
            <div className="container-single-header">
                <Contacts />
            </div>
            <div className="container-single-header-bottom">
                <div className="container-logo-header">
                    <figure>
                        <img src="logovetrine.jpg" alt="foto logo" />
                    </figure>
                </div>
                <div className="container-navbar-header">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}