export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Nouveau — Cartes de fidelite digitales
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Fidelisez vos clients
            <span className="text-primary-500"> sans effort</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed">
            Creez des cartes de fidelite digitales pour Apple Wallet en quelques minutes.
            Vos clients accumulent des points, vous gardez leur fidelite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://saas-fidelite-client.onrender.com/register"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition text-lg"
            >
              Commencer gratuitement
            </a>
            <a
              href="#features"
              className="border border-gray-200 hover:border-primary-500 text-gray-700 hover:text-primary-500 font-semibold px-8 py-4 rounded-xl transition text-lg"
            >
              Voir comment ca marche
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">Gratuit pour commencer · Aucune carte bancaire requise</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 bg-white rounded-lg mx-4 px-4 py-1 text-xs text-gray-400 border border-gray-200">
                app.fidelitepro.fr/dashboard
              </div>
            </div>
            <div className="flex h-64">
              <div className="w-48 bg-primary-500 p-4 flex flex-col gap-2">
                <div className="text-white/60 text-xs uppercase tracking-widest mb-2">Programme</div>
                <div className="text-white font-semibold text-sm mb-4">Ma Boulangerie</div>
                {['Dashboard', 'Clients', 'Scanner', 'Parametres'].map((item, i) => (
                  <div key={item} className={`text-xs px-3 py-2 rounded-lg ${i === 0 ? 'bg-white text-primary-500 font-semibold' : 'text-white/70'}`}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-6 bg-gray-50">
                <div className="text-sm font-bold text-gray-800 mb-4">Dashboard</div>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Clients', value: '142', color: 'bg-primary-500' },
                    { label: 'Points', value: '3.2k', color: 'bg-yellow-400' },
                    { label: 'Gold', value: '18', color: 'bg-amber-500' },
                    { label: 'Silver', value: '34', color: 'bg-slate-400' },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-white rounded-xl p-3 flex items-center gap-2 shadow-sm">
                      <div className={`w-6 h-6 rounded-lg ${color}`} />
                      <div>
                        <div className="text-xs text-gray-400">{label}</div>
                        <div className="text-sm font-bold text-gray-800">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <div className="text-xs font-semibold text-gray-700 mb-2">Derniers clients</div>
                  {['Marie D.', 'Thomas L.', 'Sophie M.'].map((name, i) => (
                    <div key={name} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                      <span className="text-xs text-gray-600">{name}</span>
                      <span className="text-xs font-semibold text-primary-500">{[120, 85, 210][i]} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-44">
            <div className="bg-primary-500 rounded-xl p-3 text-center mb-2">
              <div className="text-white/60 text-xs mb-1">Programme</div>
              <div className="text-white text-2xl font-bold">120</div>
              <div className="text-white/60 text-xs">Points</div>
            </div>
            <div className="text-xs text-center text-gray-500">Carte Apple Wallet</div>
          </div>
        </div>
      </div>
    </section>
  );
}