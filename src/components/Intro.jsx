
import "../styles/Intro.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Intro = () => {
  return (
    <section className="intro-section " id="intro">
      <div className="profile-pic">
        <img src="/Assets/My_Pic.jpg" />
      </div>
      <div className="desc ">
        <h1>
          Hi,
        </h1>
        <h1>I'm <span className="name ">Leo J</span></h1>
        <h2>Entry-level Frontend Developer </h2>

        <p className="intro-description ">
          I'm a passionate web developer with strong skills in React and
          JavaScript. I enjoy building modern, responsive, and accessible web
          apps that bring ideas to life. Strong ability to adapt to new technologies 
          and deliver scalable solutions. Looking to contribute technical expertise 
          and problem solving skills in a professional development team.
        </p>
        <div className="contact-info ">
          <a
            href="https://github.com/Leo-J25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/leo-j-188818217/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon linkedin-icon" />
          </a>
          <a href="mailto:connectwithleo2512@gmail.com" aria-label="Email">
            <MdEmail className="icon email-icon" />
          </a>
          <a
            href="https://wa.me/917305188582"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="icon whatsapp-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
