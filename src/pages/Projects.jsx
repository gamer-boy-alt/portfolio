import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
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
    {
      title: "Modern banking website",
      description: "The third website that I built after learning react and was used together with tailwindcss",
      link: "https://hoobank-six-psi.vercel.app/#product",
      github: "https://github.com/gamer-boy-alt/hoobank",
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
