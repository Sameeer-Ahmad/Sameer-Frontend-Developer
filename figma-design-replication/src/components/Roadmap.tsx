import React, { useEffect } from "react";
import KickingOff from "../assets/video/KickingOff.mp4";
import BrightInishgts from "../assets/video/BiggerInsights.mp4";
import FullPower from "../assets/video/FullPower.mp4";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: 'ease-in-out',  
      anchorPlacement: 'top-bottom'
      
    });
  }, []);
  return (
    <>
      <div className=" mx-auto p-4 gap-8 text-white flex flex-col ">
        <h1 className="text-white font-space text-[40px] font-medium text-center mb-8">
          Roadmap
        </h1>
        <div
          data-aos="zoom-in"
          className="flex flex-col md:flex-row w-full gap-8 mb-8"
        >
          <div
            data-aos="zoom-in"
            className="w-full md:w-[50%] p-4 flex flex-col items-center justify-center gap-6"
          >
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 1
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Kicking Off
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full ">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Launch of EthAi: Officially
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Development of Core Ai Agents
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Use Onboarding Campaign
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Community Engagement Initiatives
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full md:w-[50%] video-section relative"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `
          linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
          linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
          linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
        `,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <video
              className="w-full h-auto object-cover"
              src={KickingOff}
              autoPlay
              loop
              muted
              style={{
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse w-full gap-8 mb-8">
          <div
            data-aos="zoom-in"
            className="w-full md:w-[50%] p-4 flex flex-col items-center justify-center gap-6"
          >
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 2
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Bigger Insights
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full ">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Introduction of Advanced AI Agents
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Strategic Partnerships
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  User Interface Optimization
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Comprehensive Marketing Campaign
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full md:w-[50%] video-section relative"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `
          linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
          linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
          linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
        `,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <video
              className="w-full h-full object-cover"
              src={BrightInishgts}
              autoPlay
              loop
              muted
              style={{
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-8 mb-8">
          <div
            data-aos="zoom-in"
            className="w-full md:w-[50%] p-4 flex flex-col items-center justify-center gap-6"
          >
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 3
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Full Power
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full ">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Introduction of Enhanced Features
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  API Integration for Data Access
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Launch of Community-Driven Initiatives
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Continuous Improvement and Updates
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full md:w-[50%] video-section relative"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `
          linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
          linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
          linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
        `,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <video
              className="w-full h-auto object-cover"
              src={FullPower}
              autoPlay
              loop
              muted
              style={{
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
