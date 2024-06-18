import About from "./components/about";
import Contact from "./components/contact";
import ContentTemplate from "./components/contentTemplate";
import Introduction from "./components/introduction";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import ScrollButton from "./components/scrollButton";
import Skills from "./components/skills";
import Work from "./components/work";

export default function Home() {
  const toolTipTextSkill =
    "I feel comfortable using every skill mentioned below.\n0% = Haven't used much.\n50% = Quite familiar, can utilize well.\n100% = I consider myself an expert.";
  return (
    <div className="home-container grid grid-cols-1 h-full">
      <Navbar />
      <Introduction />
      <ContentTemplate content={<About />} contentType="About" />
      <ContentTemplate
        content={<Skills />}
        contentType="Skills"
        toolTipText={toolTipTextSkill}
      />
      <ContentTemplate content={<Projects />} contentType="Projects" />
      <ContentTemplate content={<Work />} contentType="Work" />
      <Contact />
      <ScrollButton />
    </div>
  );
}
