import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Competitions from "../components/Competitions";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <Hero />
        <About />
        <Competitions />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
