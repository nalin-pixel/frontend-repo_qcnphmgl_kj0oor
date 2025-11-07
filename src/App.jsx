import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Internship from './components/Internship';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-tight">Abdullah Hafizh</a>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a className="hover:text-slate-900" href="#experience">Experience</a>
            <a className="hover:text-slate-900" href="#skills">Skills</a>
            <a className="hover:text-slate-900" href="#projects">Projects</a>
            <a className="hover:text-slate-900" href="#education">Education</a>
            <a className="hover:text-slate-900" href="#internship">Internship</a>
          </nav>
          <a
            href="mailto:abdllhhafizh@gmail.com"
            className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow hover:bg-slate-800"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Internship />
      </main>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Abdullah Hafizh. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:abdllhhafizh@gmail.com" className="text-slate-700 hover:text-slate-900">Email</a>
            <a href="#projects" className="text-slate-700 hover:text-slate-900">GitHub Projects</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
