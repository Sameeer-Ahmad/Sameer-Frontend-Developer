import AboutEthAi from "./AboutEthAi";
import Faq from "./FAQ";
import Features from "./Feature";
import HeroSection from "./HeroSection";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

const LandingPage = () => {
    return (
        <div className="bg-[#000d12]">
          <HeroSection/>
           <Features/>
           <AboutEthAi/>
           <Tokenomics/>
           <Roadmap/>
           <Faq/>
        </div>
    );
};

export default LandingPage;
