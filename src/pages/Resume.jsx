export default function Resume() {
    return (
        // <!-- Resume Section Design -->
        <section className="resume" id="resume">
            <h2 className="heading">My <span>Resume</span></h2>
            <a href="/docs/Elisse G Resume.pdf" className="btn" download>Download My Resume</a>
    
            {/* <!-- Front-End and Back-End Proficiencies Section --> */}
            <section className="proficiencies">
                <h2 className="heading">My <span>Proficiencies</span></h2>
    
                <div className="proficiency-container">
                    {/* <!-- Front-End Proficiencies --> */}
                    <div className="front-end">
                        <h3>Front-End Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
    
                    {/* <!-- Back-End Proficiencies --> */}
                    <div className="back-end">
                        <h3>Back-End Proficiencies</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
} 