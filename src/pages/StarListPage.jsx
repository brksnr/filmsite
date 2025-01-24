import { getAllStars } from "@/actions/filmActions";
import { Button } from "@/components/ui/button";
import { SideBar } from "@/components/ui/sideBar";
import { Header } from "@/layout/Header";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function StarListPage(){
  const history = useHistory();
  const dispatch = useDispatch();
  const stars = useSelector((state) => state.films.stars);

  useEffect(() => {
    dispatch(getAllStars());
  }, [dispatch]);

      const handleStarDetail = (id) => {
        history.push(`/stardetail/${id}`);
      };


    return(
        <>
            <div className="min-h-screen bg-background">
      <Header/>
      <div className="flex">
        <SideBar/>    
        <main className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stars.map((star) => (
                        <div  key={star.id} className="flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-xl">
                            <img onClick={() => handleStarDetail(star.id)} src={star.starImg} className="hover:opacity-90 rounded-xl sm:w-full sm:h-full"></img>
                            <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-xl text-black">{star.fullName}</p>
                                    </div>
                                    <div>
                                        <Button className="rounded-full font-roboto font-bold">{star.age}</Button>
                                    </div>
                            </div>
                        </div>
                    ))}
          </div>
        </main>
      </div>
    </div>
            </>
    )
}