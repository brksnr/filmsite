import { Button } from "@/components/ui/button";
import { Header } from "@/layout/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function StarListPage(){
    const [stars, setStars] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8080/stars') 
          .then(response => {
            setStars(response.data);
          })
          .catch(error => {
            console.error('Error fetching data', error);
          });
      }, []);

      const handleStarDetail = (id) => {
        history.push(`/stardetail/${id}`);
      };

    return(
        <>
            <Header></Header>
            <div className="flex justify-between">
                <div className="w-1/6  "></div> 
                <div className=" flex flex-wrap gap-10 justify-center">
                    {stars.map((star) => (
                        <div  key={star.id} className="flex flex-col gap-4">
                            <img onClick={() => handleStarDetail(star.id)} src={star.starImg} className="rounded-xl sm:w-72 sm:h-96"></img>
                            <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-4">
                                        <p className="font-roboto font-bold">{star.fullName}</p>
                                        <p className="font-roboto font-bold">{star.age}</p>
                                    </div>
                                    <div>
                                        <Button className="rounded-full font-roboto font-bold">{star.whoIs}</Button>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/6"></div>
            </div>
            </>
    )
}