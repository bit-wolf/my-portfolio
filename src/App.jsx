

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

const stagger = { hidden: { opacity: 0, y: 12 }, visible: (i = 1) => ({ opacity: 1, y: 0, transition: { staggerChildren: 0.04, delayChildren: i * 0.08 } }) }

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const data = {
  name: 'Your Name',
  title: 'Senior Software Engineer • Frontend & Backend',
  bio: `I build fast, accessible, and delightful web apps. I enjoy crafting pixel-perfect UI, solid architecture, and turning ideas into production.`,
  contact: {
    email: 'you@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourprofile'
  },
  skills: [
    { name: 'React', level: 'Expert' },
    { name: 'Angular', level: 'Advanced' },
    { name: 'Spring Boot', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Docker & Kubernetes', level: 'Intermediate' },
    { name: 'AWS / GCP', level: 'Intermediate' }
  ],
  certs: [
    { title: 'AWS Solutions Architect – Associate', issuer: 'Amazon', year: 2024 },
    { title: 'Oracle Certified Java Programmer', issuer: 'Oracle', year: 2022 },
    { title: 'React Professional Certification', issuer: 'Frontend Masters', year: 2023 }
  ],
  education: [
    { school: 'Institute of Tech', degree: 'B.Tech in Computer Science', year: '2016 - 2020' }
  ],
  projects: [
    { title: 'Project One', desc: 'A fullstack app with React + Spring Boot. Features realtime updates, auth, and CI/CD.', link: '#' },
    { title: 'Design System', desc: 'A component library used across multiple products with Storybook and unit tests.', link: '#' }
  ]
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-slate-800 antialiased">
      <header className="sticky top-0 backdrop-blur-md bg-white/60 border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">YN</div>
            <div className="text-sm font-semibold">{data.name}</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#certs" className="hover:text-slate-900">Certifications</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#" className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs shadow">Resume <FaDownload /></a>
          </nav>
          <div className="md:hidden">{/* Mobile menu placeholder */}
            <input id="menu-toggle" className="hidden" type="checkbox" />
            <label htmlFor="menu-toggle" className="cursor-pointer block p-2 rounded-md hover:bg-slate-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </label>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase text-sm text-indigo-600 font-medium tracking-wide">Hello, I’m</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">{data.name}</h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">{data.title} — {data.bio}</p>

            <div className="mt-6 flex items-center gap-3">
              <a href={`mailto:${data.contact.email}`} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-600 text-white shadow hover:translate-y-[-2px] transition-transform">
                <FaEnvelope /> <span>Contact Me</span>
              </a>
              <a href={data.contact.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-slate-200 text-sm hover:bg-slate-50">GitHub</a>
              <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-slate-200 text-sm hover:bg-slate-50">LinkedIn</a>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-white via-slate-50 to-white border border-slate-100 shadow-sm">
                <div className="text-xs text-slate-500">Experience</div>
                <div className="text-xl font-semibold">5+ yrs</div>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-white via-slate-50 to-white border border-slate-100 shadow-sm">
                <div className="text-xs text-slate-500">Open to</div>
                <div className="text-xl font-semibold">SWE / Frontend</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="w-full h-80 md:h-96 rounded-2xl bg-gradient-to-br from-indigo-50 to-pink-50 border border-slate-100 shadow-lg p-6 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-400 shadow-inner flex items-center justify-center text-white font-bold">YN</div>
                <h3 className="mt-4 text-xl font-semibold">Featured Highlights</h3>
                <p className="mt-2 text-sm text-slate-600">Design systems • Scalable Microservices • Frontend performance</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Latest Project</div>
                  <div className="font-semibold">Real-time dashboard</div>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center border border-slate-100">⚡</div>
              </div>
            </div>

            {/* floating blobs */}
            <div className="pointer-events-none select-none absolute -left-6 -top-6 w-36 h-36 rounded-full bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-30 blur-xl" />
            <div className="pointer-events-none select-none absolute -right-10 bottom-6 w-28 h-28 rounded-full bg-gradient-to-tr from-pink-200 to-pink-400 opacity-25 blur-lg" />
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div variants={fadeUp} className="md:col-span-1">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-slate-600">A quick snapshot of who I am and what I do. I ship features end-to-end and enjoy mentoring teams.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-700">{data.bio} I specialize in building high-performance frontend applications, designing resilient backend services, and creating developer-friendly tools and libraries. I care about testing, observability, and production readiness.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="font-medium">Bengaluru, India</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Availability</div>
                <div className="font-medium">Open to work</div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* SKILLS */}
        <section id="skills" className="grid gap-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">Skills</motion.h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {data.skills.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * i }} className="p-4 rounded-lg bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-slate-500">{s.level}</div>
                </div>
                <div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${s.level === 'Expert' ? 'w-[92%]' : s.level === 'Advanced' ? 'w-[74%]' : 'w-[48%]' } bg-gradient-to-r from-indigo-500 to-pink-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS & EDUCATION */}
        <section id="certs" className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {data.certs.map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">✓</div>
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs text-slate-500">{c.issuer} • {c.year}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold">Education</h3>
            <div className="mt-4 space-y-3">
              {data.education.map((e) => (
                <div key={e.school}>
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-xs text-slate-500">{e.school} • {e.year}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="grid gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.projects.map((p, i) => (
              <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group block p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <div className="text-xs text-slate-400">Project</div>
                </div>
                <p className="mt-3 text-slate-600">{p.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gradient-to-r from-white to-indigo-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold">Let’s collaborate</h3>
              <p className="mt-2 text-slate-600">Open to full-time opportunities and freelance projects. Drop me a message and I’ll get back within 2 business days.</p>

              <div className="mt-4 flex items-center gap-3">
                <a href={`mailto:${data.contact.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white shadow">Email <FaEnvelope /></a>
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border">LinkedIn <FaLinkedin /></a>
                <a href={data.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border">GitHub <FaGithub /></a>
              </div>
            </div>

            <motion.form initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="grid gap-3">
                <input className="px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your name" />
                <input className="px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Email" />
                <textarea className="px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="4" placeholder="Message" />
                <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white">Send</button>
              </div>
            </motion.form>
          </div>
        </section>

        <footer className="text-sm text-slate-500 py-6 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {data.name}. Built with ❤️ and React.</div>
          <div className="flex items-center gap-4">
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-700"><FaLinkedin /></a>
            <a href={data.contact.github} target="_blank" rel="noreferrer" className="hover:text-slate-700"><FaGithub /></a>
          </div>
        </footer>
      </main>
    </div>
  )
}
