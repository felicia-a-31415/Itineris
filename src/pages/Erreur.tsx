import { Link } from 'react-router-dom'

export default function Erreur() {
  return (
    <main>
      <h1>404 - Page non trouvée</h1>
      <p>Oups! Cette page n’existe pas.</p>
      <Link to="/tableaudebord">Retour au tableau de bord</Link>
    </main>
  )
}
