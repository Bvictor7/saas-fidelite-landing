import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-primary-500">Fidelite Pro</a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-primary-500 transition text-sm font-medium">Fonctionnalites</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary-500 transition text-sm font-medium">Tarifs</a>
          <a href="#faq" className="text-gray-600 hover:text-primary-500 transition text-sm font-medium">FAQ</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://saas-fidelite-client.onrender.com/login" className="text-gray-600 hover:text-primary-500 transition text-sm font-medium">Se connecter</a>
          <a href="https://saas-fidelite-client.onrender.com/register" className="bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition">Essai gratuit</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 flex flex-col gap-1">
          <div className={`w-5 h-0.5 bg-gray-800 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-gray-800 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-gray-800 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <a href="#features" className="block text-gray-600 text-sm font-medium">Fonctionnalites</a>
          <a href="#pricing" className="block text-gray-600 text-sm font-medium">Tarifs</a>
          <a href="#faq" className="block text-gray-600 text-sm font-medium">FAQ</a>
          <a href="https://saas-fidelite-client.onrender.com/register" className="block bg-primary-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl text-center">Essai gratuit</a>
        </div>
      )}
    </nav>
  );
}
