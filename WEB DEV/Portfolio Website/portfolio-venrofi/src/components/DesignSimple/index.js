import './index.scss'

const DesignSimple = (props) => {
    return (
        <>
            <section className="project">
                <h2>{props.name}</h2>

                <p>Built with <span className="text-highlight">{props.tech}</span></p>

                <img className="project-img"src={props.imgSrc} alt={props.imgAlt}/>
            </section>
        </>     
    )
}

export default DesignSimple;