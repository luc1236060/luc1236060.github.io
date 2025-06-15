import "./About.css";

const About: React.FC = () => {
    return(
        <section id="About" className="About">
            <div className="About-layout">
                <h2>About Me</h2>
                <p>
                    Computer Science graduate from the University of Central Florida 
                    with a solid foundation in full-stack development, 
                    cloud deployment, and applied machine learning. Experienced 
                    in building and deploying web and desktop applications using 
                    React, Node.js, and Electron, with additional work in 
                    Python-based neural networks and Java encryption tools. 
                    Strong problem-solver with hands-on experience in AWS Lightsail, 
                    open-source contributions, and collaborative development.
                </p>
            </div>
        </section>
    );
};

export default About;