import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
        <NavLink to="/todo" style={{ marginRight: 10 }}>Tâches</NavLink>
        <NavLink to="/minuteur" style={{ marginRight: 10 }}>Minuteur</NavLink>
        <NavLink to="/statistiques" style={{ marginRight: 10 }}>Statistiques</NavLink>
        <NavLink to="/conseils" style={{ marginRight: 10 }}>Conseils</NavLink>
        <NavLink to="/notesrapides" style={{ marginRight: 10 }}>Notes rapides</NavLink>
        <NavLink to="/assistant" style={{ marginRight: 10 }}>Assistant</NavLink>
    </nav>
  )
}
