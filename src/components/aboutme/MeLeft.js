import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaHackerrank,
  FaNodeJs,
  FaNode,
  FaJava,
  FaCss3Alt,
  FaPhoneAlt,
  FaRegEnvelope
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiExpress,
  SiFlutter,
} from "react-icons/si";
import { BsMedium} from "react-icons/bs";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [

    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const pdfUrl = './CV.pdf';

  const downloadCV=(url)=>{

  }
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          <span className="text-designColor capitalize">Contact Me</span>
        </h1>
      
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a highly skilled Fullstack Engineer proficient in React and Angular on the frontend, as well as Spring Boot and Node.js (Express) on the backend. My strength lies in seamlessly blending frontend and backend technologies to create robust web applications. If you're interested in learning more about my experiences and skills, or have a project in mind, feel free to reach out. I'm just a call away, eager to discuss how we can collaborate on innovative solutions.
        </p>
        <p>
        <span className="bannerIcon" gap-6>
              <FaRegEnvelope />
            </span>
        kavindapvt@gmail.com<br/>
        <span className="bannerIcon" gap-6>
              <FaPhoneAlt />
            </span>
          +94 70 5542960 / +94 77 9387019
        </p>
      </div>
      <div className="w-full">
        <a href="./CV.pdf" download="./CV.pdf">
                <button
                  // onClick={downloadCV(pdfUrl)}
                  className="w-full h-12 bg-designColor rounded-lg text-black text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-white border-transparent"
                >
                  DOWNLOAD CV
                </button></a>
              </div>
      <div className="grid flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-2">
            <span className="bannerIcon">
              <a href="https://github.com/kavinda-KPD" target="_blank">
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/dissanayake-kavinda/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://web.facebook.com/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.hackerrank.com/profile/kavindadissanay1"
                target="_blank"
              >
                <FaHackerrank />
              </a>
            </span>
            <span className="bannerIcon"><a href="https://medium.com/@kavindapvt" target="_blank">
              <BsMedium /></a>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeftBanner;
