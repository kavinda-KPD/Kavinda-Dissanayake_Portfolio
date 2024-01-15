import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import ResumeCardForExperience from "./ResumeCardForExperience";

const Achievement = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">From 2020</p>
            <h2 className="text-3xl md:text-4xl font-bold">Freelance Software Engineer</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCardForExperience
                title="Binuri Pirikara Shop"
                subTitle=" "
                result="Landing Page"
                des="I spearheaded the development of the Binuri Pirikara Shop landing page tailored to meet the unique requirements of Mr. Samarathunga. This React-based project boasts a responsive design, guaranteeing a seamless user experience across devices. The interface is intuitively crafted, allowing customers to effortlessly explore the curated Pirikara items. Leveraging React's dynamic content rendering, the landing page ensures a smooth and engaging shopping journey, reflecting a commitment to user satisfaction and modern web development practices."
            />

            <ResumeCardForExperience
                title="Noori Jaggery exporters"
                subTitle=""
                result="Ecommerce Web"
                des="I took the lead in crafting the E-commerce webpage for Noori Jaggery Exporters Shop, fulfilling the specific requirements of Mr. Vidoosha Deematha. Developed using the MERN (MongoDB, Express.js, React, Node.js) stack, this project is a testament to the seamless integration of technologies for a robust online shopping experience. The webpage features a dynamic and responsive design, ensuring a user-friendly interface across devices. By leveraging the power of MongoDB for database management, Express.js for server-side development, React for the frontend, and Node.js for server-side scripting, the Noori Jaggery Exporters E-commerce Webpage stands as a comprehensive solution for modern, efficient, and scalable online commerce."
            />
          </div>
        </div>



      </motion.div>
  );
};

export default Achievement;
