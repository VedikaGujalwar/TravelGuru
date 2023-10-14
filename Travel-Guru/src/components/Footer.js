import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travel Guru</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"/>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"/>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkdln-square"/>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"/>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Licenses</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact-Us</a>
          <a href="/">Trouble Shooting</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          
        </div>
      </div>

    </div>
  );
};

export default Footer;
