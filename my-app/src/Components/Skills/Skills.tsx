import "./Skills.css";

const Skills: React.FC = () => {
    return (
        <div className="Skills">
            <h2>Skills</h2>
            <ul className="Code-list">
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>C</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
            <ul className="Other-list">
                <li>Languages - English, Vietnamese</li>
                <li>Microsoft Word/Powerpoint</li>
            </ul>
        </div>
    );
};

export default Skills;