import React from "react";
import "../styles/Intro.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Intro = () => {
  return (
    <section className="intro-section " id="intro">
      <div className="profile-pic">
        <img src="/Assets/MyNewPic2.jpg" />
      </div>
      <div className="desc ">
        <h1>
          Hi,
        </h1>
        <h1>I'm <span className="name ">A.Moses Beniyel</span></h1>
        <h2>Frontend Developer | DSA Enthusiast | 3rd Year CSE</h2>

        <p className="intro-description ">
          I'm a passionate web developer with strong skills in React and
          JavaScript. I enjoy building modern, responsive, and accessible web
          apps that bring ideas to life. Alongside web development, I actively
          practice DSA to strengthen my problem-solving and coding fundamentals.
        </p>
        <div className="contact-info ">
          <a
            href="https://github.com/moses-beniyel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/moses-beniyel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon linkedin-icon" />
          </a>
          <a href="mailto:mosesbeniyel007@gmail.com" aria-label="Email">
            <MdEmail className="icon email-icon" />
          </a>
          <a
            href="https://wa.me/918608146276"
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
