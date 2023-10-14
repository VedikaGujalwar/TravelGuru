import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";


import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    title="Turning Vacations into Adventures"
    text ="Hello this is details text"
    btnText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  );
}


export default Home;
