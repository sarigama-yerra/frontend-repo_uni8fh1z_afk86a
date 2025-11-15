export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
