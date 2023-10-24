import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { Skill } from "../components/Skills";
import { projects, skills } from "../data";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Details } from "../components/Details";

export default function Home() {
  const [project, setProject] = useState({
    show: false,
  });
  return (
    <>
      <Head>
        <title>Bill Greatness - Portfolio</title>
      </Head>

      <div className="w-full bg-green-50 flex flex-col">
        <nav className="hidden md:flex items-center justify-around bg-white p-5">
          <h3>Bill Greatness</h3>
          <div className="gap-5 flex justify-around">
            <a href="#">About Me</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact Me</a>
          </div>
        </nav>
        <nav className="flex md:hidden justify-between items-center p-4 bg-blue-500">
          <h1 className="text-lg">Bill Greatness</h1>
          <button className="text-2xl">
            <HiOutlineMenuAlt3 />
          </button>
        </nav>
        {/* About Page */}
        <div className="flex flex-col md:flex-row p-5 items-center bg-contain bg-container bg-center">
          <Image
            src="/temp.png"
            width={300}
            height={300}
            className="object-contain"
          />
          <div className="md:p-10">
            <button className="flex bg-white items-center px-2 rounded-full">
              <BsDot className="text-2xl" />{" "}
              <p className="text-xs">Available for hiring</p>
            </button>
            <h3 className="text-3xl py-5">Bill Greatness</h3>
            <p className="leading-relaxed text-md md:text-lg">
              Hello there! 👋 I am a dedicated
              software engineer with over four years of experience, leveraging
              the power of 'Deep Work' to transform abstract concepts into
              tangible, innovative products. My passion lies in harnessing the
              potential of cutting-edge web technologies, constantly seeking
              avenues for growth and advancement.
            </p>
            <p className="leading-relaxed text-md md:text-lg pt-3">
            Beyond coding, I find immense
              joy in nurturing young minds, having dedicated the past three
              years to teaching children the art and science of programming.
              Join me on this journey of exploration and creation, where
              technology meets education, and imagination knows no bounds.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col  p-2 md:p-10 bg-blue-200">
          <h3 className="text-2xl py-2">Skills & Tools</h3>
          <div className="flex py-2 md:py-10 w-full overflow-y-auto space-x-5 h-48 items-center">
            {skills.map((info, idx) => (
              <div
                data-aos="zoom-in"
                key={idx}
                className="w-24 cursor-pointer rounded-md shrink-0 h-24 p-2 flex items-center text-center flex-col bg-white hover:border-2 hover:border-y-blue-500"
              >
                <Image
                  src={info.img}
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <p className="text-sm">{info.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col w-screen md:p-10 bg-blue-50 bg-p1 bg-no-repeat bg-cover bg-blend-multiply">
          <h3 className="text-2xl py-5 p-3 invert">Projects</h3>
          <div className="flex flex-col md:flex-row p-2 md:my-10 w-full flex-wrap md:gap-10 gap-5 justify-center">
            {projects.map((info, idx) => (
              <Skill project={info} setProject={setProject} key={idx} />
            ))}
          </div>
        </div>
        <AnimatePresence>
          {project.show && (
            <Details data={project} close={() => setProject({ show: false })} />
          )}
        </AnimatePresence>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}
