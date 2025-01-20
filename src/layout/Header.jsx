import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export function Header(){

    const history = useHistory();

    const handleRedirect = () => {
        history.push("/films");
    }
    const handleStarPage = () => {
        history.push("/stars");
    }

    const handleHomePage = () => {
        history.push("/home");
    }

    return(
        <>
        <div className='flex justify-evenly items-center mb-10 bg-blue-500'>
                <img src='images/filmlogo.png' onClick={handleHomePage} className='w-24 h-24'></img>
                <div className='gap-4 hidden md:flex'>
                    <button className="font-roboto font-bold" onClick={handleRedirect}>Filmler</button>
                    <button className="font-roboto font-bold" onClick={handleStarPage}>Oyuncular</button>
                    <button className="font-roboto font-bold">Yönetmenler</button>
                    <button className="font-roboto font-bold">Türler</button>
                </div>
                <div className='flex gap-4 items-center'>
                    <img src="images/user.png" className="w-9 h-9"></img>
                    <button className="font-roboto font-bold">Giriş Yap</button>
                    <p>/</p>
                    <button className="font-roboto font-bold">Üye Ol</button>
                </div>
              </div>
        </>
    )
}