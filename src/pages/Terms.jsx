export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a href="/" className="text-primary-500 text-sm font-medium hover:underline mb-8 block">← Retour</a>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Conditions Generales d'Utilisation</h1>
        <p className="text-gray-400 text-sm mb-12">Derniere mise a jour : 1er mars 2026</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Objet</h2>
            <p>Les presentes Conditions Generales d'Utilisation (CGU) regissent l'acces et l'utilisation du service Fidelite Pro, une plateforme SaaS de gestion de cartes de fidelite digitales, edite par Victor Amine Belahcene Terdejemane.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Acceptation</h2>
            <p>En creant un compte sur Fidelite Pro, vous acceptez sans reserve les presentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Description du service</h2>
            <p>Fidelite Pro permet aux commercants de :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Creer et gerer un programme de fidelite personnalise</li>
              <li>Generer des cartes de fidelite compatibles Apple Wallet</li>
              <li>Crediter des points via scan de QR code</li>
              <li>Suivre l'activite de leurs clients depuis un dashboard</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Inscription et compte</h2>
            <p>Pour utiliser le service, vous devez creer un compte avec une adresse email valide et un mot de passe securise. Vous etes responsable de la confidentialite de vos identifiants. Tout acces non autorise a votre compte doit etre signale immediatement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Plans et facturation</h2>
            <div className="bg-gray-50 rounded-xl p-4 text-sm">
              <p className="font-semibold text-gray-800 mb-2">Plans disponibles :</p>
              <ul className="space-y-1">
                <li><strong>Gratuit</strong> : jusqu'a 50 clients, fonctionnalites de base</li>
                <li><strong>Starter (19€/mois)</strong> : jusqu'a 500 clients, notifications push, branding</li>
                <li><strong>Pro (49€/mois)</strong> : clients illimites, toutes les fonctionnalites</li>
              </ul>
            </div>
            <p className="mt-3">Les abonnements sont mensuels et sans engagement. La facturation est effectuee en debut de periode. Aucun remboursement n'est accorde pour les periodes entamees.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Obligations de l'utilisateur</h2>
            <p>Vous vous engagez a :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Utiliser le service conformement aux lois en vigueur</li>
              <li>Ne pas tenter d'acceder aux donnees d'autres commercants</li>
              <li>Obtenir le consentement de vos clients pour la collecte de leurs donnees</li>
              <li>Ne pas utiliser le service a des fins frauduleuses</li>
              <li>Informer vos clients de l'existence du programme de fidelite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Donnees des clients finaux</h2>
            <p>En tant que commercant utilisant Fidelite Pro, vous etes responsable du traitement des donnees personnelles de vos clients (nom, email, telephone). Vous devez vous assurer d'avoir leur consentement et les informer conformement au RGPD. Fidelite Pro agit comme sous-traitant au sens du RGPD.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Disponibilite du service</h2>
            <p>Fidelite Pro s'efforce d'assurer une disponibilite maximale du service. Cependant, des interruptions peuvent survenir pour maintenance ou en cas de force majeure. Aucune indemnite ne sera due en cas d'interruption.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Resiliation</h2>
            <p>Vous pouvez resilier votre compte a tout moment depuis votre dashboard. En cas de violation des CGU, Fidelite Pro se reserve le droit de suspendre ou supprimer votre compte sans preavis. Les donnees sont conservees 30 jours apres la resiliation, puis definitivement supprimees.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Limitation de responsabilite</h2>
            <p>Fidelite Pro ne saurait etre tenu responsable des dommages indirects lies a l'utilisation du service, notamment la perte de clientele ou de chiffre d'affaires. La responsabilite de Fidelite Pro est limitee au montant des sommes versees au cours des 3 derniers mois.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Modification des CGU</h2>
            <p>Fidelite Pro se reserve le droit de modifier les presentes CGU a tout moment. Les utilisateurs seront informes par email au moins 30 jours avant l'entree en vigueur des modifications. La poursuite de l'utilisation du service vaut acceptation des nouvelles CGU.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact</h2>
            <p>Pour toute question relative aux presentes CGU : <a href="mailto:vbtbusiness000@gmail.com" className="text-primary-500">vbtbusiness000@gmail.com</a></p>
          </section>

        </div>
      </div>
    </div>
  );
}