import { Header } from "@/layout/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function StarDetail(){
    const { id } = useParams();
    const [star, setStar] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/stars/${id}`)
          .then(response => {
            setStar(response.data);
          })
          .catch(error => {
            console.error('Error fetching film data', error);
          });
      }, [id]);

      if (!star) {
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
                            <h1 className="text-center font-roboto font-bold">{star.fullName}</h1>
                            <img src={star.starImg} className="rounded-xl sm:w-72 sm:h-96"></img>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Age :</h3><p className="font-roboto">{star.age}</p></div>
                            <hr />
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Description :</h3><p className="font-roboto">{star.whoIs}</p></div>
                            <hr />
                            <div className="flex "><h3 className="font-roboto font-bold mr-2">Films :</h3><p className="font-roboto">{star.films.map((film)=><p>{film.name}</p>)}</p></div>
                            <hr />
                            
                        </div>
                    </div>
                </div>
            <div className="w-1/6 "></div>
        </div>
        </>
    )
}