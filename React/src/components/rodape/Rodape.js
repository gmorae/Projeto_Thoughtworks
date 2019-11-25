import React from 'react'
import { Link } from "react-router-dom";
import './Rodape.css'

function Rodape() {

    return (
        <footer className="page-footer font-small unique-color-dark">
            <div className="rod">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">

                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>

                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <Link className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </Link>
                            <Link className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </Link>
                            <Link className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </Link>
                            <Link className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto exemplo" ></hr>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto exemplo" ></hr>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto exemplo" ></hr>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto exemplo" ></hr>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                    </div>
                </div>
            </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <Link href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</Link>
                </div>
        </footer>
    )
}

export default Rodape