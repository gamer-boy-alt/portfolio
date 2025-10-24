export default function ProjectCard({ title, description, link, github }) {
  return (
    <div className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-lg">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex gap-4">
        <a href={link} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Live Demo</a>
        <a href={github} target="_blank" rel="noreferrer" className="text-gray-600 hover:underline">GitHub</a>
      </div>
    </div>
  );
}
