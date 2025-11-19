const About = () => {
  const stats = [
    { number: "50+", label: "Projects completed" },
    { number: "8", label: "Years of experience" },
    { number: "15+", label: "Technologies mastered" },
    { number: "01", label: "Passionate developer" },
  ];

  return (
    <section id="about" className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="flex items-start gap-3 mb-8">
              <span className="block w-2 h-2 rounded-full bg-foreground mt-3 flex-shrink-0" />
              <h2 className="text-lg md:text-xl">About</h2>
            </div>
          </div>

          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-16">
              Dedicated to crafting elegant solutions through clean code, thoughtful design, and a commitment to continuous learning.
            </p>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black">
                    {stat.number}
                  </div>
                  <p className="text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
