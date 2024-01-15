import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
      <section
          id="projects"
          className="w-full py-20 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center">
          <Title
              title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
              des="My Projects"
          />
        </div>

        {/*p1*/}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
              title="Ecommerce App - MERN"
              des="Built a dynamic Ecommerce site with MERN stack – MongoDB, Express.js, React, and Node.js. Elevating user experience and scalability for seamless transactions. "
              src={projectOne}
              linkGit="https://github.com/kavinda-KPD/amazona"
              linkHost=""
          />

          {/*p2*/}
          <ProjectsCard
              title="Online Chatting App-  SpringBoot"
              des="Empower seamless connections with our Spring Boot-powered online chatting app, where real-time communication meets the simplicity of a robust framework"
              src={projectTwo}
              linkGit="https://github.com/kavinda-KPD/videoCall"
              linkHost=""
          />

          {/*p3*/}
          <ProjectsCard
              title="UrSafe_Srilanks"
              des="Streamline your healthcare needs with our comprehensive Online Pharmacy Management System, ensuring convenient access to medications and expert advice through our user-friendly platform."
              src={projectThree}
              linkGit="https://github.com/mandeera99/UrSAFE_SRILANKA"
              linkHost=""
          />

          {/*p4*/}
          <ProjectsCard
              title="Inventory Management System"
              des="Elevate your business efficiency with our comprehensive Inventory Management System, seamlessly integrating the intuitive user interface of Angular for a dynamic front end, and the robust functionality of Spring Boot for a powerful and scalable backend."
              src={projectFour}
              linkGit="https://github.com/kavinda-KPD/Inventory-Managment-System"
              linkHost=""
          />

          {/*p5*/}
          <ProjectsCard
              title="EXpense-Tracker-Fullstack"
              des="Take control of your finances with Expense-Tracker-Fullstack, a comprehensive MERN (MongoDB, Express.js, React, Node.js) stack solution. Effortlessly manage and track your expenses through the dynamic front-end of React, backed by the reliability and scalability of Node.js, Express.js, and MongoDB."
              src={projectFive}
              linkGit="https://github.com/kavinda-KPD/EXpense-Tracker-Fullstack"
              linkHost=""
          />

          {/*p6*/}
          <ProjectsCard
              title="Hostel Management System"
              des=" Efficiently manage your hostel operations with our Standalone Hostel Management System in Java. Experience seamless organization, from room allocations to student records, powered by Java's reliability and versatility."
              src={projectSix}
              linkGit=""
              linkHost=""
          />

          {/*/!*p7*!/*/}
          {/*<ProjectsCard*/}
          {/*    title="Hostel Management System"*/}
          {/*    des=" Efficiently manage your hostel operations with our Standalone Hostel Management System in Java. Experience seamless organization, from room allocations to student records, powered by Java's reliability and versatility."*/}
          {/*    src={projectSix}*/}
          {/*    linkGit=""*/}
          {/*    linkHost=""*/}
          {/*/>*/}

          {/*/!*p8*!/*/}
          {/*<ProjectsCard*/}
          {/*    title="Hostel Management System"*/}
          {/*    des=" Efficiently manage your hostel operations with our Standalone Hostel Management System in Java. Experience seamless organization, from room allocations to student records, powered by Java's reliability and versatility."*/}
          {/*    src={projectSix}*/}
          {/*    linkGit=""*/}
          {/*    linkHost=""*/}
          {/*/>*/}

          {/*/!*p9*!/*/}
          {/*<ProjectsCard*/}
          {/*    title="Hostel Management System"*/}
          {/*    des=" Efficiently manage your hostel operations with our Standalone Hostel Management System in Java. Experience seamless organization, from room allocations to student records, powered by Java's reliability and versatility."*/}
          {/*    src={projectSix}*/}
          {/*    linkGit=""*/}
          {/*    linkHost=""*/}
          {/*/>*/}

        </div>
      </section>
  );
};

export default Projects;
