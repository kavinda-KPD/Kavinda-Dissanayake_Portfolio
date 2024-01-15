import React from "react";
import { motion } from "framer-motion";
import ResumeCardForExperience from "./ResumeCardForExperience";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">From 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">FullStack Trainee Software Engineer</h2>

          <p className="text-xl mt-2 font-semibold text-gray-400 group-hover:text-white duration-300">Scicom Lanka Pvt(LTD)</p>
          <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">As a Trainee Software Engineer at Scicom PVT, I played a pivotal role in the development and enhancement of the main project, SibMS, during the initial stages of my training. My responsibilities spanned across full-stack development, utilizing Angular for the frontend and Spring Boot for the backend.</p>

        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCardForExperience
              title="Frontend Experience"
              subTitle=" "
              result="Angular"
              des="Led full-stack Angular development, spearheading the creation of dynamic and secure applications through mastery of data binding, directives, services, routing, lifecycles, and security. During my tenure as a trainee software engineer at Scicom Lanka Pvt, I honed my skills and gained practical experience in crafting efficient and user-centric Angular applications. This experience not only enhanced my proficiency but also instilled in me a deep understanding of industry best practices. As a strong and talented Angular frontend developer, I am driven to bring creativity and innovation to every project, ensuring a seamless and engaging user experience."
          />

          <ResumeCardForExperience
              title="Backend Experience"
              subTitle=" "
              result="SpringBoot"
              des="Architected secure and scalable Spring Boot backends using MVC, Spring Security, REST, and native queries. My experience as a trainee software engineer at Scicom Lanka Pvt has been instrumental in refining my skills and gaining hands-on expertise in crafting robust and efficient Spring Boot backends. During this time, I focused on developing secure and scalable solutions, leveraging my proficiency in MVC architecture, Spring Security for authentication and authorization, RESTful API design, and optimizing performance with native queries. As a dedicated Spring Boot backend developer, I am committed to delivering high-quality, reliable, and efficient solutions that meet the evolving demands of modern web applications."
          />

          <ResumeCardForExperience
              title="New Implementations"
              subTitle=" "
              result="Fullstack"
              des="I have successfully spearheaded the development of a robust E-Visa application prioritization system, showcasing my proficiency in new implementation strategies. Leveraging Angular for an engaging and interactive frontend, MySQL for efficient data storage, and Spring Boot for secure backend logic and APIs, I orchestrated a seamless integration of cutting-edge technologies. This project not only highlights my technical prowess in utilizing diverse tools but also underscores my capability to design and implement innovative solutions. By seamlessly combining these technologies, I not only ensured an intuitive user interface but also established a secure and efficient backend infrastructure, affirming my proficiency in both frontend and backend development."
          />

          <ResumeCardForExperience
              title="Bug Fixing"
              subTitle=" "
              result="Fullstack"
              des="Dedicated to the meticulous art of bug fixing in software development, I thrive in addressing and resolving over 4 to 5 high-severity bugs per day. Specializing in Fullstack bug fixing with proficiency in Angular and Spring Boot, my expertise extends seamlessly across both front-end and back-end domains. This versatility is further highlighted by my adept handling of various sub-modules within projects, showcasing not only my technical prowess but also my adaptability in navigating diverse components. As a seasoned bug fixer, I bring a commitment to excellence and a track record of consistently ensuring the seamless functionality of software applications."
          />
        </div>
      </div>



    </motion.div>
  );
};

export default Experience;
