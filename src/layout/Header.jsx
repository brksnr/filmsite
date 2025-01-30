import { Button } from "@/components/ui/button";
import md5 from "blueimp-md5";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export function Header(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const history = useHistory();
    const user = useSelector((state) => state.user.user);
    const token = localStorage.getItem("token");

    const getGravatarUrl = (email) => {
      const emailHash = md5(email.trim().toLowerCase());
      return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
    };

    const handleFilmList = () => {
        history.push("/films");
    }
    const handleStarPage = () => {
        history.push("/stars");
    }

    

    const handleGenrePage = () => {
        history.push("/genres");
    }

    const handleLoginPage = () => {
       history.push("/login");
   }

   const handleSignUpPage = () => {
       history.push("/signup");
   }

    return(
        <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="flex h-14 items-center px-4 md:px-6 justify-between">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <span className="text-xl font-bold">MOVIEBK</span>
          <div className="hidden md:flex items-center space-x-4 flex-1 ml-5">
            <nav className="flex items-center space-x-4 ">
            <Button onClick={handleFilmList} variant="ghost" size="sm">
                        Films
                      </Button>
                      <Button onClick={handleStarPage} variant="ghost" size="sm">
                        Stars
                      </Button>
                      <Button onClick={handleGenrePage} variant="ghost" size="sm">
                        Genres
                      </Button>
                      <Button variant="ghost" size="sm">
                        News
                      </Button>
                      <Button variant="ghost" size="sm">
                        About
                      </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          fixed md:static md:translate-x-0
          z-40 h-[calc(100vh-3.5rem)] w-64 
          bg-primary/5 border-r border-primary/10
          transition-transform
          md:hidden bg-gray-100
        `}
        >
          <div className="py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
               <div className="flex items-center">
               {!token ? (
                <div className="flex items-center">
                  <Button onClick={handleLoginPage} variant="ghost" className=" justify-start">
                    <span>Log in</span>
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </Button>
                  <p>/</p>
                  <Button onClick={handleSignUpPage} variant="ghost" className=" justify-start">
                    <span>Sign Up</span>
                    <i className="fa-solid fa-user-plus"></i>
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  {user && user.email && (
                    <img
                      src={getGravatarUrl(user.email)}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <p className="flex items-center gap-4">{user.username} <i className="fa-solid fa-arrow-right-from-bracket"></i></p>
                </div>
              )}
               </div>
                  <br/>
                <Button variant="ghost" className="w-full justify-start">
                  <span>Favorites</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <span>Watch List</span>
                </Button>
              </div>
            </div>
          </div>
        </aside>
        </div>
        </>
    )
}