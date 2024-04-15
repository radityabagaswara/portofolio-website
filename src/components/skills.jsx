import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import React from "react";
import NestJSIcon from "./icons/nestjs";
import ExpressIcon from "./icons/express";
import PostgresIcon from "./icons/postgres";
import Linux from "./icons/linux";

const skillList = [
  {
    name: "HTML",
    icon: <IconBrandHtml5 size={"5rem"} />,
  },
  {
    name: "CSS",
    icon: <IconBrandCss3 size={"5rem"} />,
  },
  {
    name: "Javascript",
    icon: <IconBrandJavascript size={"5rem"} />,
  },
  {
    name: "Typescript",
    icon: <IconBrandTypescript size={"5rem"} />,
  },
  {
    name: "PHP",
    icon: <IconBrandPhp size={"5rem"} />,
  },
  {
    name: "Laravel",
    icon: <IconBrandLaravel size={"5rem"} />,
  },
  {
    name: "React",
    icon: <IconBrandReact size={"5rem"} />,
  },
  {
    name: "NextJS",
    icon: <IconBrandNextjs size={"5rem"} />,
  },
  {
    name: "NestJS",
    icon: <NestJSIcon size={"5rem"} />,
  },
  {
    name: "NodeJS",
    icon: <IconBrandNodejs size={"5rem"} />,
  },
  {
    name: "Bootstrap",
    icon: <IconBrandBootstrap size={"5rem"} />,
  },
  {
    name: "Tailwind",
    icon: <IconBrandTailwind size={"5rem"} />,
  },
  {
    name: "Express",
    icon: <ExpressIcon size="5rem" />,
  },
  {
    name: "MySQL",
    icon: <IconBrandMysql size={"5rem"} />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgresIcon size="5rem" />,
  },
  {
    name: "Git",
    icon: <IconBrandGit size="5rem" />,
  },
  {
    name: "GNU/Linux",
    icon: <Linux size="5rem" />,
  },
];

function Skills() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-center gap-5">
      {skillList.map((value, index) => {
        return (
          <div
            key={index}
            className="group relative flex justify-center cursor-pointer"
          >
            <div className="brightness-90 group-hover:brightness-100 transition-all">
              {value.icon}
            </div>
            <div className="-bottom-14 z-40 absolute w-full flex justify-center opacity-0 group-hover:opacity-100 transition-all">
              <div className="bg-[#fff5ee] px-4 py-3 opacity-90 rounded-lg">
                <p className="text-[#212121]">{value.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
