import { useState } from "react";
import './contact.css'


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="social-links">
        <h2>Connect with Me</h2>
        <ul>
          <li><a href="https://github.com/KUNALLATTA29" target="_blank" rel="noopener noreferrer" className="social-icon github">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/kunal-latta-842321227" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">LinkedIn</a></li>
          <li><a href="mailto:kunalofficial234@gmail.com" className="social-icon email">Email</a></li>
        </ul>
      </div>
    </div>
  )
}
