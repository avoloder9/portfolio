import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/html.png",
    label: "HTML",
    desc: "Markup",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "Styling",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Language",
  },
  {
    imgSrc: "/images/typescript.png",
    label: "Typescript",
    desc: "Language",
  },
  {
    imgSrc: "/images/angular.png",
    label: "Angular",
    desc: "Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: "/images/c-sharp.png",
    label: "C#",
    desc: "Language",
  },
  {
    imgSrc: "/images/asp.net.png",
    label: "ASP.NET",
    desc: "Framework",
  },
  {
    imgSrc: "/images/sql.png",
    label: "SQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/mySql.png",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/flutter.png",
    label: "Flutter",
    desc: "Toolkit",
  },
  {
    imgSrc: "/images/dart.png",
    label: "Dart",
    desc: "Language",
  },
  {
    imgSrc: "/images/git.png",
    label: "Git",
    desc: "Versioning",
  },
  {
    imgSrc: "/images/visual-studio.png",
    label: "Visual Studio",
    desc: "IDE",
  },
  {
    imgSrc: "/images/visual-studio-code.png",
    label: "Visual Studio Code",
    desc: "Editor",
  },
];
const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Development Stack</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          These are the tools I enjoy using to build responsive and reliable
          digital solutions.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skill;
