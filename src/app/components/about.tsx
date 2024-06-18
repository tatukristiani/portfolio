"use client";

export default function About() {
  const educationText = ">> Education: Software Engineer";
  const locationText = ">> Location: Finland, Vantaa";
  const workText = ">> Current job: Integration Developer at Frends Technology";
  const enjoyText =
    ">> I ENJOY: Going through the full SW development process from an idea to the final working product";
  const loveText =
    ">> I LOVE: Working with backend technologies & challenging myself";
  const quoteText = `>> "With a little bit of motivation & the right tools, anything is possible."`;

  return (
    <div id="about" className="content-container">
      <p>{educationText}</p>
      <p>{locationText}</p>
      <p>{workText}</p>
      <p>{enjoyText}</p>
      <p>{loveText}</p>
      <p>{quoteText}</p>
    </div>
  );
}
