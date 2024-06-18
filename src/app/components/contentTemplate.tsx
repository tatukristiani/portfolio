"use client";

import React, { ReactNode, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "../styles/contentTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

export default function ContentTemplate({
  content,
  contentType,
  toolTipText,
}: {
  content: ReactNode;
  contentType: string;
  toolTipText?: string;
}) {
  const [activeState, setActiveState] = useState(true);
  const ref = useRef(null);

  setTimeout(() => {
    setActiveState(!activeState);
  }, 500);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  return (
    <motion.div
      className="content-template flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        margin: "-200px",
      }}
    >
      <div className="content-header-section">
        <h1 className="font-medium">
          {contentType}
          {activeState ? "_" : " "}
          {toolTipText != null && toolTipText.length > 0 && (
            <Tooltip
              TransitionComponent={Zoom}
              title={toolTipText.split("\n").map(function (line, index) {
                return (
                  <div key={index}>
                    {line}
                    <br />
                  </div>
                );
              })}
            >
              <FontAwesomeIcon
                className="text-3xl mb-2 hover:text-blue-400"
                icon={faCircleInfo}
              />
            </Tooltip>
          )}
        </h1>
        <motion.div
          ref={ref}
          className="content-header-line"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <div className="content-section">
        <>{content}</>
      </div>
    </motion.div>
  );
}
