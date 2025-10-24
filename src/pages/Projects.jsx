import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio site built with React and TailwindCSS.",
      link: "#",
      github: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecast app using OpenWeather API and React.",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="max-w-6xl px-4 py-16 mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
