import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      name: "Senior Systems Developer",
      category: "Senior SDE",
      year: "Feb 2025 - Aug 2025",
      description: "Leading development of scalable systems with a focus on user experience, performance, and maintainability.",
      details: [
        "Architected and implemented high-performance backend systems",
        "Collaborated with cross-functional teams to deliver impactful features",
        "Mentored junior developers and contributed to code reviews",
        "Optimized system performance and reduced latency",
      ],
    },
    {
      name: "Systems Developer III",
      category: "SDE",
      year: "2025",
      description: "Developed and maintained critical systems infrastructure.",
      details: [
        "Built robust APIs and microservices",
        "Improved system reliability and scalability",
        "Worked on complex technical challenges",
        "Participated in architecture discussions",
      ],
    },
    {
      name: "Systems Developer II",
      category: "Junior SDE",
      year: "2024",
      description: "Grew as a developer while contributing to key projects.",
      details: [
        "Developed new features and functionality",
        "Fixed bugs and improved code quality",
        "Learned best practices and design patterns",
        "Collaborated with team members on projects",
      ],
    },
    {
      name: "Technical Product Specialist",
      category: "Customer Support",
      year: "Sep 2019 - Aug 2020",
      description: "Provided technical support and helped customers succeed.",
      details: [
        "Resolved complex technical issues for customers",
        "Documented solutions and best practices",
        "Collaborated with engineering teams on bug fixes",
        "Improved customer satisfaction metrics",
      ],
    }
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
                  onClick={() => setSelectedProject(index)}
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

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{projects[selectedProject].name}</DialogTitle>
                <DialogDescription className="text-base pt-2">
                  {projects[selectedProject].category} • {projects[selectedProject].year}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">{projects[selectedProject].description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {projects[selectedProject].details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default Work;
