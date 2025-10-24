import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio site built with React and TailwindCSS.",
      link: "https://portfolio-pearl-pi-49.vercel.app/",
      github: "https://github.com/gamer-boy-alt/portfolio",
    },
    {
      title: "First Practice Website",
      description: "The website I first built after learning tailwindcss",
      link: "https://my-tailwind-project-jjkm.onrender.com/",
      github: "https://github.com/gamer-boy-alt/my-tailwind-project",
    },
    {
      title: "Acme Rockets Website",
      description: "The second website I built after learning tailwindcss that is interactive because of javascript was used together with tailwindcss",
      link: "https://acme-rockets-51cs.onrender.com/",
      github: "https://github.com/gamer-boy-alt/my_website",
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
