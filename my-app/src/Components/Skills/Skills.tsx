import "./Skills.css";
import SkillLevel from "./SkillLevel";
import React from "react";

const Skills: React.FC = () => {
    return (
        <section id="Skills" className="Skills">
            <div className="Skills-layout">
                <h2>Skills</h2>
                <h3>Languages</h3>
                <SkillLevel name="Python" level={2} finalProgress={25}/>
                <SkillLevel name="C" level={3} finalProgress={20}/>
                <SkillLevel name="Java" level={2} finalProgress={75}/>
                <SkillLevel name="TypeScript" level={2} finalProgress={90}/>
                <SkillLevel name="JavaScript" level={2} finalProgress={90}/>
                <SkillLevel name="C#" level={0} finalProgress={60}/>
                <SkillLevel name="C++" level={1} finalProgress={10}/>
                <h3>Web Development</h3>
                <SkillLevel name="HTML/CSS" level={2} finalProgress={95}/>
                <SkillLevel name="Node.js" level={2} finalProgress={40}/>
                <SkillLevel name="Express.js" level={1} finalProgress={80}/>
                <h3>Other Tools</h3>
                <SkillLevel name="Git" level={2} finalProgress={70}/>
                <SkillLevel name="React" level={2} finalProgress={50}/>
            </div>
            
        </section>
    );
};

export default Skills;