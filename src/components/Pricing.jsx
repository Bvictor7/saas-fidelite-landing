const plans = [
  {
    name: 'Gratuit',
    price: '0',
    description: 'Pour decouvrir et tester',
    color: 'border-gray-200',
    buttonStyle: 'border border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500',
    features: [
      'Jusqu\'a 50 clients',
      'Cartes Apple Wallet',
      'Scanner QR Code',
      'Dashboard basique',
      'Support par email',
    ],
    notIncluded: [
      'Notifications push',
      'Branding personnalise',
      'Statistiques avancees',
    ],
  },
  {
    name: 'Starter',
    price: '19',
    description: 'Pour les commerces en croissance',
    color: 'border-primary-500',
    popular: true,
    buttonStyle: 'bg-primary-500 hover:bg-primary-600 text-white',
    features: [
      'Jusqu\'a 500 clients',
      'Cartes Apple Wallet',
      'Scanner QR Code',
      'Notifications push',
      'Branding personnalise',
      'Support prioritaire',
    ],
    notIncluded: [
      'Statistiques avancees',
    ],
  },
  {
    name: 'Pro',
    price: '49',
    description: 'Pour les commerces etablis',
    color: 'border-gray-200',
    buttonStyle: 'border border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500',
    features: [
      'Clients illimites',
      'Cartes Apple Wallet',
      'Scanner QR Code',
      'Notifications push',
      'Branding personnalise',
      'Statistiques avancees',
      'Support dedie',
      'API access',
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-xl text-gray-500">
            Commencez gratuitement, passez au superieur quand vous etes pret.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map(({ name, price, description, color, popular, buttonStyle, features, notIncluded }) => (
            <div
              key={name}
              className={`bg-white rounded-2xl border-2 ${color} p-8 relative ${popular ? 'shadow-2xl scale-105' : 'shadow-sm'}`}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  Le plus populaire
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-gray-500 text-sm mb-4">{description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-gray-900">{price}€</span>
                  <span className="text-gray-400 mb-2">/mois</span>
                </div>
              </div>

              <a
                href="https://saas-fidelite-client.onrender.com/register"
                className={`block text-center font-semibold py-3 rounded-xl transition mb-8 ${buttonStyle}`}
              >
                Commencer
              </a>

              <ul className="space-y-3">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    {f}
                  </li>
                ))}
                {notIncluded.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-400 line-through">
                    <span className="text-gray-300">✕</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}