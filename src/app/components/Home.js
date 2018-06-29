import React, {Component} from 'react';
import '../../App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {Slide} from "react-reveal";
import RubberBand from 'react-reveal/RubberBand';

class Dashboards extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <div className={'row'}>
                    {/*intro*/}
                    <Fade>
                        <div className={"intro col-sm-12"}>
                            <div className={"row"}>
                                <div className={"col-sm-12"}>
                                    <nav className="navbar navbar-default navbar-static-top">
                                        <div className="container">
                                            <div className="navbar-header">
                                                <a className="navbar-brand" href="#">
                                                    <div className={"logo_view"}>
                                                        <span>D</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="navbar-right" id="bs-example-navbar-collapse-1">
                                                <ul className="nav navbar-nav">
                                                    <li className="active_"><a href="#">HOME</a></li>
                                                    <li><a href="#sections">ABOUT</a></li>
                                                    <li><a href="#skills">SKILLS</a></li>
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                                           role="button" aria-haspopup="true" aria-expanded="false">FOUND
                                                            OUT <span className="caret"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#"></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">BLOG</a></li>
                                                    <li><a href="#contact">CONTACT</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className={"container"}>
                                    <div className={"col-sm-12"}>
                                        <div className={"intro_details"}>
                                            <div className={"details row"}>
                                                <div className={"col-sm-4 col-md-6 col-md-offset-3"}>
                                                    <h4>Data&nbsp;Scientist, Economist & Software Engineer</h4>
                                                    <span>Innovative data scientist, economist and software engineer with multiple excellence awards. He has expertise in visualization, big data analytics, AI & machine learning, forensics & cognitive cyber-security and econometrics.</span>
                                                    <div className={"row"}>
                                                        <RubberBand>
                                                            <div className={"button_more col-sm-4"}>
                                                                <a href={"#sections"}
                                                                   className={"btn btn-custom btn-block"}>EXPLORE</a>
                                                            </div>
                                                        </RubberBand>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/*content*/}
                    <div className={"sections col-sm-12"} id={"sections"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <Slide bottom>
                                    <div className={"col-sm-6"}>
                                        <div className={"about col-sm-12"}>
                                            <div className={"about_title"}>
                                                <div className={"logo_view"}>
                                                    <span>A</span>
                                                </div>
                                                <h3>ABOUT ME <span></span></h3>
                                            </div>
                                            <div className={"about_details"}>
                                                <p>
                                                    Data scientist and software engineer with expertise in business
                                                    intelligence, big data analytics and building machine learning based
                                                    systems. He has led and been a part of different projects working
                                                    with
                                                    financial, telecommunication, energy and health institutions. His
                                                    research interests include, but are not limited to, signal
                                                    processing,
                                                    pattern recognition, forensincs, macroeconomics and microeconomics.
                                                    He
                                                    has done research specifically in the areas of optical character
                                                    recognition, image denosing using deep neural networks, assessment
                                                    of
                                                    the credibility of one currency in the East African Community in
                                                    terms
                                                    of consumer price inflation, and forecasting and monitoring. His
                                                    recent
                                                    research is on Monitoring and Forecasting Maize Production using
                                                    Satellite Imagery in Rwanda; the paper was published in IEEE
                                                    international conference on Technological Innocations in ICT for
                                                    Agriculture and Rural Development (IEEE TIAR).

                                                    Davy is an accomplished learner with graduate skills in statistics,
                                                    economics and Information Technology (IT). He won graduate
                                                    excellence
                                                    awards, in both Msc in Economics and IT.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div className={"col-sm-6 buttons_about"}>
                                        <div className={"profile_image"}>
                                            <div className={"profile_me"}></div>
                                            <div className={"socials"}>
                                                <a href={"https://www.facebook.com/davy.kanimbasalomon"}
                                                   target={"_blank"}>
                                                    <div className={"socials-facebook"}>
                                                        <i className={"fab fa-facebook-f"}></i>
                                                    </div>
                                                </a>
                                                <div className={"socials-twitter"}>
                                                    <i class="fab fa-twitter"></i>
                                                </div>
                                                <div className={"socials-instagram"}>
                                                    <i className={"fab fa-instagram"}></i>
                                                </div>
                                                <div className={"socials-linkdin"}>
                                                    <i className={"fab fa-linkedin"}></i>
                                                </div>
                                                <div className={"socials-youtube"}>
                                                    <i className={"fab fa-youtube"}></i>
                                                </div>
                                                <div className={"socials-contact"}>
                                                    <a href={"#contact"}>Contact me</a>
                                                </div>
                                            </div>
                                        </div>
                                        <RubberBand>
                                            <div className={"buttons_view"}>
                                                <div className={"row"}>
                                                    <div className={"col-sm-3"}>
                                                        <div className={"panel"}>
                                                            <div className={"icon_view"}><i
                                                                className={"fa fa-download"}></i>
                                                            </div>
                                                            <div className={"panel-body"}><span>DOWNLOAD MY CV</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-3"}>
                                                        <div className={"panel"}>
                                                            <div className={"panel-body"}>
                                                                <div className={"icon_view"}><i
                                                                    className={"fa fa-award"}></i>
                                                                </div>
                                                                <span>MY AWARD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-3"}>
                                                        <div className={"panel"}>
                                                            <div className={"icon_view"}><i
                                                                className={"fa fa-briefcase"}></i>
                                                            </div>
                                                            <div className={"panel-body"}>
                                                                <span>MY WORKING EXPERIENCE</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-3"}>
                                                        <div className={"panel"}>
                                                            <div className={"icon_view"}><i
                                                                className={"fa fa-hands-helping"}></i></div>
                                                            <div className={"panel-body"}><span>CONSULT ME</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </RubberBand>
                                    </div>
                                </Slide>
                                <Slide bottom>
                                    <div className={"skills col-sm-12"} id={"skills"}>
                                        <div className={"skills_title"}>
                                            <div className={"logo_view"}>
                                                <span>V</span>
                                            </div>
                                            <h3>SKILLS <span></span></h3>
                                        </div>
                                        <div className={"skills_content"}>
                                            <div className={"row"}>
                                                <div className={"col-sm-12"}>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>Python</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>99%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>R programming</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>99%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>ReactJS, React-native</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>99%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"col-sm-12"}>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>Java</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>95%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>Java</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>95%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>SQL & NoSQL</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>99%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"col-sm-12"}>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>Spark Apache & Hadoop</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>95%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>Tableau, powerBI & Chartjs</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>95%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>C & C++</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>95%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"col-sm-12"}>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>Android and iOS development</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>95%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>MATLAB, SPSS & E-views</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>99%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"col-sm-4"}>
                                                        <div className={"skill_item"}>
                                                            <div className={"skill_name"}>
                                                                <p>NodeJS & ExpressJS</p>
                                                            </div>
                                                            <div className={"skill_percentage"}>
                                                                <p>99%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                {/*<div className={"foundout col-sm-12"}>*/}
                                {/*<div className={"foundout_title"}>*/}
                                {/*<div className={"logo_view"}>*/}
                                {/*<span>Y</span>*/}
                                {/*</div>*/}
                                {/*<h3>FOUND OUT <span></span></h3>*/}
                                {/*</div>*/}
                                {/*<div className={"foundout_content"}></div>*/}
                                {/*</div>*/}
                                <Slide bottom>
                                    <div className={"contact col-sm-12"} id={"contact"}>
                                        <div className={"contact_title"}>
                                            <div className={"logo_view"}>
                                                <span>Y</span>
                                            </div>
                                            <h3>CONTACT ME <span></span></h3>
                                        </div>
                                        <div className={"contact_content"}>
                                            <div className={"row"}>
                                                <div className={"col-sm-6"}>
                                                    <a href="tel:+13153295130">
                                                        <div className={"col-sm-12 contact_address"}>
                                                            <div className={"circle_icon"}>
                                                                <i class="fas fa-phone"></i>
                                                                <div className={"flag-usa"}/>
                                                            </div>
                                                            <div className={"details_phone"}>
                                                                <p>+1 315 329 5130</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="tel:+13153295130">
                                                        <div className={"col-sm-12 contact_address"}>
                                                            <div className={"circle_icon"}>
                                                                <i class="fas fa-phone"></i>
                                                                <div className={"flag-rwanda"}/>
                                                            </div>
                                                            <div className={"details_phone"}>
                                                                <p>+250 788580730</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="mailto:getinfo@davyuwizerak.com" target={"_top"}>
                                                        <div className={"col-sm-12 contact_address"}>
                                                            <div className={"circle_icon"}>
                                                                <i class="fas fa-envelope"></i>
                                                            </div>
                                                            <div className={"details_phone"}>
                                                                <p>getinfo@davyuwizerak.com</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={"col-sm-6"}>
                                                    <div className={"form"}>
                                                        <form>
                                                            <div className={"panel"} style={{marginTop: 10}}>
                                                                <div className={"panel-heading"}>
                                                                    <span>Please use the form or addresses below to contact me</span>
                                                                </div>
                                                                <div className={"panel-body"}>
                                                                    <div className={"row"}>
                                                                        <div className={"col-sm-12"}>
                                                                            <div className={"col-sm-6"}>
                                                                                <div className={"form-group"}>
                                                                                    <label>Your Name: </label>
                                                                                    <input type={"text"}
                                                                                           className={"form-control"}/>
                                                                                </div>
                                                                            </div>
                                                                            <div className={"col-sm-6"}>
                                                                                <div className={"form-group"}>
                                                                                    <label>Your Email: </label>
                                                                                    <input type={"text"}
                                                                                           className={"form-control"}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={"col-sm-12"}>
                                                                            <div className={"col-sm-6"}>
                                                                                <div className={"form-group"}>
                                                                                    <label>Subject: </label>
                                                                                    <input type={"text"}
                                                                                           className={"form-control"}/>
                                                                                </div>
                                                                            </div>
                                                                            <div className={"col-sm-6"}>
                                                                                <div className={"form-group"}>
                                                                                    <label>Your Phone number: </label>
                                                                                    <input type={"text"}
                                                                                           className={"form-control"}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={"col-sm-12"}>
                                                                            <div className={"col-sm-12"}>
                                                                                <div className={"form-group"}>
                                                                                    <label>Message: </label>
                                                                                    <textarea rows={4}
                                                                                              className={"form-control"}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <center className={"panel-footer"}>
                                                                    <button className={"btn btn-custom"}
                                                                            style={{position: 'relative', top: 5}}>
                                                                        SUBMIT
                                                                    </button>
                                                                </center>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    {/*footer*/}
                    <Slide bottom>
                        <div className={"col-sm-12 footer"}>
                            <center>© Copyright 2017 by davyuwizerak. All Right Reserved.</center>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Dashboards;