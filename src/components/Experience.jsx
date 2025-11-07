import React from 'react';
import { Building2, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'PT Multidaya Dinamika',
    role: 'Software Engineer',
    period: 'Sept 2019 - Present',
    website: 'https://multidaya.id',
    bullets: [],
  },
  {
    company: 'CV Inti Multi Solusi',
    role: 'Freelance Programmer',
    period: '2022',
    website: 'https://imsgrow.com',
    bullets: [],
  },
  {
    company: 'PT Anilo Adikarya Sentosa',
    role: 'Junior Programmer',
    period: 'Sept 2018 - Sept 2019',
    website: 'https://anilo.id',
    bullets: [
      'Spearheaded development using PHP, HTML, CSS, JavaScript',
      'Engineered efficient SQL queries for data retrieval',
      'Built initial application structure with SQL, HTML, and PHP',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Work Experience</h2>
        <div className="mt-8 grid gap-6 md:mt-10">
          {experiences.map((exp) => (
            <div key={exp.company} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                    <Building2 className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{exp.company}</h3>
                    <p className="text-sm text-slate-600">{exp.role} • {exp.period}</p>
                  </div>
                </div>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                >
                  Visit <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              {exp.bullets.length > 0 && (
                <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
