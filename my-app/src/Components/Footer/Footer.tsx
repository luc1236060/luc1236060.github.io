import "./Footer.css";

const Footer: React.FC = () => {
    return(
        <div className="Footer">
            <p>&copy; {new Date().getFullYear()} - Louis Au</p>
            <p>Designed and Created by Louis Au</p>
            <p>Inspired By</p>
        </div>
    );
};

export default Footer;