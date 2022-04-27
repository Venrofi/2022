import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons(){
    return(
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com" target="_blank"> <FaTwitter/> </a>
            </li>
            <li>
                <a href="https://facebook.com" target="_blank"> <FaFacebook/> </a>
            </li>
            <li>
                <a href="https://linkedin.com" target="_blank"> <FaLinkedin/> </a>
            </li>
        </StyledSocialIcons>
    )
}