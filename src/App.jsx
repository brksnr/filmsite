import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-evenly items-center'>
        <img src='images/filmlogo.png' className='w-24 h-24'></img>
        <div className='flex gap-4'>
            <button>Filmler</button>
            <button>Oyuncular</button>
            <button>Yönetmenler</button>
            <button>Türler</button>
        </div>
        <div className='flex gap-4'>
            <button>Giriş Yap</button>
            <p>/</p>
            <button>Üye Ol</button>
        </div>
      </div>
      
    </>
  )
}

export default App
