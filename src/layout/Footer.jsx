export function Footer(){
    return (
        <>
        <div className="bg-gray-100 flex justify-evenly items-center py-10">
                <div>
                        <p className="text-lg font-bold uppercase">© 2025 MOVIEB</p>
                </div>
                <div className="flex flex-col items-center">
                <img className="w-24 h-24 " src="images/filmlogo.png"/>
                <p className="text-sm font-semibold">MADE BY BERK SENER</p>
                </div>
                <div className="flex flex-col items-center">
                        <h2 className="text-lg font-bold uppercase">Social</h2>
                        <div className="flex justify-center md:justify-start gap-4 mt-2">
                            <a href="https://www.linkedin.com/in/berksener/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                            <i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/brksnr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                            <i className="fa-brands fa-github"></i></a>
                            <a href="#" className="text-gray-400 hover:text-gray-300">
                            <i className="fa-solid fa-envelope"></i></a>
                        </div>
                </div>      
        </div>
        </>
    )
}