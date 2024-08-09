import "./FormStyle.css";
function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form action="#">
        <input type="text" placeholder="Enter your Name" required />
        <input type="email" placeholder="Enter your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" rows={4} required></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
