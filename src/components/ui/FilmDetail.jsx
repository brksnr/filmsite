import { Header } from "@/layout/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <Header></Header>
        <div className="flex">
            <div className="w-1/6 "></div>
                <div className=" flex justify-center">
                    <div className="flex flex-col gap-10 sm:flex-row">
                        <div className="flex flex-col justify-center gap-4">
                            <h1 className="text-center font-roboto font-bold">{film.name}</h1>
                            <img src={film.imageUrl} className="rounded-xl sm:w-72 sm:h-96"></img>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Director :</h3><p className="font-roboto">{film.director}</p></div>
                            <hr />
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Description :</h3><p className="font-roboto">{film.description}</p></div>
                            <hr />
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Genre :</h3><p className="font-roboto">{film.genre}</p></div>
                            <hr />
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Imdb :</h3><p className="font-roboto">{film.imdbRank}</p></div>
                            <hr />
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Stars :</h3><p className="font-roboto">{film.stars.map((star)=><p>{star.fullName}</p>)}</p></div>
                            <hr />
                            
                        </div>
                    </div>
                </div>
            <div className="w-1/6 "></div>
        </div>
        </>
    )
}