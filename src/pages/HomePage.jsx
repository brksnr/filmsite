import { Button } from "../components/ui/button";
import { Header } from "../layout/Header";

export function HomePage(){
    return(
        <>
        <Header></Header>
              <div className='bg-[url("images/1.jpg")] max-w-screen h-screen flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className="flex items-center w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Film, Oyuncu, Yönetmen, Tür.."
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                <Button>SEARCH</Button>
              </div>
        </>
    )
}