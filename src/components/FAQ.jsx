import { useState } from 'react';

const faqs = [
  {
    q: 'Est-ce que mes clients ont besoin de telecharger une application ?',
    a: 'Non ! C\'est l\'un des grands avantages. La carte s\'ajoute directement dans Apple Wallet, l\'application native de l\'iPhone. Vos clients n\'ont rien a installer.',
  },
  {
    q: 'Comment scanner le QR code en caisse ?',
    a: 'Depuis votre dashboard, allez sur la page Scanner. Collez le contenu du QR code scanne (via votre scanner de caisse ou l\'appareil photo) et cliquez sur Valider. Les points sont credites instantanement.',
  },
  {
    q: 'Est-ce que ca fonctionne sur Android ?',
    a: 'Pour l\'instant, nous supportons Apple Wallet (iPhone). Le support Google Pay pour Android est en cours de developpement et sera disponible prochainement.',
  },
  {
    q: 'Puis-je personnaliser les couleurs de ma carte ?',
    a: 'Oui, depuis les Parametres de votre dashboard vous pouvez choisir la couleur principale, la couleur du texte et le nom de votre programme. La carte reflete l\'identite de votre commerce.',
  },
  {
    q: 'Mes donnees sont-elles securisees ?',
    a: 'Absolument. Nous utilisons un chiffrement de bout en bout, des tokens JWT securises et les donnees sont hebergees sur des serveurs europeens (Frankfurt). Nous ne revendons jamais vos donnees.',
  },
  {
    q: 'Puis-je changer de plan a tout moment ?',
    a: 'Oui, vous pouvez passer a un plan superieur ou inferieur a tout moment. La facturation est mensuelle et sans engagement.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-gray-800">{q}</span>
        <span className={`text-primary-500 text-xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="text-gray-500 pb-5 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions frequentes</h2>
          <p className="text-xl text-gray-500">Tout ce que vous devez savoir avant de commencer.</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}