import { useState, useEffect } from "react";
import { Button } from "./button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import md5 from "blueimp-md5"; 

export function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  const token = localStorage.getItem("token");

  const handleLoginPage = () => {
    history.push("/login");
  };

  const handleSignUpPage = () => {
    history.push("/signup");
  };

  const getGravatarUrl = (email) => {
    const emailHash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
  };

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
                  <p className="flex items-center gap-4">{user.username} <i class="fa-solid fa-arrow-right-from-bracket"></i></p>
                </div>
              )}
              <br />
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
  );
}
