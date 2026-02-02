import Header from "./_components/Header";
import Challenge from "./_components/Challenge";
import Solution from "./_components/Solution";
import Everyone from "./_components/Everyone";
import HowItWorks from "./_components/HowItWorks";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="grow">
      <Hero />
      <Challenge />
      <Solution />
      <Everyone />
      <HowItWorks />
      <CTASection />
      <Footer/>
    </main>
  );
}
