"use client";

import { useEffect, useState } from "react";

/* eslint-disable */
export default function Skill({
  skillName,
  skillPoints,
  skillLogo,
}: {
  skillName: string;
  skillPoints: number;
  skillLogo?: any;
}) {
  const [skillBar, setSkillBar] = useState("....................");

  useEffect(() => {
    let newSkillBar = "";
    let portionValue = skillPoints / 5; // Gets the number of points out of 20 when skillPoints are given from 1 to 100.
    for (let i = 0; i < 20; i++) {
      if (i < portionValue) {
        newSkillBar += "#";
      } else {
        newSkillBar += ".";
      }
    }

    setSkillBar(`[${newSkillBar}] ${skillPoints}%`);
  });

  return (
    <div className="content-container mb-5">
      {skillLogo != null ? (
        <p>
          {skillLogo} {skillName}
        </p>
      ) : (
        <p>{skillName}</p>
      )}
      <p>{skillBar}</p>
    </div>
  );
}
