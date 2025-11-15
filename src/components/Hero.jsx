import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[75vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center">
        <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 md:p-8 shadow-sm pointer-events-auto">
          <p className="text-xs uppercase tracking-widest text-gray-700">Portfolio</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Ahmad Chikal</h1>
          <p className="mt-2 text-gray-700">Fresh Graduate S1 Informatika — Universitas Teknokrat Indonesia</p>
          <p className="mt-4 text-gray-700 max-w-xl">Fokus pada Web Development, Data Processing, IT Support, dan Desain 3D. Karakter: cepat belajar, problem solving, teamwork, kreatif.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm">Lihat Proyek</a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 text-sm">Kontak</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
