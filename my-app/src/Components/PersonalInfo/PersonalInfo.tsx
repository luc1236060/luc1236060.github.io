import "./PersonalInfo.css";
import portrait from "../../assets/portrait.png";

const PersonalInfo: React.FC = () => {
    return (
        <section id="PersonalInfo" className="PersonalInfo">
            <div className="PersonalInfo-layout">
                <div className="PersonalInfo-img">
                    <img src={portrait} alt="Louis Au"/>
                </div>
                <div className="PersonalInfo-details">
                    <div className="Top-box">
                        <h1>Louis Au</h1>
                        <h2>Computer Science | Software Engineer</h2>
                    </div>
                    <div className="Bottom-box">
                        <ul className="Socials">
                            <li>
                                <a href="https://www.linkedin.com/in/louis-au-702b42220/">
                                    <i aria-hidden="true" title="LinkedIn" className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/luc1236060">
                                    <i aria-hidden="true" title="GitHub" className="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://leetcode.com/u/luc1236060/">
                                    <i aria-hidden="true" title="LeetCode" className="fa-solid fa-laptop-code"></i>
                                </a>
                            </li>

                        </ul>
                        <ul className="Contact">
                            <li className="location">West Palm Beach, FL</li>
                            <li className="email">lau2000g@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalInfo