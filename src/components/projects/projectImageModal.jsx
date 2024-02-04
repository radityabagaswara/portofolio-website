import { IconX } from "@tabler/icons-react";
import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const ProjectImageModal = ({ image, close }) => {
  return (
    <TransformWrapper centerZoomedOut centerOnInit>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div
            className="fixed z-[61] left-[50%] top-[50%] bg-black bg-opacity-50 w-full h-full"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="absolute top-4 right-4 z-[80]">
              <button
                onClick={close}
                className="btn"
                style={{ borderRadius: "100%", padding: "0.5rem" }}
              >
                <IconX size={24} />
              </button>
            </div>
            <TransformComponent>
              <div className="hover:cursor-grab active:cursor-grabbing overflow-y-auto rounded-lg flex items-center justify-center h-screen relative">
                <div className="p-4 flex flex-col gap-3 items-center w-screen">
                  <div className="">
                    <img
                      width="0"
                      height="0"
                      className="h-full w-full xl:max-h-[700px] transition-opacity object-cover rounded-2xl bg-primary/[0.5] "
                      src={image}
                    />
                  </div>
                </div>
              </div>
            </TransformComponent>
          </div>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

export default ProjectImageModal;
