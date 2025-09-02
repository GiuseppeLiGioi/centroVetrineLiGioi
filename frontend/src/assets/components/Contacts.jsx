export default function Contacts() {
    return (
        <div className="container-contacts">
            <div className="container-only-contacts">

                <p className="p-contacts">
                    <span className="icon">☎️</span> <a className="a-contacts" href="tel:+39078925580">+39 0789 25580</a>
                </p>
                <p className="p-contacts">
                    <span className="icon">✉️</span> <a className="a-contacts" href="mailto:ligioimarco@gmail.com">ligioimarco@gmail.com</a>
                </p>
            </div>
            <div className="container-searchbar">
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Cerca"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-light" type="submit">Cerca</button>
                </form>


            </div>
        </div>
    )
}