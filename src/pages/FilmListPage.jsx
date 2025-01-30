"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Header } from "@/layout/Header";
import { SideBar } from "@/components/ui/sideBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilms, getFilmsByGenre, setFilms } from "@/actions/filmActions";
import { Footer } from "@/layout/Footer";
import { Input } from "@/components/ui/input";


export function FilmListPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films.films);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const selectedGenre = params.get("genre");

      if (selectedGenre) {
          dispatch(getFilmsByGenre(selectedGenre));
      } else {
          dispatch(getAllFilms());
      }
  }, [dispatch, location.search]);
    
    const handleFilmDetail = (id) => {
      history.push(`/filmdetail/${id}`);
    };

    const filteredFilms = films.filter(film =>
      film.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (
    <>
    <div className="min-h-screen bg-background">
      <Header/>
      <div className="flex">
      <SideBar></SideBar>
        <main className="flex-1 p-4 md:p-6">

          <div className="flex justify-between">
            <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="outline" size="sm">
              Imdb Rank <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Genre <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button className="xl:ml-5" variant="" size="sm">
              Sort
            </Button>
            </div>

            <div>
            <div className="flex items-center w-72">
                  <Input
                      placeholder="Search by name..."
                      className="max-w-sm"
                      value={searchQuery} 
                      onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                  </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFilms.map((film) => (
                <div  key={film.id} className="flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-xl">
                    <img onClick={() => handleFilmDetail(film.id)} src={film.imageUrl} className="hover:opacity-90 rounded-xl object-cover w-full h-full"></img>
                    <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <p className="text-xl text-black">{film.name}</p>
                                <p className="text-lg font-semibold text-gray-400 mb-2">{film.genre.map((genre) => genre.name).join(", ")}</p>
                            </div>
                            <div>
                                <Button className="rounded-full font-roboto font-bold">
                                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                  {film.imdbRank}</Button>
                            </div>
                    </div>
                </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button key={page} variant={page === 1 ? "default" : "outline"} size="icon" className="w-8 h-8">
                {page}
              </Button>
            ))}
          </div>
        </main>
      </div>
    </div>
    <Footer/>
    </>
  );
}
