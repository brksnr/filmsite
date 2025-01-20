import { Footer } from "@/layout/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function FilmDetail(){
    const { id } = useParams();
    const [film, setFilm] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/films/${id}`)
      .then(response => {
        setFilm(response.data);
      })
      .catch(error => {
        console.error('Error fetching film data', error);
      });
  }, [id]);
    
  if (!film) {
    return <div>Loading...</div>;
  }

    return(
        <>
        <Footer></Footer>
        <div className="flex">
            <div className="w-1/6 "></div>
                <div className=" flex justify-center">
                    <div className="flex flex-col gap-10 sm:flex-row">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-center">{film.name}</h1>
                            <img src={film.imageUrl} className="rounded-xl sm:w-72 sm:h-96"></img>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <h3>Director : {film.director}</h3>
                            <hr />
                            <h3>Description : {film.description}</h3>
                            <hr />
                            <h3>Genre : {film.genre}</h3>
                            <hr />
                            <h3>Imdb : {film.imdbRank}</h3>
                            <hr />
                            <h3>Stars : {film.stars.map((star)=><p>{star.fullName}</p>)}</h3>
                            <hr />
                        </div>
                    </div>
                </div>
            <div className="w-1/6 "></div>
        </div>
        </>
    )
}