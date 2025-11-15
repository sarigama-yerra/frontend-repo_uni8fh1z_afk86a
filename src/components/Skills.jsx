const skills = [
  {
    group: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
  {
    group: 'Data Processing',
    items: ['Python (Pandas/Numpy)', 'SQL', 'Excel/Google Sheets']
  },
  {
    group: 'IT Support',
    items: ['Troubleshooting', 'Networking Basics', 'Hardware/Software']
  },
  {
    group: 'Desain 3D',
    items: ['Blender', 'Basic Modeling & Rendering']
  }
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((s) => (
        <div key={s.group} className="rounded-xl border border-gray-200 p-5 bg-white">
          <h3 className="font-medium text-gray-900 mb-2">{s.group}</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            {s.items.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
