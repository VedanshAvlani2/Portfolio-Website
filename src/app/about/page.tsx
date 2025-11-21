"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
} from "react-icons/si";
import {
  SiPython,
  SiR,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiPowerbi,
  SiTableau,
  SiAmazonaws,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiStreamlit,
  SiDuckdb,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiVercel,
  SiJira,
  SiMicrosoft,
  SiArduino,
  SiAutodesk,
  SiReact,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "vedansh.avlani@gmail.com",
    href: "mailto:vedansh.avlani@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+1 6402167826",
    href: "tel:+1 6402167826",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vedansh-avlani/",
    content: "/vedansh-avlani",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/VedanshAvlani2",
    content: "/VedanshAvlani2",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Versatile powerhouse for data analytics, automation, and ML.",
    icon: <SiPython size={"50px"} color="#3776AB" />,
    color: "#3776AB",
  },
  {
    name: "R",
    content: "Specialized for statistics, modeling, and elegant visualization.",
    icon: <SiR size={"50px"} color="#276DC3" />,
    color: "#276DC3",
  },
  {
    name: "MongoDB",
    content: "Flexible NoSQL database built for modern, scalable data apps.",
    icon: <SiMongodb size={"50px"} color="#47A248" />,
    color: "#47A248",
  },
  {
    name: "MySQL",
    content: "Reliable open-source relational database powering countless apps.",
    icon: <SiMysql size={"50px"} color="#4479A1" />,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    content: "Advanced SQL database - robust, scalable, and developer-friendly.",
    icon: <SiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "Oracle DB",
    content: "Enterprise-grade database for mission-critical applications.",
    icon: <SiOracle size={"50px"} color="#F80000" />,
    color: "#F80000",
  },
  {
    name: "Power BI",
    content: "Transforming raw data into actionable insights and visuals.",
    icon: <SiPowerbi size={"50px"} color="#F2C811" />,
    color: "#F2C811",
  },
  {
    name: "Tableau",
    content: "Crafting interactive dashboards for data-driven storytelling.",
    icon: <SiTableau size={"50px"} color="#E97627" />,
    color: "#E97627",
  },
  {
    name: "AWS",
    content: "Cloud infrastructure for scalable computing and storage.",
    icon: <SiAmazonaws size={"50px"} color="#FF9900" />,
    color: "#FF9900",
  },
  {
    name: "HTML5",
    content: "The backbone of the web - structure meets simplicity.",
    icon: <SiHtml5 size={"50px"} color="#E34F26" />,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    content: "Styling the web - clean, responsive, and pixel-perfect.",
    icon: <SiCss3 size={"50px"} color="#1572B6" />,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    content: "Dynamic, powerful, and everywhere - the web’s universal language.",
    icon: <SiJavascript size={"50px"} color="#F7DF1E" />,
    color: "#F7DF1E",
  },
  {
    name: "Streamlit",
    content: "Turns Python scripts into interactive, shareable web apps.",
    icon: <SiStreamlit size={"50px"} color="#FF4B4B" />,
    color: "#FF4B4B",
  },
  {
    name: "DuckDB",
    content: "Lightning-fast in-memory SQL engine for analytics on the fly.",
    icon: <SiDuckdb size={"50px"} color="#FFC700" />,
    color: "#FFC700",
  },
  {
    name: "Git",
    content: "Version control made simple - track, branch, and conquer.",
    icon: <SiGit size={"50px"} color="#F05032" />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    content: "Collaborating on code, managing projects, and open-source magic.",
    icon: <SiGithub size={"50px"} color="#181717" />,
    color: "#181717",
  },
  {
    name: "VS Code",
    content: "Lightweight IDE built for speed, simplicity, and extensions.",
    icon: <SiVisualstudiocode size={"50px"} color="#007ACC" />,
    color: "#007ACC",
  },
  {
    name: "Vercel",
    content: "Seamless deployments and blazing-fast hosting for React apps.",
    icon: <SiVercel size={"50px"} color="#000000" />,
    color: "#000000",
  },
  {
    name: "Jira",
    content: "Agile project management for organized, iterative progress.",
    icon: <SiJira size={"50px"} color="#0052CC" />,
    color: "#0052CC",
  },
  {
    name: "Microsoft 365",
    content: "Integrated productivity suite for work, collaboration, and insights.",
    icon: <SiMicrosoft size={"50px"} color="#00A4EF" />,
    color: "#00A4EF",
  },
  {
    name: "Arduino",
    content: "Hardware prototyping made easy — code meets circuitry.",
    icon: <SiArduino size={"50px"} color="#00979D" />,
    color: "#00979D",
  },
  {
    name: "Autodesk",
    content: "Design and 3D modeling for engineering, architecture, and art.",
    icon: <SiAutodesk size={"50px"} color="#0696D7" />,
    color: "#0696D7",
  },
  {
    name: "Hugging Face",
    content: "Empowering modern NLP and generative AI with transformer models.",
    icon: <img src="public\huggingface.svg" alt="Hugging Face" width="50" height="50" />,
    color: "#FFD54F",
  },
  {
    name: "React",
    content: "Declarative, efficient, and flexible front-end library for UIs.",
    icon: <SiReact size={"50px"} color="#61DAFB" />,
    color: "#61DAFB",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Vedansh Avlani</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Data Analyst and Product Manager
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I'm <strong>Vedansh Avlani</strong>, a Business Analytics and AI enthusiast passionate about creating 
              data-driven digital experiences. 
              With a strong foundation in analytics, machine learning, and full-stack development, I love turning complex 
              problems into elegant, actionable solutions.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you&apos;ll find me exploring emerging AI technologies, analyzing Formula 1 race data, or enjoying a great cup of coffee while sketching my next project idea.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
