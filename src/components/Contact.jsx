import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section block" id="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out for collaborations, opportunities, or just to say
        hi!
      </p>

      <div className="contact-icons">
        <a
          href="https://github.com/moses-beniyel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon github-icon block" />
        </a>
        <a
          href="https://www.linkedin.com/in/moses-beniyel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon linkedin-icon block" />
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
          <FaWhatsapp className="icon whatsapp-icon block" />
        </a>
      </div>

      <div className="contact-number">
        📞 <strong>+91 8608146276</strong>
      </div>

      <span className="thank-you">
        Thank you for visiting my portfolio! If you have any questions or just want to connect, don't hesitate to reach out. Your feedback and inquiries are always welcome!
      </span>
    </section>
  );
};

export default Contact;
