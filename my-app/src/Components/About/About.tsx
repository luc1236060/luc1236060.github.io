import "./About.css";

const About: React.FC = () => {
    return(
        <section id="About" className="About">
            <div className="About-layout">
                <h2>About Me</h2>
                <p>
                    My name is Louis Au, and I'm a recently graduated software engineer. I got interested in programming and software engineering
                    at a young age through video games and would love to eventually develop one of my own
                    in the future. My career into this field started with my education in Computer Science at UCF,
                    where I worked on many projects. Being fresh out of college I'm now able to apply myself having
                    devloped a couple websites as well a web app. Currently I am working on some personal projects
                    to better my skills and range to help me increase my professional experience.
                </p>
            </div>
        </section>
    );
};

export default About;