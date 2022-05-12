import './index.scss'

const DesignPrototype = (props) => {
    return (
        <>
            <section className="project">
                <h2>{props.name}</h2>

                <p>Built with <span className="text-highlight">{props.tech}</span></p>

                <img className="project-img"src={props.imgSrc} alt={props.imgAlt}/>

                <div className="project-buttons">
                    <a className="button-primary" href={props.prototypeLink} target="_blank">View Prototype</a>
                </div>

            </section>
        </>     
    )
}

export default DesignPrototype;