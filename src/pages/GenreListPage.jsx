import { Button } from "@/components/ui/button";
import { SideBar } from "@/components/ui/sideBar";
import { Header } from "@/layout/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function GenreListPage () {
    const [genres, setGenres] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8080/genres') 
          .then(response => {
            setGenres(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error('Error fetching data', error);
          });
      }, []);
      
      const handleGenreClick = (genreName) => {
        history.push(`/films/by-genre?genre=${genreName}`);
      };

    return (
        <>
        <div className="min-h-screen bg-background">
      <Header/>
      <div className="flex">
        <SideBar/>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genres.map((genre) => (
                        <div  key={genre.id} className="flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-xl">
                            <img onClick={() => handleGenreClick(genre.name)} src={genre.genreUrl} className="hover:opacity-90 rounded-xl sm:w-full sm:h-full"></img>
                            <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-xl text-black">{genre.name}</p>
                                    </div>
                            </div>
                        </div>
                    ))}
          </div>
        </main>
      </div>
    </div>
        </>
    )
}