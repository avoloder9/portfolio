const aboutItems = [
  // {
  //   label: "Project done",
  //   number: 10,
  // },
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
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Adnan, a fourth-year Software Engineering student
            at the Faculty of Information Technologies. I enjoy creating clean
            and efficient web applications using modern technologies. Eager to
            learn and grow, I&apos;m looking for opportunities to apply my
            skills and contribute to real projects. This portfolio shows some of
            the work I&apos;ve done so far and the tools I&apos;m comfortable
            with.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                {number !== null ? (
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                ) : (
                  <div className="text-sky-400 font-semibold md:text-2xl md:mb-2">
                    Experience
                  </div>
                )}
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
