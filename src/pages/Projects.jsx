import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectImageModal from "../components/projects/projectImageModal";

const Projects = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!params) return navigate("/");
    if (!params.slug) return navigate("/");
    fetch("/projects/" + params.slug + ".json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch(() => {
        navigate("/");
      });
  }, [params]);

  if (!data) return null;

  return (
    <div className="mt-3 container px-4 mx-auto">
      <div className="mb-3">
        <h1 className="font-semibold text-2xl">{data.title}</h1>
        <p className="text-sm">{data.type}</p>
      </div>
      <img
        src={data.thumbnail}
        className="w-full h-auto  aspect-video object-cover rounded-lg"
      />
      <div className="mt-3 flex justify-center">
        <p className="prose text-[#FFF5EE] text-justify">{data.description}</p>
      </div>
      <h3 className="text-lg mt-5 mb-2 font-semibold">Images</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {data.images.map((image, index) => {
          return (
            <img
              onClick={() => {
                setModalImage(image);
                setModal(true);
              }}
              key={index}
              src={image}
              className="bg-black hover:opacity-90 active:opacity-75 transition-all cursor-pointer w-full h-48 aspect-video object-cover rounded-lg"
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex flex-row flex-wrap items-center">
          <div className="px-3 py-1 bg-indigo-400/[0.4] rounded-full mr-2">
            Stacks
          </div>
          {data.stacks.map((stack, index) => {
            if (index >= data.stacks.length - 1) {
              return (
                <p className="text-sm" key={index}>
                  {stack}
                </p>
              );
            } else {
              return (
                <p className="text-sm" key={index}>
                  {stack},&nbsp;
                </p>
              );
            }
          })}
        </div>
        {data.website ? (
          <div className="flex flex-row flex-wrap items-center ">
            <div className="px-3 py-1 bg-indigo-400/[0.4] rounded-full mr-2">
              Website
            </div>
            <a
              href={data.website}
              target="_blank"
              className="text-sm"
              rel="noreferrer"
            >
              {data.website}
            </a>
          </div>
        ) : null}
        {data.github ? (
          <div className="flex flex-row flex-wrap items-center ">
            <div className="px-3 py-1 bg-indigo-400/[0.4] rounded-full mr-2">
              Github
            </div>
            <a
              href={data.github}
              target="_blank"
              className="text-sm"
              rel="noreferrer"
            >
              {data.github}
            </a>
          </div>
        ) : null}
      </div>
      {modal ? (
        <ProjectImageModal
          close={() => {
            setModal(false);
            setModalImage(null);
          }}
          image={modalImage}
        />
      ) : null}
    </div>
  );
};

export default Projects;
