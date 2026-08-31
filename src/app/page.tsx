import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import Apartment from "@/components/Apartment";
import Gallery from "@/components/Gallery";
import FloorPlan from "@/components/FloorPlan";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import HowItWorks from "@/components/HowItWorks";
import Financial from "@/components/Financial";
import Contemplation from "@/components/Contemplation";
import DependencyNote from "@/components/DependencyNote";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Opportunity />
        <Apartment />
        <Gallery />
        <FloorPlan />
        <About />
        <Amenities />
        <HowItWorks />
        <Financial />
        <Contemplation />
        <DependencyNote />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
