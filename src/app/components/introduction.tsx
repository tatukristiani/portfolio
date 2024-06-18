"use client";

import "../styles/introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Introduction() {
  const introduction2Text = `I'm a software engineer currently making
            companies keep their systems running smoothly as an Integration
            Developer.`;
  return (
    <div className="introduction-container p-12">
      <div className="text-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="introduction-text text-7xl drop-shadow-lg">
            Tatu Pulkkinen
          </h1>
          <p className="text-2xl drop-shadow-lg">
            Hello there! <br></br> {introduction2Text}
            <br />
            You can find out more down below!
          </p>
          <div className="mt-4">
            <FontAwesomeIcon
              className="animate-bounce w-6 h-6 text-white text-2xl"
              icon={faArrowDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
