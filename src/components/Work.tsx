const Work = () => {
  const projects = [
    {
      name: "Senior Systems Developer",
      category: "Qualtrics",
      year: "Feb 2025 - Aug 2095",
    },
    {
      name: "Systems Developer III",
      category: "Qualtrics",
      year: "2025",
    },
    {
      name: "Systems Developer II",
      category: "Junior SDE",
      year: "2024",
    },
    {
      name: "Technical Product Specialist",
      category: "Customer Support",
      year: "Sep 2019 - Aug 2020",
    },
    {
      name: "Mobile Platform",
      category: "Development",
      year: "2024",
    },
    {
      name: "Data Visualization",
      category: "Frontend",
      year: "2023",
    },
    {
      name: "Authentication Service",
      category: "Backend",
      year: "2023",
    },
  ];
  return (
    <section id="work" className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="flex items-start gap-3 mb-8">
              <span className="block w-2 h-2 rounded-full bg-foreground mt-3 flex-shrink-0" />
              <h2 className="text-lg md:text-xl">Work</h2>
            </div>
          </div>

          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-16">
              Building scalable solutions with focus on user experience, performance, and maintainability.
            </p>

            <div className="space-y-0">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-t border-border py-6 hover:bg-muted/30 transition-colors cursor-pointer group"
                >
                  <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-12 md:col-span-5">
                      <h3 className="text-lg font-semibold group-hover:opacity-70 transition-opacity">
                        {project.name}
                      </h3>
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 text-right">
                      <p className="text-sm">{project.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
