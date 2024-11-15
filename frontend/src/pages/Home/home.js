import React from 'react';
import "./home.css";


const Home = () => {
    return (
        <div>
            <div className="container content">
                <div className="row ">
                    <div className="col-sm-3 talk">
                        <h1>Project</h1>
                        <h1>Buddy</h1>
                        <br />
                        <h6 className="bold-four">
                        The idea is to generate a spark among students about the importance of projects through a platform where CIS students of UFV can unite effortlessly and make great things.                        </h6>
                        <br />
                        <h6><a className="btn btn-dark start start-two" href="/dashboard">Get Started</a></h6>
                    </div>
                    <div className="col-sm-9 showcase-img">   
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Lorem Tag</h5>
                                <p class="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Morem Tag</h5>
                                <p class="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Oorem Tag</h5>
                                <p class="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
