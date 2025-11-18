import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import WebsiteBg from "@/components/shared/WebsiteBg";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />

      {/* Page Overlay for readability */}
      <div className="fixed inset-0 bg-black bg-gradient-to-b from-black/80 via-black/85 to-black/95 z-[-1]"></div>
      {/* Main Layout */}
      <div className="relative z-10">
        <WebsiteBg />
        <main
          id="top"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24"
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </>
  );
}
