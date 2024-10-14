import AboutEthAi from "./AboutEthAi";
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
        </div>
    );
};

export default LandingPage;
