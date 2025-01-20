import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { FilmListPage } from './pages/FilmListPage'
import { FilmDetail } from './components/ui/FilmDetail'
import { StarListPage } from './pages/StarListPage'
import { StarDetail } from './components/ui/StarDetail'


function App() {
  

  return (
    <>
      <Router>
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/films" component={FilmListPage} />
              <Route path="/stars" component={StarListPage} />
              <Route path="/filmdetail/:id" component={FilmDetail} />
              <Route path="/stardetail/:id" component={StarDetail} />
          </Switch>
      </Router>
    </>
  )
}

export default App
