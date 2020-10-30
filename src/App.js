import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <About></About>
        </Route>
        <Route path="/projects">
            <Projects></Projects>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/blogs">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
