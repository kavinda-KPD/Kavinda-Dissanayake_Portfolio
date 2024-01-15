import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's in Computer Science"
            subTitle="University of RUhuna (2020 - present)"
            result="Second Class"
            des="I earned my Bachelor's in Computer Science from the University of Ruhuna, specializing in the Faculty of Science, Department of Computer Science. The program provided a comprehensive education, covering fundamental topics such as algorithms, data structures, and software development. Throughout my studies, I engaged in hands-on projects and practical applications, gaining valuable insights into various specialized areas within computer science. The faculty's guidance and mentorship, coupled with extracurricular activities, enhanced my critical thinking and problem-solving skills. Overall, my education at the University of Ruhuna has equipped me with a strong foundation, preparing me for a successful career in the ever-evolving field of technology."
          />
          <ResumeCard
            title="(9A's in OL English Medium"
            subTitle="R/Sivali Central College (2015)"
            result="9 A's"
            des="I attended R/Sivali Central College for my school education. In the Ordinary Level (OL) examinations in the English medium, I achieved outstanding results with 9As. My time at R/Sivali Central College not only provided a solid academic foundation but also instilled in me a strong work ethic and a passion for continuous learning. These achievements reflect my commitment to academic excellence during my school years."
          />
          <ResumeCard
            title="ABB in AL Maths Stream"
            subTitle="R/Sivali Central College (2018)"
            result="ABB"
            des="I completed my Advanced Level (AL) examinations in the Mathematics stream, achieving a notable outcome with grades ABB. This reflects my proficiency and dedication in the challenging subjects within the Maths stream."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">from 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SpringBOOT Academy"
            subTitle=""
            result=""
            des="I completed the Spring Boot and Angular full-stack development courses at the Springboot Academy. This training sharpened my skills in building resilient backend systems with Spring Boot and crafting dynamic front-end interfaces using Angular."
          />

          <ResumeCard
            title="Developperstack - Academy"
            subTitle=""
            result=""
            des="I studied the MERN stack at Developer Stack Academy, gaining expertise in MongoDB, Express.js, React.js, and Node.js. This training provided a well-rounded understanding for developing full-stack applications."
          />

          <ResumeCard
              title="Cousera And UDEMY"
              subTitle=""
              result=""
              des="I learned React from Meta, Spring Boot, Java, JavaScript, and Angular and many more through Coursera and Udemy, gaining a versatile skill set in web development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
