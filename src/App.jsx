import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

const projects = [
  { id: "p1", title: "Aurora — Personal Portfolio", description: "A minimal, performance-first portfolio site showcasing UI experiments and case studies.", tags: ["React", "Tailwind", "Accessibility"] },
  { id: "p2", title: "Atlas Notes", description: "A lightweight note-taking SPA with offline support and collaborative features.", tags: ["PWA", "IndexedDB", "WebSockets"] },
  { id: "p3", title: "Polaris Charts", description: "Reusable chart components & data visualization patterns for dashboards.", tags: ["Recharts", "D3 patterns"] },
];

function Nav() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-lg">Ifeabunike Onyedika</Link>
        <div className="flex items-center gap-6">
          <NavLink to="/" end className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-600'}>Home</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-600'}>Projects</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-600'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-600'}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Designing delightful interfaces & shipping clean frontends.</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">I build user-first web products — from layout systems and design systems to production React apps.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link to="/projects" className="px-4 py-2 bg-sky-600 text-white rounded-lg">See projects</Link>
        <a href="#contact" className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg">Work with me</a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded-full">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">About me</h2>
      <p className="text-slate-600 leading-relaxed">
        I’m Ifeabunike, a frontend engineer with a background in design. 
        I love turning ideas into products that are fast, accessible, and beautiful. 
        My stack includes React, Tailwind, and clean UI systems.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div><span className="text-slate-500">Location:</span> Lagos, Nigeria</div>
        <div><span className="text-slate-500">Email:</span> you@domain.com</div>
        <div><span className="text-slate-500">Available:</span> Freelance</div>
        <div><span className="text-slate-500">Languages:</span> English, Igbo</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }} className="grid gap-4 bg-white p-6 rounded-xl shadow-sm">
        <input required className="p-2 border rounded" placeholder="Your name" />
        <input type="email" required className="p-2 border rounded" placeholder="Email" />
        <textarea required className="p-2 border rounded" rows={4} placeholder="Message"></textarea>
        <button className="px-4 py-2 bg-sky-600 text-white rounded-lg">Send</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-6 text-center text-slate-600 bg-white">
      © {new Date().getFullYear()} Ifeabunike Onyedika. Built with React & TailwindCSS.
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Nav />
        <Routes>
          <Route path="/" element={<><Hero /><Projects /><About /><Contact /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
