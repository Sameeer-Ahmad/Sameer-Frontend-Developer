import React, { useEffect } from "react";
import "./Feature.css";
import TokenomicBackground from "../assets/video/TokenomicBg.mov";
import AOS from "aos";
import "aos/dist/aos.css";
const Tokenomics: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <div className="relative h-[562px] sm:h-[852px] custom-sm:h-[852px] md:h-[862px] lg:h-[562px] xl:h-[562px] max-h-[842px] mt-[70px] ">
        <div className="absolute inset-0 h-full w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={TokenomicBackground} type="video/mp4" />
          </video>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 50%, #00161D 100%)",
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply"></div>
        </div>
        <h1 className="relative z-20 text-white font-space text-[40px] font-medium text-center mb-8 ">
          Tokenomics
        </h1>

        <div className="flex tokenomicsData justify-between items-center w-full">
          {" "}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex justify-center items-center w-[50%] relative"
          >
            <svg
              width="300"
              height="300"
              viewBox="0 0 42 42"
              className="block gap-2"
            >
              <circle
                className="text-logoColor"
                stroke="currentColor"
                strokeWidth="5"
                fill="transparent"
                r="15.91549431"
                cx="21"
                cy="21"
              />

              <circle
                className="text-logoColor"
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="76 24"
                strokeDashoffset="10"
                fill="transparent"
                r="15.91549431"
                cx="21"
                cy="21"
                transform="rotate(-90 21 21)"
              />

              <circle
                className="text-donutcolor1"
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="10 90"
                strokeDashoffset="-20"
                fill="transparent"
                r="15.91549431"
                cx="21"
                cy="21"
                transform="rotate(-90 21 21)"
              />

              <circle
                className="text-donutcolor2"
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="10 90"
                strokeDashoffset="-30"
                fill="transparent"
                r="15.91549431"
                cx="21"
                cy="21"
                transform="rotate(-90 21 21)"
              />
            </svg>

            <div className="absolute flex flex-col">
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-white transform translate-y-2 translate-x-52 md:w-8 lg:w-8 xl:w-8 custom-sm:translate-x-44 sm:translate-x-56 custom-sm:rotate-[25deg]  sm:w-8 custom-sm:w-8" />
                <span className="ml-1 text-white text-xs transform translate-x-50 md:text-sm md:translate-x-56 xl:translate-x-56 sm:translate-x-56 sm:translate-y-6 custom-sm:translate-x-[178px] custom-sm:translate-y-4">
                  Marketing (5%)
                </span>
              </div>

              <div className="flex items-center mt-1">
                <div className="w-8 h-0.5 bg-white transform translate-y-20 translate-x-46 custom-sm:translate-y-18 custom-sm:translate-x-36  md:w-20 rotate-[25deg] md:w-8 lg:w-8 xl:w-8 sm:w-8 custom-sm:w-16 sm:translate-x-48" />
                <span className="ml-1 text-white text-xs transform translate-y-20 translate-x-32 md:text-sm md:translate-x-30 xl:translate-x-30 sm:translate-x-48 custom-sm:translate-x-36 custom-sm:translate-y-24 sm:translate-y-30">
                  Team (35%)
                </span>
              </div>

              <div className="flex items-center mt-1">
                <div className="w-16 h-0.5 bg-white transform -translate-y-2 -translate-x-16 rotate-[35deg] md:w-20 lg:w-20 xl:w-20 sm:w-20 custom-sm:w-16" />
                <span className="ml-1 text-white text-xs transform -translate-y-8 -translate-x-48 md:text-sm md:-translate-x-60 lg:-translate-x-60 xl:-translate-x-60 sm:-translate-x-48 custom-sm:-translate-x-48 custom-sm:-translate-y-10">
                  Liquidity Pool (90%)
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            className="w-[50%] flex flex-col items-center justify-center"
          >
            <div className="blockchain  flex w-[80%] md:w-[80%] xl:w-[80%] sm:w-[120%] lg:w-[80%] custom-sm:w-[160%] gap-2 bg-navColor backdrop-blur-[15px] rounded-[20px] p-4 text-white text-[16px] font-space font-normal ">
              <div className="flex flex-col custom-sm:ml-6 custom-sm:mr-0 sm:ml-12 sm:mr-12 lg:ml-12 lg:mr-12 md:ml-12 md:mr-12 ml-12 mr-12 ml-12 mr-12 gap-2">
                <div>Name</div>
                <div>Token Name</div>
                <div>Token Standard</div>
                <div>Blockchain</div>
                <div>Token Supply</div>
                <div>Tax</div>
              </div>

              <div className="flex flex-col ml-2 gap-2">
                <div>: </div>
                <div>: </div>
                <div>: </div>
                <div>: </div>
                <div>: </div>
                <div>: </div>
              </div>

              <div className="flex flex-col custom-sm:ml-0 ml-8 gap-2">
                <div>EthAi</div>
                <div>$EthAi</div>
                <div>ERC20</div>
                <div>Ethereum</div>
                <div>100 Million</div>
                <div>5%/5%</div>
              </div>
            </div>
            <div className="blockchain flex  w-[80%] md:w-[80%] xl:w-[80%] sm:w-[120%] lg:w-[80%] custom-sm:w-[160%] mt-3 gap-2 bg-navColor backdrop-blur-[15px] rounded-[20px] p-4 text-white text-[16px] font-space font-normal">
              <div className="flex flex-col custom-sm:ml-6 custom-sm:mr-0 sm:ml-12 sm:mr-12 lg:ml-12 lg:mr-12 md:ml-12 md:mr-12 ml-12 mr-12 ml-12 mr-12  gap-2">
                <div>Team</div>
                <div>Marketing </div>
                <div>Liquidity Pool</div>
              </div>

              <div className="flex flex-col ml-2 gap-2">
                <div>: </div>
                <div>: </div>
                <div>: </div>
              </div>

              <div className="flex flex-col custom-sm:ml-0 ml-8 gap-2">
                <div>35%</div>
                <div>5%</div>
                <div>90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tokenomics;
