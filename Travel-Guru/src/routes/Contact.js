import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1475691058852-37b5d9b6a878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Contact Us"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
