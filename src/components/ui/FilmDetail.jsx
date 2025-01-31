import { Header } from "@/layout/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./button";
import { Star } from "lucide-react";
import { Card, CardContent } from "./card";
import { SideBar } from "./sideBar";
import { useDispatch, useSelector } from "react-redux";
import { getFilmById } from "@/actions/filmActions";
import { addFavoriteFilm } from "@/api";

export function FilmDetail(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const selectedFilm = useSelector((state) => state.films.selectedFilm);
    const userName = useSelector((state) => state.user.user.username);
    

    useEffect(() => {
      dispatch(getFilmById(id));
    }, [dispatch, id]);
    
  if (!selectedFilm) {
    return <div>Loading...</div>;
  }



  
  const handleAddFavorite = (id) => {
    const username = userName;
    addFavoriteFilm(username, id)
      .then(response => {
        console.log("Film added to favorites:ss", response);
      })
      .catch(error => {
        console.error("Error adding to favorites:", error);
      });
  };
  


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
                src={selectedFilm.imageUrl}
                alt={selectedFilm.name}
                className=" w-full h-full rounded-xl"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <div>
                <div className="flex justify-between flex-wrap">
                <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">{selectedFilm.name}</h1>
                  <div className="flex gap-2 items-center flex-wrap">
                      <Button variant="default" className="hover:bg-slate-800" onClick={() => handleAddFavorite(id)}> <i className="fa-regular fa-heart"></i> Add To Favorites</Button>
                      <Button variant="default" className="hover:bg-slate-800"><i className="fa-regular fa-eye"></i>Add To Watch List</Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-semibold">{selectedFilm.imdbRank}</span>
                  </div>
                  <span>•</span>
                  <div className="flex gap-2">
                  {selectedFilm.genre.map((genre) => genre.name).join(", ")}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-400 mb-2">Director</h2>
                  <p className="text-xl text-white">{selectedFilm.director}</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-400 mb-2">Description</h2>
                  <p className="text-lg leading-relaxed text-white">{selectedFilm.description}</p>
                </div>

                
                <div>
                  <h2 className="text-lg font-semibold text-gray-400 mb-2">Cast</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
                  {selectedFilm.stars.map((star)=><p>{star.fullName}</p>)}
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