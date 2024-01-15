import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs, FaJava, FaGithub, FaHackerrank} from "react-icons/fa";
import {SiTailwindcss, SiFigma, SiNextdotjs, SiAngular, SiExpress, SiMongodb, SiSpringboot} from "react-icons/si";
import {BsMedium} from "react-icons/bs";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.","Blog Writter"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">  SCULPTING TOMORROW'S TECHNOLOGY TODAY.</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kavinda Dissanayake</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Dedicated Fullstack Engineer navigating the intricate dance of software, mastering each layer of the stack, and sculpting tomorrow's technology through unwavering commitment and passion-fueled hard work.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon"><a href="https://github.com/kavinda-KPD" target="_blank">
              <FaGithub /></a>
            </span>
            <span className="bannerIcon"><a href="https://www.linkedin.com/in/dissanayake-kavinda/" target="_blank">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon"><a href="https://www.hackerrank.com/profile/kavindadissanay1" target="_blank">
              <FaHackerrank /></a>
            </span>
            <span className="bannerIcon"><a href="https://medium.com/@kavindapvt" target="_blank">
              <BsMedium /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiAngular />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>

          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
                <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftBanner
