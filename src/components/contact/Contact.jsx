import React, { useRef } from "react";
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8vn6bj5",
      "template_0qjqlsx",
      form.current,
      "_nlc3b1GlLi64zZSj"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail contact_option-icon />
            <h4>Email</h4>
            <h5>ugwuokevictor10@gmail.com</h5>
            <a href="mailto:ugwuokevictor10@gmail.com" target="_blank">
              Send a messsage
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+234 814 824 6782</h5>
            <a
              href="https://wa.me/+2348148246782?text=urlencodedtext"
              target="_blank"
            >
              Send a messsage
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
