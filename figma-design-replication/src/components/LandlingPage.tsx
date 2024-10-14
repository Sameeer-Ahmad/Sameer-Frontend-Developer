import AboutEthAi from "./AboutEthAi";
import Features from "./Feature";
import HeroSection from "./HeroSection";
import Tokenomics from "./Tokenomics";

const LandingPage = () => {
    return (
        <div className="bg-black">
          <HeroSection/>
           <Features/>
           <AboutEthAi/>
           <Tokenomics/>
        </div>
    );
};

export default LandingPage;
