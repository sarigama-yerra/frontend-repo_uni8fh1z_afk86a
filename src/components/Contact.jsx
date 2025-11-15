import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-gray-200 p-5 bg-white">
        <h3 className="font-medium text-gray-900">Hubungi</h3>
        <p className="mt-2 text-sm text-gray-700">Terbuka untuk peluang kerja, magang, atau kolaborasi.</p>
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2"><Mail size={16}/> email@contoh.com</p>
          <p className="flex items-center gap-2"><MapPin size={16}/> Indonesia</p>
        </div>
      </div>
      <form className="rounded-xl border border-gray-200 p-5 bg-white">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Nama" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <input type="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <textarea placeholder="Pesan" rows="4" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <button type="submit" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm">Kirim</button>
        </div>
      </form>
    </div>
  )
}
