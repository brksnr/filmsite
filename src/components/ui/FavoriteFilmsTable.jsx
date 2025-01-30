import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteFilmFromFavorites, userFavoriteFilms } from "@/actions/userAction";
import { useEffect } from "react";
import { fetchFavorites } from "@/api";

export function FavoriteFilmsTable() {
  const dispatch = useDispatch();
  const films = useSelector(state => state.user.favoriteFilms);
  const userName = useSelector((state) => state.user.user.username);
  const [selectedFilms, setSelectedFilms] = useState([]);

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
  
    
 
  
  return (
    <div className="w-full mx-2 ">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search by name..."
          value=""
          onChange=""
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader> 
              <TableRow key="">
                  <TableHead key="">
                  </TableHead>
                  <TableHead key="">
                    Film IMG
                  </TableHead>
                  <TableHead key="">
                    Film Name
                  </TableHead>
                  <TableHead key="">
                    Director
                  </TableHead>
                  <TableHead key="">
                    Imdb Rank
                  </TableHead> 
              </TableRow>
          </TableHeader>
          <TableBody>
            {films.length ? (
              films.map((film, index) => (
                <TableRow key={index}>
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
                  <TableCell><Button onClick={() => deleteFromFavorites(film)} variant="outline"><i className="fa-solid fa-trash-can text-red-500"></i></Button></TableCell>
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