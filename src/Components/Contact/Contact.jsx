import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <div className="contact">
          <div className="contact-us">Contact us</div>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:skmansoor422@gmail.com">skmansoor422@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:9494022265">XXXXXXXXXX</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/shaik-mansoor422/" target="_blank" rel="noopener noreferrer">
              View profile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/shaikmansoor422/" target="_blank" rel="noopener noreferrer">
              View profile
            </a>
          </p>
        </div>

        <div className="forms">
          <form action="">
            <label htmlFor="name">Name</label><br />
            <input type="text" id="name" className="name" /><br />

            <label htmlFor="mail">E-mail</label><br />
            <input type="email" id="mail" className="email" /><br />

            <label htmlFor="msg">Message</label><br />
            <textarea id="msg" className="message" /><br />

            <input className="checkbox" type="checkbox" id="check" name="chbox" />
            <label htmlFor="check">I like it</label><br />

            <input className="send" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
