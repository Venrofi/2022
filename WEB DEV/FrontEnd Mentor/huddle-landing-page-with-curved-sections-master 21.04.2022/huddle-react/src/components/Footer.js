import SocialIcons from "./SocialIcons"
import { Button } from "./styles/Button.styled"
import { StyledFooter, WavyBg, FootContainer, Credits } from "./styles/Footer.styled"

export default function Footer(){
    return(
        <div>
            <WavyBg>
                <img src="./images/bg-footer-top-desktop.svg" alt=""/>
            </WavyBg>
        
            <StyledFooter>
                <FootContainer>
                    <div>
                        <img src="./images/logo_white.svg" alt="Huddle White Logo"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div>
                            <img src="./images/icon-phone.svg" alt="Phone Icon"/>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div>
                            <img src="./images/icon-email.svg" alt="E-mail Icon"/>
                            <p>example@huddle.com</p>
                        </div>
                    </div>
                    <div>
                        <h3>NEWSLETTER</h3>
                        <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                        send you spam or pass on your email address</p>
                        <div id="mail">
                            <input type="email"></input>
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </FootContainer>

                <SocialIcons />

                <Credits>
                    <p>&copy; 2022 Huddle. All rights reserved</p>
                    <p>
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                        Coded by <a href="https://venrofi.netlify.app/" target="_blank" >Radosław Terelak</a>.
                    </p>
                </Credits>
            </StyledFooter>
        </div>
    )
}