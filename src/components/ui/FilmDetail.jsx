import { Header } from "@/layout/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./button";
import { Badge, ChevronDown, Star } from "lucide-react";
import { Card, CardContent } from "./card";
import { SideBar } from "./sideBar";

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
        <div className="min-h-screen bg-background">
      <Header/>
      <div className="flex">
        <SideBar/> 
        <div className="min-h-screen text-white p-4 md:p-8">
      <Card className="max-w-6xl mx-auto bg-neutral-800 backdrop-blur ">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-[350px,1fr] gap-6 md:gap-8">
            <div className="relative h-[500px] md:h-full">
              <div className="" />
              <img
                src={film.imageUrl}
                alt={film.name}
                className=" w-full h-full rounded-xl"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <div>
                <div className="flex justify-between flex-wrap">
                <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">{film.name}</h1>
                  <div className="flex gap-2 items-center flex-wrap">
                      <Button> <i class="fa-regular fa-heart"></i> Add To Favorites</Button>
                      <Button><i class="fa-regular fa-eye"></i>Add To Watch List</Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-semibold">{film.imdbRank}</span>
                  </div>
                  <span>•</span>
                  <div className="flex gap-2">
                  {film.genre.map((genre) => genre.name).join(", ")}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-400 mb-2">Director</h2>
                  <p className="text-xl text-white">{film.director}</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-400 mb-2">Description</h2>
                  <p className="text-lg leading-relaxed text-white">{film.description}</p>
                </div>

                
                <div>
                  <h2 className="text-lg font-semibold text-gray-400 mb-2">Cast</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
                  {film.stars.map((star)=><p>{star.fullName}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
      </div>
    </div>
        </>
    )
}