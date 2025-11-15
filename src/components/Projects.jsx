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

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {projects.map((p) => (
        <div key={p.title} className="rounded-xl border border-gray-200 p-5 bg-white">
          <h3 className="font-medium text-gray-900">{p.title}</h3>
          <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-lg bg-gray-100 text-gray-700">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
