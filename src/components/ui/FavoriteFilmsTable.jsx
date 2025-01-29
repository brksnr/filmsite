import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFilms, getFilmsByGenre } from "@/actions/filmActions";
import { useState } from "react";

export function FavoriteFilmsTable() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.films);
  const [selectedFilms, setSelectedFilms] = useState([]);
  console.log("bakalıms:", selectedFilms)

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedGenre = params.get("genre");

    if (selectedGenre) {
      dispatch(getFilmsByGenre(selectedGenre));
    } else {
      dispatch(getAllFilms());
    }
  }, [dispatch, location.search]);

  const handleCheckboxChange = (film) => {
    setSelectedFilms((prevSelected) =>
      prevSelected.includes(film)
        ? prevSelected.filter((f) => f !== film)
        : [...prevSelected, film]
    );
  };

  
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
                    <Checkbox/>
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
                  <TableCell><Button variant="outline"><i className="fa-solid fa-trash-can text-red-500"></i></Button></TableCell>
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