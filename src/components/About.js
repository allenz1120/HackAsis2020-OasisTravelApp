import React from "react";
import Navbar from './NavBar';
import Footer from './Footer';
import Harsh from './../static/Harsh.jpg';
import Ibrahim from './../static/Ibrahim.jpg';
import Brian from './../static/Brian.jpg';
import Alex from './../static/Alex.JPG';
import Allen from './../static/Allen.JPG';
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";



const About = () => {
    return (
        <div className='about'>
            <Navbar />
            <div className="row textArea">
                <div className="col-lg-4 text-center">
                    <img className="rounded-circle" src={Brian} alt="Generic placeholder" width="200" height="200"></img>
                    <div>
                        <div className="row bio">
                            <p className='name'>Brian Jung, Boston University 2022</p>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/brian-jung-b85373198/'><img src={require('./../static/linkedin.svg')} className='logo' fluid /></a>
                        </div>
                        <p>Biomedical Engineer</p>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <img className="rounded-circle" src={Harsh} alt="Generic placeholder" width="200" height="200"></img>
                    <div>
                        <div className="row bio">
                            <p className='name'>Harsh Hemlani, Boston University 2022</p>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/harsh-hemlani/'><img src={require('./../static/linkedin.svg')} className='logo' fluid /></a>
                        </div>
                        <p>Mechanical Engineer</p>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <img className="rounded-circle" src={Alex} alt="Generic placeholder" width="200" height="200"></img>

                    <div>
                        <div className="row bio">
                            <p className='name'>Alex Prior, Boston University 2022</p>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/alexjprior/'><img src={require('./../static/linkedin.svg')} className='logo' fluid /></a>
                        </div>
                        <p>Computer Engineer</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-center">
                    <img className="rounded-circle" src={Allen} alt="Generic placeholder" width="200" height="200"></img>
                    <div>
                        <div className="row bio">
                            <p className='name'>Allen Zou, Boston University 2022</p>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/allen-zou/'><img src={require('./../static/linkedin.svg')} className='logo' fluid /></a>
                        </div>
                        <p>Computer Engineer</p>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <img className="rounded-circle" src={Ibrahim} alt="Generic placeholder" width="200" height="200"></img>
                    <div>
                        <div className="row bio">
                            <p className='name'>Ibrahim Chand, Boston University 2022</p>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ichand/'><img src={require('./../static/linkedin.svg')} className='logo' fluid /></a>
                        </div>
                        <p>Computer Engineer</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;

