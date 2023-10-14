import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a mesage to us</h1>
      <form>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Phone Number"/>
        <input placeholder="Subject"/>
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
