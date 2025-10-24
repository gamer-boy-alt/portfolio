import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold">Hi, I'm Ifeabunike Onyedika 👋</h1>
      <h2 className="mb-4 text-2xl text-indigo-600">Front-end Developer</h2>
      <p className="max-w-xl mb-6 text-gray-600">
        I build modern, responsive web interfaces using React and TailwindCSS.
      </p>
      <Link
        to="/projects"
        className="px-6 py-3 text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700"
      >
        View My Work
      </Link>
    </section>
  );
}
