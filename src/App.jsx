import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'

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

      <div className='bg-[url("images/1.jpg")] w-screen h-screen flex justify-center items-center gap-5'>
        <div class="flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Film, Oyuncu, Yönetmen, Tür.."
            class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        <Button>SEARCH</Button>
      </div>
      
    </>
  )
}

export default App
