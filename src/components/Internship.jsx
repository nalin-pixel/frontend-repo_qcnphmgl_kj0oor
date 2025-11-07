import React from 'react';
import { BriefcaseBusiness, ExternalLink } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Internship</h2>
        <div className="mt-8 grid gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                  <BriefcaseBusiness className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">PT Artivisi Intermedia</h3>
                  <p className="text-sm text-slate-600">Junior Programmer (Apr - Jun 2017)</p>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                href="https://artivisi.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
