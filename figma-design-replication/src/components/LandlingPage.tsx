import AboutEthAi from "./AboutEthAi";
import ExploreDapp from "./ExploreDapp";
import Faq from "./FAQ";
import Features from "./Feature";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

const LandingPage = () => {
    return (
        <div className="bg-[#00161c]">
          <HeroSection/>
           {/* <Features/> */}
           <AboutEthAi/>
           <Tokenomics/>
           <Roadmap/>
           <Faq/>
           <ExploreDapp/>
           <Footer/>
        </div>
    );
};

export default LandingPage;
