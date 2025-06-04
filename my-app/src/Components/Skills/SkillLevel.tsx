import React from "react";
import "./Skilllevel.css";

interface SkillLevelProps {
    name: string;
    level: number;
    finalProgress: number;
}

const levelLabels = ["Beginner", "Competent", "Intermediate", "Advanced", "Expert"];

const SkillLevel: React.FC<SkillLevelProps> = ({ name, level, finalProgress }) => {
    
    const fullCycleDuration = 1000;
    const resetDelay = 400;
    const fadeDuration = 300;

    const [currentCycle, setCurrentCycle] = React.useState(0);
    const [fillWidth, setFillWidth] = React.useState(0);
    const [displayLabel, setDisplayLabel] = React.useState(levelLabels[0]);
    const [animate, setAnimate] = React.useState(true);
    const [fade, setFade] = React.useState(false);

    React.useEffect(() => {
        if(currentCycle < level) {
            const fillTimeout = setTimeout(() => {
                setFillWidth(100);
            }, resetDelay);
        
            const cycleTimeout = setTimeout(() => {
                setFade(true);

                setTimeout(() =>{
                    setDisplayLabel(levelLabels[Math.min(currentCycle + 1, levelLabels.length - 1)]);
                    setFade(false);
                }, fadeDuration);

                setAnimate(false);
                setFillWidth(0);

                setTimeout(() => {
                    setAnimate(true);
                    setCurrentCycle((prev) => prev + 1);
                }, 10);

            }, resetDelay + fullCycleDuration);

            return () => {
                clearTimeout(fillTimeout);
                clearTimeout(cycleTimeout);
            };
        } else {
            setFillWidth(finalProgress);
        }
    }, [currentCycle, level, finalProgress])

    return (
        <div className="skill-bar">
            <div className="skill-info">
                <span className="skill-name">{name}</span>
                <span className={`skill-label ${fade ? "fade-out" : "fade-in"}`}>{displayLabel}</span>
            </div>
            <div className="bar-container">
                <div className="bar-fill" 
                style={{ width: `${fillWidth}%`, transition: animate ? `width ${fullCycleDuration}ms ease-in-out` : "none"}}></div>
            </div>
        </div>
    );
};

export default SkillLevel;