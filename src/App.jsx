import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { FilmListPage } from './pages/FilmListPage'
import { FilmDetail } from './components/ui/FilmDetail'


function App() {
  

  return (
    <>
      <Router>
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/films" component={FilmListPage} />
              <Route path="/filmdetail/:id" component={FilmDetail} />
          </Switch>
      </Router>
    </>
  )
}

export default App
