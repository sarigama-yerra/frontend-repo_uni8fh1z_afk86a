const experiences = [
  {
    role: 'Magang IT Support',
    company: '—',
    period: '2023',
    points: [
      'Membantu troubleshooting hardware & software',
      'Mendukung kebutuhan jaringan dasar',
      'Melayani tiket dan dokumentasi'
    ]
  },
  {
    role: 'Asisten Praktikum (Kampus)',
    company: 'Universitas Teknokrat Indonesia',
    period: '2022',
    points: [
      'Membimbing praktikum pemrograman dasar',
      'Mereview tugas dan membantu problem solving',
      'Koordinasi tim asisten'
    ]
  }
]

export default function Experience() {
  return (
    <div className="space-y-4">
      {experiences.map((e) => (
        <div key={e.role} className="rounded-xl border border-gray-200 p-5 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{e.role}</h3>
              <p className="text-sm text-gray-600">{e.company}</p>
            </div>
            <span className="text-sm text-gray-500">{e.period}</span>
          </div>
          <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
