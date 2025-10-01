const aboutItems = [
  {
    label: "Internship at QSD",
    number: null,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      {" "}
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] text-justify">
            Welcome! I&apos;m Adnan, a Software Engineering graduate from the
            Faculty of Information Technologies. I enjoy designing and
            developing clean, efficient, and user-friendly software using modern
            technologies. Motivated to keep learning and improving, I&apos;m
            looking for opportunities to apply my knowledge and contribute to
            impactful projects. This portfolio highlights some of my work and
            the tools and frameworks I am most comfortable with.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label }, key) => (
              <div key={key}>
                <div className="text-sky-400 font-semibold md:text-2xl md:mb-2">
                  Experience
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
