import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { FilmListPage } from './pages/FilmListPage'
import { FilmDetail } from './components/ui/FilmDetail'
import { StarListPage } from './pages/StarListPage'
import { StarDetail } from './components/ui/StarDetail'
import { GenreListPage } from './pages/GenreListPage'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from './actions/userAction'
import axios from 'axios'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    if (token && username && email) {
      dispatch(loginUser({ token, username, email }));
    }
  }, [dispatch]);


  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:8080/auth/verify", {
            headers: {
              Authorization: `Bearer${token}`,
            },
          });
          console.log("Token doğrulama başarılı:", response.data);
        } catch (error) {
          console.error("Token doğrulama başarısız:", error);
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("email");
          dispatch(loginUser({ token: null, username: null, email: null }));
        }
      } else {
        console.log("Token mevcut değil.");
      }
    };
    verifyToken();
  }, []);
  
  return (
    <>
      <Router>
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/films" component={FilmListPage} />
              <Route path="/stars" component={StarListPage} />
              <Route path="/genres" component={GenreListPage} />
              <Route path="/filmdetail/:id" component={FilmDetail} />
              <Route path="/stardetail/:id" component={StarDetail} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
          </Switch>
      </Router>
    </>
  )
}

export default App
