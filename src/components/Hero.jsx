import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-700 backdrop-blur-sm">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Open to opportunities
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Abdullah Hafizh
            </h1>
            <p className="mt-2 text-xl font-medium text-slate-600">Software Engineer</p>
            <p className="mt-6 max-w-xl text-slate-600">
              Building robust, user-centric software across the stack. Experienced in crafting clean UI, efficient backends, and reliable data flows.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:abdllhhafizh@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Mail className="h-4 w-4" />
                abdllhhafizh@gmail.com
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-700 shadow-sm hover:bg-slate-50"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="relative h-80 w-full md:h-[28rem]">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 -z-0 blur-3xl">
        <div className="mx-auto h-72 max-w-3xl bg-gradient-to-r from-blue-200/60 via-purple-200/60 to-pink-200/60 opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
