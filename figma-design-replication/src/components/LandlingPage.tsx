import AboutEthAi from "./AboutEthAi";
import Features from "./Feature";
import HeroSection from "./HeroSection";

const LandingPage = () => {
    return (
        <div className="bg-black">
          <HeroSection/>
           <Features/>
           <AboutEthAi/>
        </div>
    );
};

export default LandingPage;
