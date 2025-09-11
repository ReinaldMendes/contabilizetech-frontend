import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";
import { Plans } from "../../components/Plans";
import { Testimonials } from "../../components/Testimonials";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}