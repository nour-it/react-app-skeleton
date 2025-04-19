import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page non trouvée</h1>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  )
}

export default NotFound
