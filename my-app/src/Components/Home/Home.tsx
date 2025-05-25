import "./Home.css";
import About from "../About/About";
import Education from "../Education/Education";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
    return(
        <div className="container">
            <div className="Home-layout">
                <div className="Profile-layout">
                    <div className="Profile-left">
                        <PersonalInfo/>
                        <div className="sub-left">
                            <About/>
                            <Projects/>
                        </div>
                    </div>
                    <div className="Profile-right">
                        <Education/> 
                        <Skills/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;