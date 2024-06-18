"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import "../styles/projects.css";

// TODO: Switch current porftolio with final image at the end
export default function Project({ projectInfo }: { projectInfo: any }) {
  const [detailsActive, setDetailsActive] = useState(false); // Used to show details of project
  const [githubIconActive, setGithubIconActive] = useState(false); // Used to animate github icon
  const [websiteIconActive, setWebsiteIconActive] = useState(false); // Used to animate website icon (if available)

  // Show details section+
  const showDetails = () => {
    setDetailsActive(true);
  };

  const hideDetails = () => {
    setDetailsActive(false);
  };

  // Sets the github icon active -> animate icon
  const handleGithubMouseEnter = () => {
    setGithubIconActive(true);
    setTimeout(() => {
      setGithubIconActive(false);
    }, 1000);
  };

  // Sets the website icon active -> animate icon
  const handleWebsiteIconEnter = () => {
    setWebsiteIconActive(true);
    setTimeout(() => {
      setWebsiteIconActive(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-2 max-w-md w-full">
      <div className="flex flex-row justify-between">
        <p className="col-start-1">{projectInfo.name}</p>
        <div className="flex flex-row items-end">
          {projectInfo.links != null && projectInfo.links[0].length > 0 && (
            <a href={projectInfo.links[0]} target="_blank">
              <FontAwesomeIcon
                icon={faGlobe}
                className={`text-white text-2xl -mr-4 ${
                  websiteIconActive ? "fa-flip" : ""
                }`}
                onMouseEnter={() => handleWebsiteIconEnter()}
              />
            </a>
          )}

          <a
            href={projectInfo.links != null ? projectInfo.links[1] : ""}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={`text-white text-2xl -mr-4 ${
                githubIconActive ? "fa-flip" : ""
              }`}
              onMouseEnter={() => handleGithubMouseEnter()}
            />
          </a>
        </div>
      </div>

      <div
        id="project-image-container"
        className="relative text-center col-start-1 col-span-2 max-w-full max-h-full overflow-hidden"
        onMouseEnter={() => showDetails()}
        onMouseLeave={() => hideDetails()}
      >
        <Image
          src={projectInfo.image}
          alt={projectInfo.name}
          className={`transition duration-300 ease-in-out block max-w-full h-auto ${
            detailsActive ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`transition duration-300 ease-in-out max-w-full flex flex-col justify-between p-2 absolute bottom-0 ${
            detailsActive ? "opacity-100" : "opacity-0"
          }`}
          style={{
            height: "-webkit-fill-available",
            width: "-webkit-fill-available",
          }}
        >
          <p className="m-8">{projectInfo.description}</p>
          <div className="skill-icon-container m-2 flex flex-row justify-end">
            <div className="skill-icon-flex-box flex flew-row justify-around gap-4 flex-wrap">
              {projectInfo.techStack.map(function (item: any, index: number) {
                return <div key={index}>{item}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
