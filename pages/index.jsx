import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { Skill } from "../components/Skills";
import { projects, skills } from "../data";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Details } from "../components/Details";

const tiles = [
  "https://cdn4.iconfinder.com/data/icons/cygnus-essential-basic-vol-ii-1/64/zz_user_account_profile_avatar_person-64.png",
  "https://cdn3.iconfinder.com/data/icons/job-resume-6/66/32-64.png",
  "https://cdn4.iconfinder.com/data/icons/freelancer-4/128/contract_projects_freelancer-64.png",
  "https://cdn1.iconfinder.com/data/icons/office-322/24/email-message-envelope-letter-64.png",
];

const socials = [
  "https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-64.png",
  "https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-64.png",
  "https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-64.png",
  "https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-64.png",
];
export default function Home() {
  const [project, setProject] = useState({
    show: false,
  });
  const [tabs, setTabs] = useState(false);
  return (
    <>
      <Head>
        <title>Bill Greatness - Portfolio</title>
      </Head>

      <div id="about" className="w-full bg-green-50 flex flex-col">
        <nav className="hidden md:flex items-center justify-around bg-white p-5">
          <a href="#about" className="text-xl">
            {"{Bill Greatness}"}
          </a>

          <div className="gap-10 font-bold flex justify-around">
            <a href="#skills" className="hover:border-b-2 hover:pb-5 rounded-lg border-b-red-500">Skills</a>
            <a href="#projects" className="hover:border-b-2  hover:pb-2 hover:transition  delay-150 duration-300 rounded-lg border-b-red-500">Projects</a>
            <a href="#contact" className="hover:border-b-2 hover:pb-2 hover:transition  delay-150 duration-300 rounded-lg border-b-red-500">Contact Me</a>
            <a href="#" className="hover:border-b-2 hover:pb-2 hover:transition  delay-150 duration-300 rounded-lg border-b-red-500">Resume</a>
          </div>
        </nav>
        <nav className="flex md:hidden justify-between items-center p-4 bg-blue-200">
          <h1 className="text-lg">Bill Greatness</h1>
          <button className="text-2xl" onClick={() => setTabs(!tabs)}>
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
            <button className="flex my-2 bg-green-500 text-white items-center px-2 rounded-full">
              <BsDot className="text-2xl" />{" "}
              <p className="text-xs">Available for hiring</p>
            </button>
            <h3 className="text-3xl py-5">Bill Greatness</h3>
            <p className="leading-relaxed text-md md:text-lg">
              Hello there! 👋 I am a dedicated software engineer with over 4+
              years of experience, leveraging the power of 'Deep Work' to
              transform abstract concepts into tangible, innovative products. My
              passion lies in harnessing the potential of cutting-edge web
              technologies, constantly seeking avenues for growth and
              advancement.
            </p>
            <p className="leading-relaxed text-md md:text-lg pt-3">
              Beyond coding, I find immense joy in nurturing young minds, having
              dedicated the past three years to teaching children the art and
              science of programming.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="flex flex-col  p-2 md:p-10 bg-blue-200">
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
        <div
          id="projects"
          className="flex flex-col w-screen md:p-10 bg-blue-50  bg-no-repeat bg-cover bg-blend-multiply"
        >
          <h3 className="text-2xl py-5 p-3">
            Projects <span className="text-teal-500">({projects.length})</span>
          </h3>
          <div className="flex flex-col md:flex-row p-2 md:my-10 w-full flex-wrap gap-5">
            {projects.map((info, idx) => (
              <Skill project={info} setProject={setProject} key={idx} />
            ))}
          </div>
        </div>

        <div id="contact" className="flex flex-col md:p-10 mb-20">
          <h3 className="text-2xl py-5 p-3">Get in Touch</h3>
          <div className="flex justify-start gap-5 p-5">
            <a
              href="https://www.linkedin.com/in/bill-clinton-debrah-086278196/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 "
            >
              <Image
                src={socials[0]}
                width={100}
                height={100}
                className="object-contain w-10 h-10"
              />
            </a>
            <a
              href="https://x.com/bill_greatness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 "
            >
              <Image
                src={socials[1]}
                width={100}
                height={100}
                className="object-contain w-10 h-10"
              />
            </a>
            <a
              href="https://github.com/bill-greatness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 "
            >
              <Image
                src={socials[2]}
                width={100}
                height={100}
                className="object-contain w-10 h-10 "
              />
            </a>
            <a
              href="mailto:billgreatness@outlook?subject=From your Portofolio Site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 "
            >
              <Image
                src={socials[3]}
                width={100}
                height={100}
                className="object-contain w-10 h-10"
              />
            </a>
          </div>
        </div>
        <AnimatePresence>
          {project.show && (
            <Details data={project} close={() => setProject({ show: false })} />
          )}

          {tabs && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="fixed md:hidden flex p-2 justify-around bottom-0 bg-blue-200 w-full"
            >
              <a href="#about" className="flex flex-col items-center gap-2 ">
                <Image
                  src={tiles[0]}
                  width={100}
                  height={100}
                  className="object-contain w-10 h-10"
                />
                <p className="text-xs">About me</p>
              </a>
              <a href="#skills" className="flex flex-col items-center gap-2 ">
                <Image
                  src={tiles[1]}
                  width={100}
                  height={100}
                  className="object-contain w-10 h-10"
                />
                <p className="text-xs">Skill</p>
              </a>
              <a href="#projects" className="flex flex-col items-center gap-2 ">
                <Image
                  src={tiles[2]}
                  width={100}
                  height={100}
                  className="object-contain w-10 h-10"
                />
                <p className="text-xs">Projects</p>
              </a>
              <a href="#contact" className="flex flex-col items-center gap-2 ">
                <Image
                  src={tiles[3]}
                  width={100}
                  height={100}
                  className="object-contain w-10 h-10"
                />
                <p className="text-xs">Contact Me</p>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}
