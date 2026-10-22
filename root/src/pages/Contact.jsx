

function Contact() {
  return (
    <div className="container">
      <h1>Contact Me</h1>

      <form>
        <input type="text" placeholder="Your Name" required />
        <br /><br />

        <input type="email" placeholder="Your Email" required />
        <br /><br />

        <textarea placeholder="Your Message" required />
        <br /><br />

        <button type="submit">Send Message</button>
      </form>

      <p>Email: yourmail@example.com</p>
    </div>
  );
}

export default Contact;

