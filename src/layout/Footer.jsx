import { useState } from "react"

export function Footer(){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <>
        <div className='flex justify-evenly items-center'>
                <img src='images/filmlogo.png' className='w-24 h-24'></img>
                <div className='gap-4 hidden md:flex'>
                    <button>Filmler</button>
                    <button>Oyuncular</button>
                    <button>Yönetmenler</button>
                    <button>Türler</button>
                </div>
                <div className='flex gap-4 items-center'>
                    <img src="images/user.png" className="w-9 h-9"></img>
                    <button>Giriş Yap</button>
                    <p>/</p>
                    <button>Üye Ol</button>
                </div>
              </div>
        </>
    )
}