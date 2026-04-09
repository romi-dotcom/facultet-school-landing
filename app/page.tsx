import TopUtilityBar from "@/components/TopUtilityBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AudienceSelect from "@/components/AudienceSelect";
import PainAgitation from "@/components/PainAgitation";
import DoubleValue from "@/components/DoubleValue";
import PhotoGalleryMobile from "@/components/PhotoGalleryMobile";
import PhotoGalleryDesktop from "@/components/PhotoGalleryDesktop";
import Programmes from "@/components/Programmes";
import MiniCapture from "@/components/MiniCapture";
import VisaSteps from "@/components/VisaSteps";
import HowToApply from "@/components/HowToApply";
import CTAStrip from "@/components/CTAStrip";
import VisaFaq from "@/components/VisaFaq";
import Testimonials from "@/components/Testimonials";
import WhyFacultet from "@/components/WhyFacultet";
import SuccessStories from "@/components/SuccessStories";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import CampusMap from "@/components/CampusMap";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <TopUtilityBar />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <AudienceSelect />
        <PainAgitation />
        <DoubleValue />
        <PhotoGalleryMobile />
        <PhotoGalleryDesktop />
        <Programmes />
        <MiniCapture />
        <VisaSteps />
        <HowToApply />
        <CTAStrip
          heading="Ready to sort out your student permit?"
          sub="Fill in two fields — your coordinator will call back within 2 hours. No paperwork needed at this stage."
          btnText="Book a Free Consultation →"
        />
        <VisaFaq />
        <Testimonials />
        <WhyFacultet />
        <SuccessStories />
        <WhatsAppCTA />
        <CampusMap />
        <CTAStrip
          heading="Join Maria, Arjun, and 420 other students who chose Facultet."
          sub="No documents needed to apply · Response within 1 business day"
          btnText="Get My Free Consultation"
          trust="No documents needed to apply · Response within 1 business day"
        />
        <ApplicationForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
