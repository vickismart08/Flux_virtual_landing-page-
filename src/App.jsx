import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSEO } from "./hooks/useSEO";
import {
  Header,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  ScreenshotsSection,
  WhyChooseUsSection,
  ComingSoonSection,
  DownloadCTASection,
  Footer,
} from "./components";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Pricing } from "./pages/Pricing";

// Landing page layout
function Home() {
  useSEO(
    "Flux Virtual - Global Virtual Phone Numbers for SMS & Calls",
    "Get virtual phone numbers from 100+ countries for SMS verification, voice calls, and online registrations. Fast activation, secure transactions, trusted by millions.",
  );
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <WhyChooseUsSection />
      <ComingSoonSection />
      <DownloadCTASection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
