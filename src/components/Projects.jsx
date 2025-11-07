import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Laravel-Instant-ID-Lang',
    year: '2018',
    desc: 'Authentication & pagination',
    link: 'https://github.com/abdullahhafizh/Laravel-Instant-ID-Lang',
  },
  {
    name: 'cms-mobil-admin',
    year: '2018-2019',
    desc: 'Vehicle data management, CRUD operations',
    link: 'https://github.com/abdullahhafizh/cms-mobil-admin',
  },
  {
    name: 'cms-mobil-member',
    year: '2018',
    desc: 'Checkout process with OTP verification',
    link: 'https://github.com/abdullahhafizh/cms-mobil-member',
  },
  {
    name: 'Ticketing',
    year: '2018',
    desc: 'Vue.js, SASS, PHP',
    link: 'https://github.com/abdullahhafizh/Ticketing',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Featured Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-600">{p.year} • {p.desc}</p>
                </div>
                <Github className="h-5 w-5 text-slate-500" />
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
              >
                View repository <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
