import { StyledCard, WavyBg } from "./styles/Card.styled";

export default function Card({item: {id, title, body, image}}){
    return(
        <div>
            <WavyBg display={id % 2 === 0 && 'none'}>
                <img src="./images/bg-section-top-desktop-1.svg" alt=""/>
            </WavyBg>

            <StyledCard layout={id % 2 === 0 && 'row-reverse'} bgColor={id % 2 === 0 && '#fff'}>
                <div>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
                <div>
                    <img src={`./images/${image}`} alt="" />
                </div>
            </StyledCard>

            <WavyBg display={id % 2 === 0 && 'none'}>
                <img src="./images/bg-section-bottom-desktop-1.svg" alt=""/>
            </WavyBg>
        </div>
    )
}