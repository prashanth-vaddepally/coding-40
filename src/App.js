import {BrowserRouter, Switch, Route} from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Header from './components/Header'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
