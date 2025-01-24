import { useState } from "react";
import { Button } from "./button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function SideBar(){
     const [sidebarOpen, setSidebarOpen] = useState(false);
     const history = useHistory();

     const handleLoginPage = () => {
        history.push("/login");
    }

    const handleSignUpPage = () => {
        history.push("/signup");
    }
    return (
        <>
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:static md:translate-x-0 z-40 h-[calc(100vh-3.5rem)] w-64 border-r bg-background transition-transform md:block`}
        >
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                  <div className="flex items-center">
                      <Button onClick={handleLoginPage} variant="ghost" className=" justify-start">
                        <span>Log in</span>
                        <i class="fa-solid fa-right-to-bracket"></i>
                      </Button>
                      <p>/</p>
                      <Button onClick={handleSignUpPage} variant="ghost" className=" justify-start">
                        <span>Sign Up</span>
                        <i class="fa-solid fa-user-plus"></i>
                      </Button>
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
        </>
    )
}