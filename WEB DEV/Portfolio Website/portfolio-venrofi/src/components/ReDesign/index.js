import './index.scss'
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

const ReDesign = (props) => {
    return (
        <>
            <section className="project">
                <h2>{props.name}</h2>

                <p>Redesign</p>
                {/* Styles Docs: https://react-compare-slider.vercel.app/?path=/story/demos-handles--individual-styles */}
                <ReactCompareSlider className="project-compare" handle={<ReactCompareSliderHandle style={{color: '#DA2424'}} />}
                    itemOne={<ReactCompareSliderImage src={props.imgSrcOld} alt={props.imgAltOld} />}
                    itemTwo={<ReactCompareSliderImage src={props.imgSrcNew} alt={props.imgAltNew} />}
                />
            </section>
        </>     
    )
}

export default ReDesign;