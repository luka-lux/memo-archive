import React from 'react'
import { redirect } from 'next/navigation';

const HomePage = () => {
  redirect('/tableaux-de-bords')
  return (
    <div>
      <h1>Acceuil</h1>
    </div>
  )
}

export default HomePage