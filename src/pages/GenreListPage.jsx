import { Button } from "@/components/ui/button";
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
        <Header></Header>
        <div className="flex justify-between">
                <div className="w-1/6  "></div> 
                <div className=" flex flex-wrap gap-10 justify-center">
                    {genres.map((genre) => (
                        <div  key={genre.id} className="flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-xl">
                            <img onClick={() => handleGenreClick(genre.name)} src={genre.genreUrl} className="hover:opacity-90 rounded-xl sm:w-72 sm:h-96"></img>
                            <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-4">
                                        <p className="font-roboto font-bold">{genre.name}</p>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/6"></div>
            </div>
        </>
    )
}