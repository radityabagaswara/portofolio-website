import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, shortDescription, stacks, slug }) => {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="group cursor-pointer">
        <img
          src={image}
          className="rounded-xl aspect-video w-full h-auto object-cover group-hover:filter group-hover:brightness-75 transition-all duration-300 ease-in-out"
        />
        <h4 className="text-lg mt-2 text-center text-[#FFF5EE]">{title}</h4>
        <p className="text-center  mt-1  text-sm text-[#FFF5EE]">
          {shortDescription}
        </p>
        <div className="flex flex-row gap-3 flex-wrap justify-center mt-2">
          {stacks.map((stack, index) => {
            return (
              <div
                key={index}
                className="px-3 py-1 rounded-2xl bg-indigo-400/[0.85]"
              >
                <p className="text-sm text-[#FFF5EE]">{stack}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
