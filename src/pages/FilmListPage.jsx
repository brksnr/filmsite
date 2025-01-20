import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "@/layout/Footer";
import { Button } from "@/components/ui/button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function FilmListPage() {
  const [films, setFilms] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:8080/films') 
      .then(response => {
        setFilms(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  const handleFilmDetail = (id) => {
    history.push(`/filmdetail/${id}`);
  };

  return (
    <>
    <Footer></Footer>
    <div className="flex justify-between">
        <div className="w-1/6  "></div> 
        <div className=" flex flex-wrap gap-10 justify-center">
            {films.map((film) => (
                <div  key={film.id} className="flex flex-col gap-4">
                    <img onClick={() => handleFilmDetail(film.id)} src={film.imageUrl} className="rounded-xl sm:w-72 sm:h-96"></img>
                    <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <p>{film.name}</p>
                                <p>{film.genre}</p>
                            </div>
                            <div>
                                <Button className="rounded-full">{film.imdbRank}</Button>
                            </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-1/6"></div>
    </div>
    </>
  );
}
