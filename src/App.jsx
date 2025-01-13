import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'


function App() {
  

  return (
    <>
    <Router>
    <Switch>
      <Route path="/home" component={HomePage} />
      </Switch>
      </Router>
    </>
  )
}

export default App
