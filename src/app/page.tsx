import Loader from "@/components/landing/Loader";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PinnedProjects from "@/components/landing/PinnedProjects";
import MarqueeSection from "@/components/landing/MarqueeSection";
import OurServices from "@/components/landing/OurServices";
import StatsCards from "@/components/landing/StatsCards";
import ServicesParallax from "@/components/landing/ServicesParallax";
import Experience from "@/components/landing/Experience";
import TechStack from "@/components/landing/TechStack";
import Education from "@/components/landing/Education";
import References from "@/components/landing/References";
import CustomReferences from "@/components/landing/CustomReferences";
import ContactCTA from "@/components/landing/ContactCTA";
import Footer from "@/components/landing/Footer";
import WhoWeAre from "@/components/landing/WhoWeAre";
import { ChatProvider } from "@/context/ChatContext";
import ChatWidget from "@/components/chat/ChatWidget";

export const runtime = "nodejs";

export default function Home() {
  return (
    <ChatProvider>
      <Loader />
      <Navigation />
      <Header />
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <WhoWeAre />
        <MarqueeSection />


        <OurServices />
        <CustomReferences />
        <StatsCards />
        <ServicesParallax />
        <Experience />
        <TechStack />
        <Education />
        <References />
        <ContactCTA />
      </main>
      <Footer />
      <ChatWidget />
    </ChatProvider>
  );
}
