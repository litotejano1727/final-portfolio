
const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row header" id="navbar">
                <div className="col">

                    <div className="container text-center mt-3 text-white">
                        <a href="#landingPage">
                            <h1 className="name" id="header" >ANGELITO TEJANO</h1>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="d-flex justify-content-evenly mt-3 text-white">
                            <a href="#language"><h2 id="fontSize">LANGUAGES</h2></a>
                            <a href="#about"><h2 id="fontSize1">ABOUT</h2></a>
                            <a href="#contact"><h2 id="fontSize2">CONTACT</h2></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;