import { FavoriteFilmsTable } from "@/components/ui/favoriteFilmsTable";
import { SideBar } from "@/components/ui/SideBar";
import { Header } from "@/layout/Header";

export function Favorites(){
    return (
        <>
        <Header />
        <div className="flex">
        <SideBar/>
        <FavoriteFilmsTable/>
        </div>
        </>
    )
}