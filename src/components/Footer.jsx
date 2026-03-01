export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-3">Fidelite Pro</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              La solution de fidelite digitale pour les commercants de proximite.
              Simple, efficace, sans application a installer.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Produit</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">Fonctionnalites</a></li>
              <li><a href="#pricing"  className="hover:text-white transition">Tarifs</a></li>
              <li><a href="#faq"      className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Compte</h4>
            <ul className="space-y-2">
              <li><a href="https://saas-fidelite-client.onrender.com/login"    className="hover:text-white transition">Se connecter</a></li>
              <li><a href="https://saas-fidelite-client.onrender.com/register" className="hover:text-white transition">Creer un compte</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2026 Fidelite Pro. Tous droits reserves.</p>
          <p className="text-sm">Fait avec passion pour les commercants</p>
        </div>
      </div>
    </footer>
  );
}