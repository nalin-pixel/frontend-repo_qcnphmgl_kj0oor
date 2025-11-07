import React from 'react';
import { Code2, Database, FileJson2, Layers } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development (Advanced)',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'SASS'],
  },
  {
    category: 'Backend Development (Intermediate)',
    icon: Layers,
    items: ['PHP', 'Ruby'],
  },
  {
    category: 'Frameworks (Intermediate)',
    icon: Code2,
    items: ['Vue.js', 'Laravel'],
  },
  {
    category: 'Database (Intermediate)',
    icon: Database,
    items: ['SQL'],
  },
  {
    category: 'Data Formats (Advanced)',
    icon: FileJson2,
    items: ['JSON', 'YAML'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ category, icon: Icon, items }) => (
            <div key={category} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full bg-slate-50 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
