import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "@/layout/Header";
import { Button } from "@/components/ui/button";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ChevronDown } from "lucide-react";

export function FilmListPage() {
  const [films, setFilms] = useState([]);
  const [genre, setGenre] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedGenre = params.get("genre");

    if (selectedGenre) {
      setGenre(selectedGenre); 
      axios
        .get(`http://localhost:8080/films/by-genre?genre=${selectedGenre}`)
        .then((response) => {
          setFilms(response.data);
          console.log("Filtered films:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching filtered films", error);
        });
    } else {
      setGenre(null);
      axios
        .get("http://localhost:8080/films")
        .then((response) => {
          setFilms(response.data);
          console.log("All films:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching all films", error);
        });
    }
  }, [location.search]);

  const handleFilmDetail = (id) => {
    history.push(`/filmdetail/${id}`);
  };

  return (
    <>
    
    <Header/>
    <div className="flex flex-col items-center">
    <Header/>
    <div className="flex flex-wrap gap-2  border">
            <Button variant="outline" size="sm">
              All Games <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Language <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Countries <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              All Rating <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Sort by <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>

        <div className="flex flex-wrap gap-10 justify-center pt-20 mx-20 border">
          
            {films.map((film) => (
                <div  key={film.id} className="flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-xl">
                    <img onClick={() => handleFilmDetail(film.id)} src={film.imageUrl} className="hover:opacity-90 rounded-xl sm:w-72 sm:h-96"></img>
                    <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <p className="font-roboto font-bold">{film.name}</p>
                                <p className="font-roboto font-bold">{film.genre.map((genre) => genre.name).join(", ")}</p>
                            </div>
                            <div>
                                <Button className="rounded-full font-roboto font-bold">{film.imdbRank}</Button>
                            </div>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
    </>
  );
}
