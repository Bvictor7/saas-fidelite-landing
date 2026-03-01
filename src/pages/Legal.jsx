export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a href="/" className="text-primary-500 text-sm font-medium hover:underline mb-8 block">← Retour</a>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de confidentialite</h1>
        <p className="text-gray-400 text-sm mb-12">Derniere mise a jour : 1er mars 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable du traitement</h2>
            <p>Le responsable du traitement des donnees personnelles collectees via le service Fidelite Pro est :</p>
            <p className="mt-2 bg-gray-50 rounded-xl p-4 text-sm">
              <strong>Victor Amine Belahcene Terdejemane</strong><br />
              17 allee Burguidoy, 64120 Saint-Palais, France<br />
              Email : vbtbusiness000@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Donnees collectees</h2>
            <p>Dans le cadre de l'utilisation de Fidelite Pro, nous collectons les donnees suivantes :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Donnees des commercants</strong> : nom de l'etablissement, adresse email, mot de passe (chiffre), couleurs et logo de marque.</li>
              <li><strong>Donnees des clients des commercants</strong> : nom complet, adresse email, numero de telephone (optionnel), historique des transactions et points de fidelite.</li>
              <li><strong>Donnees de connexion</strong> : adresse IP, date et heure de connexion, navigateur utilise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalites du traitement</h2>
            <p>Vos donnees sont utilisees pour :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Creer et gerer votre compte commercant</li>
              <li>Generer et mettre a jour les cartes de fidelite digitales</li>
              <li>Envoyer des notifications push lors de l'ajout de points</li>
              <li>Assurer la securite et le bon fonctionnement du service</li>
              <li>Respecter nos obligations legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Base legale</h2>
            <p>Le traitement de vos donnees est fonde sur :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>L'execution du contrat</strong> : pour fournir le service souscrit</li>
              <li><strong>Le consentement</strong> : pour les notifications push</li>
              <li><strong>L'interet legitime</strong> : pour la securite du service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Duree de conservation</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Donnees de compte : conservees pendant toute la duree de l'abonnement + 3 ans apres la resiliation</li>
              <li>Donnees clients : conservees 12 mois apres la derniere activite (conformement aux CGU)</li>
              <li>Logs de connexion : 12 mois</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Partage des donnees</h2>
            <p>Vos donnees ne sont jamais vendues a des tiers. Elles peuvent etre partagees avec :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>MongoDB Atlas</strong> (hebergement base de donnees — serveurs europeens)</li>
              <li><strong>Render</strong> (hebergement du service — serveurs europeens)</li>
              <li><strong>Cloudinary</strong> (stockage des logos — si utilise)</li>
              <li><strong>Apple</strong> (notifications push via APNs)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Vos droits</h2>
            <p>Conformement au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Droit d'acces</strong> : obtenir une copie de vos donnees</li>
              <li><strong>Droit de rectification</strong> : corriger des donnees inexactes</li>
              <li><strong>Droit a l'effacement</strong> : supprimer vos donnees</li>
              <li><strong>Droit a la portabilite</strong> : recevoir vos donnees dans un format lisible</li>
              <li><strong>Droit d'opposition</strong> : vous opposer a certains traitements</li>
            </ul>
            <p className="mt-3">Pour exercer ces droits, contactez-nous a : <a href="mailto:vbtbusiness000@gmail.com" className="text-primary-500">vbtbusiness000@gmail.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Securite</h2>
            <p>Nous mettons en oeuvre des mesures techniques et organisationnelles pour proteger vos donnees : chiffrement des mots de passe (bcrypt), tokens JWT securises, connexions HTTPS, isolation des donnees par commercant.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
            <p>Pour toute question relative a cette politique : <a href="mailto:vbtbusiness000@gmail.com" className="text-primary-500">vbtbusiness000@gmail.com</a></p>
          </section>

        </div>
      </div>
    </div>
  );
}