import './index.scss'
import NavBar from '../../components/NavBar'
import ContactForm from '../../components/ContactForm'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Loader from 'react-loaders';

const Contact = () => {
    return (
        <>
            <NavBar />
            <main className="contact-main">
                <ContactForm />

                <div className="contact-links">
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
            </main>
            <Loader type="ball-clip-rotate" />    
        </>
    )
}

export default Contact