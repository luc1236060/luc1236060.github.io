import "./Home.css";
import About from "../About/About";
import Education from "../Education/Education";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import OtherSkills from "../Skills/OtherSkills";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
    return(
        <div>
            <div className="container">
                <div className="Home-layout">
                    <div className="Profile-layout">
                        <div className="Profile-left">
                            <PersonalInfo/>
                            <About/>
                            <Projects/>
                        </div>
                        <div className="Profile-right">
                            <Education/> 
                            <Skills/>
                            <OtherSkills/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;