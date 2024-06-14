import "./footer.css";
import "./fonts.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="contentFinal">
          <div className="navbarContent">
            <div className="links">
              <h3 className="h3Content">About</h3>
              <a className="footerHoverEffect" href="#About">About Me</a>
              <a className="footerHoverEffect" href="#Skills">Skills</a>
              <a className="footerHoverEffect" href="#Projects">Projects</a>
            </div>
            <div className="links">
              <h3 className="h3Content">©KobiDev</h3>
            </div>
            <div className="links">
              <h3 className="h3Content">Contact</h3>
              <p>wojtek.kobier@wp.pl</p>
              <a className="footerHoverEffect" href="https://www.linkedin.com/in/wojciech-kobier/">LinkedIn</a>
              <a className="footerHoverEffect" href="https://www.facebook.com/wojtek.kobier.5/">Facebook</a>
              <a className="footerHoverEffect" href="https://github.com/Kobi-os?tab=repositories">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
