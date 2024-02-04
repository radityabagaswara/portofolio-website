import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/projectsHome/ProjectCard";
import { useEffect, useState } from "react";

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col items-center">
        <img
          src="https://velcro.is3.cloudhost.id/portofolio/1622618408694.jpeg"
          className="w-44 h-3w-44 rounded-full mx-auto"
        />
        <h3 className="mt-3 text-2xl font-semibold">Raditya Bagaswara</h3>
        <p className="text-md">Full-Stack Web Developer</p>
        <div className="flex flex-row gap-4 mt-3">
          <a target="_blank" href="https://instagram.com/radityabagaswara">
            <IconBrandInstagram />
          </a>
          <a target="_blank" href="https://github.com/radityabagaswara">
            <IconBrandGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/radityabagaswara/"
          >
            <IconBrandLinkedin />
          </a>
          <a target="_blank" href="mailto:raditya.bagaswara@outlook.com">
            <IconMail />
          </a>
        </div>
      </div>
      <div className="mt-10" id="about">
        <SectionTitle title={"About Me"} />
        <p className="prose text-justify mt-2 text-[#FFF5EE]">
          Fresh graduate in Business Information Systems from Universitas
          Surabaya, expertise in full-stack website development. Proficient in
          HTML, CSS, JavaScript, TypeScript, PHP, C#, and MySQL, I have gained
          experience through various development projects during my studies and
          also through freelance projects I have undertaken. Skilled in
          problem-solving, adaptability, and the ability to work under pressure.
          I enjoy facing new challenges and to continuous learning.
        </p>
        <div className="mt-3">
          <a
            className="btn text-[#FFF5EE] hover:text-[#FFF5EE]"
            href="https://drive.google.com/file/d/1qNia6FTHhVvXVnTe2SAVIJl0Z9PjL35p/view?usp=sharing"
            target="_blank"
          >
            See My Resume
          </a>
        </div>
      </div>
      <div className="mt-8" id="projects">
        <SectionTitle title={"My Works"} />
        <p className="prose text-justify mt-2 text-[#FFF5EE]">
          I have developed a variety of projects, from simple websites to
          complex web applications. Here are some of my projects that I have
          developed:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-3 gap-y-5">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
      <div className="mt-8" id="contact">
        <SectionTitle title={"Contact Me"} />
        <p className="prose text-justify mt-2 text-[#FFF5EE]">
          If you have any questions or would like to work with me, feel free to
          email me at raditya.bagaswara@outlook.com or click the button below!
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="mailto:raditya.bagaswara@outlook.com"
            className="btn flex flex-row justify-center items-center gap-3"
          >
            <IconMail size={20} />
            Send Me An Email
          </a>
        </div>
      </div>
    </div>
  );
}
