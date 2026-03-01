const features = [
  {
    icon: '🎴',
    title: 'Cartes Apple Wallet',
    description: 'Generez des cartes de fidelite digitales compatibles Apple Wallet. Vos clients les ajoutent en un clic, sans application a installer.',
  },
  {
    icon: '📱',
    title: 'Scanner QR Code',
    description: 'Scannez le QR code du client en caisse pour crediter ses points instantanement. Simple, rapide, sans friction.',
  },
  {
    icon: '🏆',
    title: 'Niveaux automatiques',
    description: 'Bronze, Silver, Gold — les niveaux se calculent automatiquement selon les points. Motivez vos clients a revenir plus souvent.',
  },
  {
    icon: '🔔',
    title: 'Notifications push',
    description: 'Chaque mise a jour de points envoie une notification sur le telephone du client. Il voit sa carte se mettre a jour en temps reel.',
  },
  {
    icon: '🎨',
    title: 'Branding personnalise',
    description: 'Couleurs, logo, nom du programme — chaque carte reflète l\'identite de votre commerce. Votre marque, pas la notre.',
  },
  {
    icon: '📊',
    title: 'Dashboard complet',
    description: 'Suivez vos clients, leurs points, leur historique de transactions. Toutes les donnees dont vous avez besoin, au meme endroit.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Une solution complete pour fideliser vos clients, sans complexite technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                {title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}