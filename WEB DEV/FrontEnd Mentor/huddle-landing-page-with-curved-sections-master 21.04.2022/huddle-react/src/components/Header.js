import { StyledHeader, Nav, Logo, Image, FlexHeroCenter, FlexNumbers } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button, ButtonOutline } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"

export default function Header(){
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='Huddle Logo'/>
                    <ButtonOutline>Try It Free</ButtonOutline>
                </Nav>

                <FlexHeroCenter>
                    <div>
                        <h1> Build The Community Your Fans Will Love </h1>
                        <p> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>

                        <Button> Get Started For Free </Button>
                    </div>
                </FlexHeroCenter>

                <Image src='./images/screen-mockups.svg' alt=''/>
                
                <FlexNumbers>
                    <div>
                        <img src="./images/icon-communities.svg" alt="Communities Icon"/>
                        <h2>1.4k+</h2>
                        <p>Communities Formed</p>
                    </div>

                    <div>
                        <img src="./images/icon-messages.svg" alt="Messages Icon"/>
                        <h2>2.7m+</h2>
                        <p>Messages Sent</p>
                    </div>
                </FlexNumbers>
            </Container>
        </StyledHeader>
    )
}