import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import {FaMobile, FaGlobe, FaAngular, FaJava} from "react-icons/fa";
import {SiProgress, SiAntdesign, SiSpring} from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import {ImBlogger} from "react-icons/im";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">

        <Card
          title="Front End Development"
          des="Passionate frontend developer specializing in React, Angular, HTML, and CSS, transforming design concepts into visually stunning and user-friendly web experiences."
          icon={<FaAngular  />}
        />
        <Card
            title="Back End Development"
          des="Experienced backend developer proficient in Spring Boot, Node.js, and Express, dedicated to architecting robust and scalable server-side solutions for seamless integration with frontend technologies."
            icon={<SiSpring />}
        />
        <Card
          title="FullStack Web Development"
          des="Full Stack Developer fluent in Angular, Spring Boot, MERN, and MEAN stacks. Turning ideas into dynamic web solutions. Let's build brilliance"
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="React Native wizard crafting high-performance cross-platform mobile apps with a focus on seamless user experiences."
          icon={<FaMobile />}
        />
        <Card
          title="Standalone Applications"
          des="Versatile Java developer with expertise in standalone applications, crafting efficient and reliable solutions to meet unique software requirements. From algorithmic complexities to user-friendly interfaces, I bring Java's power to standalone projects."
          icon={<FaJava  />}
        />
        <Card
          title="Blog Writing"
          des="Fueling my passion for tech by day, and crafting insights on Medium by night – a developer and blogger sharing the best of both worlds."
          icon={<ImBlogger  />}
        />
      </div>
    </section>
  );
}

export default Features
