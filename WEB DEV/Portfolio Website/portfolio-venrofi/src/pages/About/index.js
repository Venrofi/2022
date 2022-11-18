import './index.scss'
import NavBar from '../../components/NavBar'

import profilePic from '../../assets/about/profile-pic.jpg';
import CV_PL from '../../assets/about/CV_PL.pdf';
import CV_EN from '../../assets/about/CV_EN.pdf';

import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const About = () => {
    return (
        <>
            <NavBar />
            <main className="about-main">
                <h2>My name is <span className="text-highlight">Radek</span>.</h2>  
                <section className="about-hero">
                    <div className="about-text">
                        <p>An aspiring Frontend Developer, hungry for new experiences in the IT industry.</p>

                        <p>I am a Computer Science Student at the Silesian University of Technology. Already in middle school, the topic of Web Development caught my attention and this is the industry where I see my future in. I love creating websites - designing UX / UI as well as turning the design into a working website.</p>

                        <p>I am fluent in English and in my spare time I am slowly learning Italian on my own. On a personal level, I am an open, down to earth person with a lot of positive energy and smiles. I am reliable and capable in fast-paced environments, and I always deliver the finished product on time. I am highly organized and pride myself on being extremely attentive to detail.</p>
                    </div>
                    <div className="about-img">
                        <img src={profilePic} alt="A picture of myself"></img>
                    </div>
                </section>

                <section className="about-details">
                    <div className="about-skills">
                        <h2>My <span className="text-highlight">Skills</span>.</h2>
                        <div className="about-skill">
                            <p>HTML & CSS</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>SASS</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>GIT</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Figma</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>TypeScript</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Angular</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Storybook</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>WordPress</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>MySQL</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>React</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>C#</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                        <div className="about-skill">
                            <p>Java</p>

                            <div>
                                <AiFillStar color="#DA2424"/>
                                <AiFillStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                                <AiOutlineStar color="#DA2424"/>
                            </div>
                        </div>
                    </div>
                    <aside>
                        <div className="about-resume">
                            <h2>My <span className="text-highlight">Resume</span>.</h2>
                            <a className="button-primary" href={CV_EN} download={"Radosław_Terelak_CV_EN"} target="_blank">CV - English</a>
                            <a className="button-primary" href={CV_PL} download={"Radosław_Terelak_CV_PL"} target="_blank">CV - Polish</a>
                        </div>
                        <div className="about-links">
                            <h2>My <span className="text-highlight">Links</span>.</h2>
                            <a href="https://www.linkedin.com/in/radoslaw-terelak/" target="_blank">
                                <div>
                                    <b>LinkedIn</b> - @radoslaw-terelak 
                                </div>
                                <BsLinkedin color="#DA2424"/>
                            </a>
                            <a href="https://github.com/Venrofi" target="_blank">
                                <div>
                                    <b>Github</b> - @Venrofi
                                </div>
                                <BsGithub color="#DA2424"/>
                            </a>
                        </div>
                    </aside>
                </section>

                <div className="about-buttons">
                <Link to="/portfolio" className="button-primary">My Portfolio</Link>
                <Link to="/contact" className="button-outline">Contact Me</Link>
                </div>
            </main>
            <Loader type="ball-clip-rotate" />
        </>  
    )
}

export default About
