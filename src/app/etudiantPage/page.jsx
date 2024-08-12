import React from 'react'
import { signOut } from '../auth.js'

const HomePage = () => {
  return (
    <div>
      <h1>Acceuil</h1>
      <input type="file" />
      <form action={ async () =>{
        "use server"
        await signOut()
      }}>
      <button>
        Déconnexion
      </button>
      </form>
    </div>
  )
}

export default HomePage