import './index.scss'

const LiveSite = (props) => {
    return (
        <>
            <section className="project">
                <h2>{props.name}</h2>

                <p>Built with <span className="text-highlight">{props.tech1}</span> & <span className="text-highlight">{props.tech2}</span>
                </p>

                <img className="project-img"src={props.imgSrc} alt={props.imgAlt}/>

                <div className="project-buttons">
                    <a className="button-primary" href={props.siteLink} target="_blank">Preview Site</a>
                    <a className="button-primary" href={props.codeLink} target="_blank">View Code</a>
                </div>
            </section>
        </>     
    )
}

export default LiveSite;