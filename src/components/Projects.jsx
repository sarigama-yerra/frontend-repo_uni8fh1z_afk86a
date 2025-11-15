import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Sistem Informasi Akademik Mini',
    desc: 'Aplikasi web sederhana untuk manajemen data mahasiswa menggunakan React di sisi frontend.',
    tags: ['React', 'Tailwind']
  },
  {
    title: 'Dashboard Analisis Data',
    desc: 'Explorasi data dan visualisasi dasar menggunakan Python & Spreadsheet.',
    tags: ['Python', 'Data']
  },
  {
    title: 'Modeling 3D Sederhana',
    desc: 'Koleksi karya desain 3D di Blender (modeling & rendering dasar).',
    tags: ['Blender', '3D']
  }
]

const card = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07 } })
}

export default function Projects() {
  return (
    <motion.div 
      className="grid md:grid-cols-3 gap-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
    >
      {projects.map((p, idx) => (
        <motion.div
          key={p.title}
          custom={idx}
          variants={card}
          className="rounded-xl border border-gray-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900/60 transition-transform hover:-translate-y-1"
        >
          <h3 className="font-medium text-gray-900 dark:text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-slate-300">{p.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 transition-colors hover:bg-gray-200 dark:hover:bg-slate-700">{t}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
