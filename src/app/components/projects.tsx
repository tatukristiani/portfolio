import Project from "./project";

// Project images
import mymovieImage from "../images/cropped-mymovie.png";
import forgottenBrotherhoodImage from "../images/cropped-forgotten-brotherhood.png";
import vincitImage from "../images/cropped-vincit-project.png";
import consoleChess from "../images/cropped-console-chess.png";
import portfolioImage from "../images/cropped-portfolio.png";
import webScraperImage from "../images/cropped-web-scraper.png";

// Tech stack icons
import { JavascriptOriginal } from "devicons-react";
import { UnityOriginal } from "devicons-react";
import { AzuresqldatabasePlain } from "devicons-react";
import { AzuredevopsPlain } from "devicons-react";
import { NodejsOriginalWordmark } from "devicons-react";
import { MongodbOriginalWordmark } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { NextjsOriginal } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { CsharpOriginal } from "devicons-react";
import { DotnetcoreOriginal } from "devicons-react";

/* eslint-disable */
export default function Projects() {
  // Project website link & Github link
  const consoleChessLinks = [
    "",
    "https://github.com/tatukristiani/console-chess",
  ];
  const myMoviesLinks = [
    "https://mymovieonline.azurewebsites.net",
    "https://github.com/tatukristiani/azure-mymovies-react",
  ];
  const forgottenLinks = [
    "https://simmer.io/@tatukristian/forgotten-brotherhood",
    "https://github.com/tatukristiani/ForgottenBrotherhoodUnity",
  ];
  const webScraperLinks = [
    "",
    "https://github.com/tatukristiani/shop-scraper-frontend",
  ];
  const porftolioLinks = ["http://localhost:3000/", ""];
  const vincitLinks = ["", "https://github.com/tatukristiani/VincitProject"];

  // Project descriptions
  const consoleChessDesc = "Console chess application";
  const myMoviesDesc = "Website to track seen movies";
  const forgottenDesc = "First 2D Unity game";
  const webScraperDesc = "Web scraper project";
  const portfolioDesc = "Personal portfolio website";
  const vincitDesc = "Historic bitcoin analyzer";

  // Project tech stacks
  const consoleChessStack = [<CsharpOriginal size="40" />];
  const myMoviesStack = [
    <CsharpOriginal size="40" />,
    <DotnetcoreOriginal size="40" />,
    <ReactOriginal size="40" />,
    <AzuredevopsPlain size="40" />,
    <AzuresqldatabasePlain size="40" />,
  ];
  const forgottenStack = [
    <CsharpOriginal size="40" />,
    <UnityOriginal size="40" />,
  ];
  const webScraperStack = [
    <JavascriptOriginal size="40" />,
    <NodejsOriginalWordmark size="40" />,
    <MongodbOriginalWordmark size="40" />,
  ];
  const portfolioStack = [
    <NextjsOriginal size="40" />,
    <TailwindcssOriginal size="40" />,
  ];
  const vincitStack = [<JavascriptOriginal size="40" />];

  return (
    <div
      id="projects"
      className="flex flex-row flex-wrap gap-12 gap-y-12 justify-center m-6"
    >
      <Project
        projectInfo={{
          name: "My Movies",
          image: mymovieImage,
          links: myMoviesLinks,
          description: myMoviesDesc,
          techStack: myMoviesStack,
        }}
      />
      <Project
        projectInfo={{
          name: "Forgotten Brotherhood",
          image: forgottenBrotherhoodImage,
          links: forgottenLinks,
          description: forgottenDesc,
          techStack: forgottenStack,
        }}
      />
      <Project
        projectInfo={{
          name: "Console chess",
          image: consoleChess,
          links: consoleChessLinks,
          description: consoleChessDesc,
          techStack: consoleChessStack,
        }}
      />
      <Project
        projectInfo={{
          name: "Web scraper ",
          image: webScraperImage,
          links: webScraperLinks,
          description: webScraperDesc,
          techStack: webScraperStack,
        }}
      />
      <Project
        projectInfo={{
          name: "Portfolio",
          image: portfolioImage,
          links: porftolioLinks,
          description: portfolioDesc,
          techStack: portfolioStack,
        }}
      />
      <Project
        projectInfo={{
          name: "Vincit project",
          image: vincitImage,
          links: vincitLinks,
          description: vincitDesc,
          techStack: vincitStack,
        }}
      />
    </div>
  );
}
