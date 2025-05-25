import "./Projects.css";

const Projects: React.FC = () => {
    return (
        <div className="Projects-layout">
            <h2>Projects</h2>
            <dl className="Projects-list">
                <dt className="Project-title">
                    <h3>Au Automations Website</h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>Developing a React-based website using JSX for structure and HTML/CSS for styling.</p>
                    <ul>
                        <li>
                            <a href="https://www.aa-fl.com/">
                                <i className="fa-solid fa-globe"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        </li>
                    </ul>
                </dd>
                <dt className="Project-title">
                    <h3>Luc Website</h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>Developing a React-based website using TSX for structure and HTML/CSS for styling.</p>
                    <ul>
                        <a href="">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </ul>
                </dd>
                <dt className="Project-title">
                    <h3>Enhanced Dungeon Revealer (A D&D tabletop application)</h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>Developed a responsive UI using HTML, CSS, and JavaScript, and integrated a collaborative whiteboard feature via Excalidraw. 
                        Utilized existing SQL and GraphQL, captured player movement and planning data, then transformed it into dynamic, 
                        interactive visualizations.
                    </p>
                    <a href="">
                            <i className="fa-brands fa-github"></i>
                    </a>
                </dd>
                <dt className="Project-title">
                    <h3>Deployed a LAMP stack application. </h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>
                        Deployed a complete LAMP stack on Amazon Lightsail using the Linux terminal: configured Apache for dynamic content, 
                        integrated MySQL for secure login/account management, and built a PHP backend.
                    </p>
                    <a href="">
                            <i className="fa-brands fa-github"></i>
                    </a>
                </dd>
                <dt className="Project-title">
                    <h3>Deployed a MERN stack application. </h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>
                        Deployed a full MERN stack on Amazon Lightsail using the Linux terminal: React.js built the dynamic front-end interface, 
                        Express.js and Node.js served as the backend and API framework, and MongoDB as the database.
                    </p>
                    <a href="">
                            <i className="fa-brands fa-github"></i>
                    </a>
                </dd>
                <dt className="Project-title">
                    <h3>Velocity/Speed Calculator</h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>Using Python, created a program to calculate velocity/speed of an object and produce a graph</p> 
                </dd>
                <dt className="Project-title">
                    <h3>Decrypter</h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>Using Java, developed a program to decrypt text that was encrypted with different ciphers</p>
                </dd>
                <dt className="Project-title">
                    <h3>Encrypter</h3>
                    <p>
                        <div className="tag-container">
                            <span className="Project-tag">Website</span>
                        </div>
                    </p>
                </dt>
                <dd className="Project-description">
                    <p>Using Java, developed a program to encrypt plain text using different ciphers</p>
                </dd>
            </dl>
        </div>
    );
};

export default Projects;