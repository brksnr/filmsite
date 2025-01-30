import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteFilmFromFavorites, userFavoriteFilms } from "@/actions/userAction";
import { useEffect } from "react";
import { fetchFavorites, removeFavoriteFilm } from "@/api";

export function FavoriteFilmsTable() {
  const dispatch = useDispatch();
  const films = useSelector(state => state.user.favoriteFilms);
  const userName = useSelector((state) => state.user.user.username);
  const [selectedFilms, setSelectedFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  console.log("bakalım film id'ye :", selectedFilms)

  const handleCheckboxChange = (film) => {
    setSelectedFilms((prevSelected) =>
      prevSelected.includes(film)
        ? prevSelected.filter((f) => f !== film)
        : [...prevSelected, film]
    );
  };

  useEffect(() => {
    const username = userName;
    fetchFavorites(username)  
      .then(favorites => {
        dispatch(userFavoriteFilms(favorites)); 
        console.log("Favorite films:", favorites);
      })
      .catch(error => {
        console.error("Error fetching favorites:", error);
      });
  }, [dispatch, userName]);

  const deleteFilm = (filmId) => {
    removeFavoriteFilm(filmId)
    .then(() => {
      console.log("film removed from favorites");
      dispatch(deleteFilmFromFavorites(filmId))
    })
    .catch((error) => {
      console.log("error removing film : ", error);
    })

  };

  const filteredFilms = films.filter(film =>
    film.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="w-full mx-2 ">
      <div className="flex items-center py-4">
      <Input
          placeholder="Search by name..."
          className="max-w-sm"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader> 
              <TableRow>
                  <TableHead>
                  </TableHead>
                  <TableHead>
                    Film IMG
                  </TableHead>
                  <TableHead>
                    Film Name
                  </TableHead>
                  <TableHead>
                    Director
                  </TableHead>
                  <TableHead>
                    Imdb Rank
                  </TableHead> 
              </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFilms.length ? (
              filteredFilms.map((film) => (
                <TableRow key={film.id}>
                  <TableCell>
                  <Checkbox
                      checked={selectedFilms.includes(film)}
                      onCheckedChange={() => handleCheckboxChange(film)}
                    />
                  </TableCell>
                  <TableCell>
                    <img src={film.imageUrl} alt={film.name} className="w-16 h-24 min-w-16" />
                  </TableCell>
                  <TableCell>{film.name}</TableCell>
                  <TableCell>{film.director}</TableCell>
                  <TableCell>{film.imdbRank}</TableCell>
                  <TableCell><Button onClick={() => deleteFilm(film.id)} variant="outline"><i className="fa-solid fa-trash-can text-red-500"></i></Button></TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="h-24 text-center">
                  There is no favorite films to list.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}