const Content = () => {
    return (
        <div>
            <div className="row content" id="landingPage">
                <div className="d-flex content-container flex-column justify-content-center align-items-center">
                    <div className="imageBackground">
                        <img
                            src="https://cdn.digitbin.com/wp-content/uploads/Intentionally-created-Blank-Profile.jpg"
                            className="imageSize"
                        />
                    </div>
                    <div className="mt-5">
                        <h1 className="name"><b>ANGELITO TEJANO</b></h1>
                        <h3 className="text-white text-center">Aspiring Web Developer</h3>
                    </div>
                </div>
            </div>
            <div className="row portfolio justify-content-center" id="language">
                <div className="container">
                    <div className="row gx-5">
                        <h2>PROGRAMMING LANGUAGE</h2>
                        <div className="col-sm flex-grow-1 gy-5 align-content-center">
                            <img src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png" className="portfolioLogo" />
                        </div>
                        <div className="col-sm flex-grow-1 gy-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png?20170928190710" className="portfolioLogo " />
                        </div>
                        <div className="col-sm flex-grow-1 gy-5">
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360" className="portfolioLogo" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm gy-5 ">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" className="portfolioLogo" />
                        </div>
                        <div className="col-sm gy-5">
                            <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/php-512.png" className="portfolioLogo" />
                        </div>
                        <div className="col-sm gy-5">
                            <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" className="portfolioLogo circleBorder" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row about" id="about">
                <section className="section about-section" id="about">
                    <div className="container addPaddingTop">
                        <div className="row align-items-center justify-content-around flex-row-reverse">
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <h3 className="dark-color">Do some awesome stuff with me.</h3>
                                    <h4 className="theme-color">Web Developer</h4>
                                    <p></p>
                                    <div className="btn-bar">
                                        <a className="px-btn theme" href="https://github.com/litotejano1727?tab=repositories" target="_blank">View Works</a>
                                        <a className="px-btn theme-t" href="#">Download CV</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <img className="imageSize" src="https://cdn.digitbin.com/wp-content/uploads/Intentionally-created-Blank-Profile.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="row contact" id="contact">
                <section className="vh-100 contactbg">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black borderRadius25">
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">CONTACT ME</p>
                                                <form className="mx-1 mx-md-4">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="name" className="form-control" />
                                                            <label className="form-label" htmlFor="name">Your Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="email" className="form-control" />
                                                            <label className="form-label" htmlFor="email">Your Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="number" className="form-control" />
                                                            <label className="form-label" htmlFor="number">Number</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-message fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="message" className="form-control" />
                                                            <label className="form-label" htmlFor="message">Message</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="button" className="btn btn-primary btn-lg">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <img src="https://st2.depositphotos.com/4012355/7516/i/950/depositphotos_75162105-stock-photo-contact-me.jpg"
                                                    className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Content;