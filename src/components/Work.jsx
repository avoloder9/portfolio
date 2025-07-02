import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/projekat_eBolnica.png",
    title: "eBolnica – Desktop & Mobile Healthcare App",
    tags: [".NET", "Flutter", "RabbitMQ", "ML.NET", "Healthcare"],
    projectLink: "https://github.com/avoloder9/eBolnica-RS2/",
  },
  {
    imgSrc: "/images/projekat_tracker.png",
    title: "Expense Tracker – Mobile App",
    tags: ["Flutter", "Mobile", "Finance"],
    projectLink: "https://github.com/avoloder9/Expense_tracker",
  },
  {
    imgSrc: "/images/projekat_ml.png",
    title: "Heart Disease Prediction Agent",
    tags: ["ML.NET", "JavaScript", "AI", "Healthcare"],
    projectLink: "https://github.com/avoloder9/Heart-Disease-Agent",
  },
  {
    imgSrc: "/images/praksa.png",
    title: "QSD Shop – Laravel Backend for Webshop",
    tags: ["Laravel", "MySQL", "eCommerce", "Backend"],
    projectLink: "https://github.com/avoloder9/Qsd-Shop",
  },
  {
    imgSrc: "/images/bankist.png",
    title: "Bankist – Real-time Finance Web App",
    tags: [".NET", "Angular", "SignalR", "Real-time"],
    projectLink: "https://github.com/avoloder9/Bankist_WebApp",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Projects</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;
