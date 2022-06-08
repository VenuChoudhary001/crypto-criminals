import Navbar from "../components/Navbar";
import Hero from "../components/Sections/Hero";


function Home() {
  return (
    <>
     
        <section className="home-bg relative font-urbanist">
          <main className="overlay">
            <Navbar />
            <Hero />
          </main>
        </section>
    
   
    </>
  );
}

export default Home;