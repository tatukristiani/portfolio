import Skill from "./skill";
import "../styles/skills.css";

// Tech stack icons
import { JavascriptOriginal } from "devicons-react";
import { UnityOriginal } from "devicons-react";
import { AzuredevopsPlain } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { NextjsOriginal } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { DotnetcoreOriginal } from "devicons-react";
import { Html5OriginalWordmark } from "devicons-react";
import { Css3Original } from "devicons-react";
import { MysqlOriginal } from "devicons-react";
import { PostgresqlOriginal } from "devicons-react";
import { MongodbOriginal } from "devicons-react";
import { AzuresqldatabaseOriginal } from "devicons-react";
import { NodejsOriginal } from "devicons-react";
import { JavaOriginal } from "devicons-react";
import { JiraalignOriginal } from "devicons-react";
import { ConfluenceOriginal } from "devicons-react";
import { GitOriginal } from "devicons-react";

export default function Skills() {
  return (
    <div id="skills" className="content-container">
      <div className="skill-container flex flex-row justify-between">
        <div className="skill-section flex flex-col">
          <h2 className="text-3xl font-medium my-2">// Frontend</h2>
          <Skill
            skillName="React"
            skillPoints={90}
            skillLogo={<ReactOriginal size="25" />}
          />
          <Skill
            skillName="JavaScript"
            skillPoints={90}
            skillLogo={<JavascriptOriginal size="25" />}
          />
          <Skill
            skillName="HTML"
            skillPoints={90}
            skillLogo={<Html5OriginalWordmark size="25" />}
          />
          <Skill
            skillName="CSS"
            skillPoints={85}
            skillLogo={<Css3Original size="25" />}
          />
          <Skill
            skillName="Java"
            skillPoints={80}
            skillLogo={<JavaOriginal size="25" />}
          />
          <Skill
            skillName="Tailwind CSS"
            skillPoints={40}
            skillLogo={<TailwindcssOriginal size="25" />}
          />
        </div>
        <div className="skill-section flex flex-col">
          <h2 className="text-3xl font-medium my-2">// Backend</h2>
          <Skill
            skillName="Node + Express"
            skillPoints={85}
            skillLogo={<NodejsOriginal size="25" />}
          />
          <Skill
            skillName="ASP.NET Core (C#)"
            skillPoints={70}
            skillLogo={<DotnetcoreOriginal size="25" />}
          />
        </div>
        <div className="skill-section flex flex-col">
          <h2 className="text-3xl font-medium my-2">// Databases</h2>
          <Skill
            skillName="MSSQL"
            skillPoints={85}
            skillLogo={<AzuresqldatabaseOriginal size="25" />}
          />
          <Skill
            skillName="MySQL"
            skillPoints={80}
            skillLogo={<MysqlOriginal size="25" />}
          />
          <Skill
            skillName="PostgreSQL"
            skillPoints={70}
            skillLogo={<PostgresqlOriginal size="25" />}
          />
          <Skill
            skillName="MongoDB"
            skillPoints={65}
            skillLogo={<MongodbOriginal size="25" />}
          />
        </div>
        <div className="skill-section flex flex-col">
          <h2 className="text-3xl font-medium my-2">// Testing</h2>
          <Skill skillName="Integration Testing (Frends)" skillPoints={95} />
          <Skill skillName="Unit Testing" skillPoints={90} />
          <Skill skillName="xUnit" skillPoints={80} />
        </div>
        <div className="skill-section flex flex-col">
          <h2 className="text-3xl font-medium my-2">// Other</h2>
          <Skill skillName="Frends Integration Platform" skillPoints={95} />
          <Skill
            skillName="Git"
            skillPoints={90}
            skillLogo={<GitOriginal size="25" />}
          />
          <Skill
            skillName="Jira"
            skillPoints={90}
            skillLogo={<JiraalignOriginal size="25" />}
          />
          <Skill
            skillName="Confluence"
            skillPoints={90}
            skillLogo={<ConfluenceOriginal size="25" />}
          />
          <Skill skillName="REST API design/development" skillPoints={80} />
          <Skill
            skillName="Azure DevOps"
            skillPoints={65}
            skillLogo={<AzuredevopsPlain size="25" />}
          />
          <Skill
            skillName="Unity"
            skillPoints={30}
            skillLogo={<UnityOriginal size="25" />}
          />
        </div>
      </div>
    </div>
  );
}
