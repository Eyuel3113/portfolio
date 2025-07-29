'use client'
import React from "react";
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaFigma, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiPostgresql, SiPrisma, SiCanva, SiExpress, SiAdobe,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSqlite
} from "react-icons/si";

const devSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "TailwindCss", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Prisma", icon: <SiPrisma className="text-indigo-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "Mysql", icon: <SiMysql className="text-gray-700" /> },
  { name: "Sqlite", icon: <SiSqlite className="text-orange-700" /> },
  { name: "MongoDb", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
];

const uiuxSkills = [
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Adobe XD", icon: <SiAdobe className="text-red-500" /> },
];

const graphicSkills = [
  { name: "Illustrator", icon: <SiAdobe className="text-orange-400" /> },
  { name: "InDesign", icon: <SiAdobe className="text-pink-400" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-500" /> },
];

function SkillGrid({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: React.ReactElement }[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-4 border-2 border-yellow-400 rounded-xl transition-all duration-300 hover:bg-gradient-to-tr hover:from-yellow-300 hover:to-yellow-100 hover:scale-105 shadow-sm"
          >
            <motion.div
              className="text-4xl mb-2"
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgba(234,179,8,0.9)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-center font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full bg-white pl-4 md:pl-12 overflow-hidden">
      {/* Home Section */}
      <div
        className="xl:max-w-7xl xl:mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        id="home"
      >
        <motion.div
          className="w-full md:w-1/2 space-y-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hidden md:flex text-yellow-500 font-semibold text-sm mt-8">
             UI/UX DESIGNER & SOFTWARE DEVELOPER
          </p>
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            Hello, I’m <br />
            <span className="text-black text-4xl">Eyuel Endale</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            I&apos;m a passionate creative working at the intersection of software development, UI/UX design, and graphic design. I love building intuitive digital experiences, crafting clean interfaces, and bringing ideas to life through both code and visuals.

          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-400 px-6 py-2 font-semibold rounded-md hover:bg-yellow-500 transition">
              <a href="#projects">Projects</a>
            </button>
            <a href="www.linkedin.com/in/eyuel-endale-a85073227"className="border border-gray-700 px-6 py-2 font-semibold rounded-md hover:bg-gray-100 transition">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 relative flex justify-center items-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-[350px] bg-yellow-300 md:bg-transparent md:w-[450px] md:h-[450px] lg:ml-auto ">
            <img
              src="/hero.png"
              alt="Eyuel picture with yellow background"
              className="bottom-0 right-0 w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center items-center mb-12">
            <motion.h1
              className="text-xl font-semibold relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.6 }}
            >
              Skills
              <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-yellow-400 rounded-full -mb-1 z-[-1]"></span>
            </motion.h1>
          </div>

          <div className="space-y-12">
            <SkillGrid title="UI / UX Design" skills={uiuxSkills} />
            <SkillGrid title="Graphic Design" skills={graphicSkills} />
            <SkillGrid title="Software Development" skills={devSkills} />
            
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects" className="py-20">
        <div className="flex justify-center items-center mb-12 px-4">
          <motion.h1
            className="text-xl font-semibold relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Project
            <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-yellow-400 rounded-full -mb-1 z-[-1]"></span>
          </motion.h1>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col space-y-8 px-4 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="md:w-1/2 p-6 flex flex-col justify-center bg-amber-400">
              <h2 className="text-2xl font-bold mb-4">
                Restaurant
                <br />
                Management System
              </h2>
              <p className="text-gray-600 mb-6">
                Designed a complete Restaurant Management System, including a modern landing page, an intuitive admin dashboard, a mobile app interface, and engaging infographics for better user experience and data visualization.
              </p>
              <button className="px-4 py-2 text-sm mr-auto border rounded-2xl hover:bg-yellow-200 transition">
                View Project
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/prooject1.png"
                alt="Card Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="md:w-1/2 p-6 flex flex-col justify-center  bg-amber-400">
              <h2 className="text-2xl font-bold mb-4">
                Vehicle Parking
                <br />
                Management System
              </h2>
              <p className="text-gray-600 mb-6">
                Designed a complete Vehicle Parking Management System, including a modern landing page, a clean and functional admin dashboard, a mobile app interface, and informative infographics to enhance user experience and data visualization.
              </p>
              <button className="px-4 py-2 text-sm mr-auto border rounded-2xl hover:bg-yellow-200 transition">
                View Project
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/project2.png"
                alt="Card Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Card 3 */}
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="md:w-1/2 p-6 flex flex-col justify-center bg-amber-400">
              <h2 className="text-2xl font-bold mb-4">
                Property
                <br />
                Management System
              </h2>
              <p className="text-gray-600 mb-6">
                Designed a Property Management System with a sleek landing page, a functional admin dashboard, and informative infographics to enhance user engagement and data clarity.
              </p>
              <button className="px-4 py-2 text-sm mr-auto border rounded-2xl hover:bg-yellow-200 transition">
                View Project
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/property.png"
                alt="Card Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
           {/* Card 4 */}
 <div className="flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="md:w-1/2 p-6 flex flex-col justify-center  bg-amber-400">
              <h2 className="text-2xl font-bold mb-4">
                Websites
              </h2>
              <p className="text-gray-600 mb-6">
                Designed various websites across different industries, including spa, modeling, and more focusing on modern UI, user-friendly layouts, and visually appealing designs.
              </p>
              <button className="px-4 py-2 text-sm mr-auto border rounded-2xl hover:bg-yellow-200 transition">
                View Project
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/spa.png"
                alt="Card Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
           {/* Card 5 */}
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="md:w-1/2 p-6 flex flex-col justify-center bg-amber-400">
              <h2 className="text-2xl font-bold mb-4">
                Admin Dashboards
              </h2>
              <p className="text-gray-600 mb-6">
                Designed multiple Admin Dashboards for diverse domains such as HRM, laboratory systems, and more focused on clean layouts, intuitive user experience, and effective data visualization.
              </p>
              <button className="px-4 py-2 text-sm mr-auto border rounded-2xl hover:bg-yellow-200 transition">
                View Project
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/dashboards.png"
                alt="Card Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
           {/* Card 6 */}
 <div className="flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <div className="md:w-1/2 p-6 flex flex-col justify-center  bg-amber-400">
              <h2 className="text-2xl font-bold mb-4">
                Mobile Applications
              </h2>
              <p className="text-gray-600 mb-6">
                Designed mobile apps for various use cases, including a vehicle parking app and a food ordering app emphasizing intuitive navigation, modern UI, and user-friendly experiences.
              </p>
              <button className="px-4 py-2 text-sm mr-auto border rounded-2xl hover:bg-yellow-200 transition">
                View Project
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/project2.png"
                alt="Card Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          
        </div>
      </div>
        

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center items-center mb-12">
            <motion.h1
              className="text-xl font-semibold relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.6 }}
            >
              Contact
              <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-yellow-400 rounded-full -mb-1 z-[-1]"></span>
            </motion.h1>
          </div>

          <motion.div
            className="mt-12 max-w-xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <p className="text-gray-600 mb-6">
              Interested in working together or have any questions? Let's connect!
            </p>
            <a
              href="mailto:eyuelendale7@gmail.com"
              className="inline-block bg-yellow-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Send a Message
            </a>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
