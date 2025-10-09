import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Content />

      <Features />
        <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
