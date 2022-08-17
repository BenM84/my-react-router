import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return ( 
    <>
    <Router>
  <div style={{width:100 + 'vw',
       height: 80, 
       backgroundColor: 'powderblue' 
       }}>
    <Link to= '/'>Home</Link>
    <Link to= '/projects'>Projects</Link>
    <Link to= '/about'>About</Link>
    </div>
       <Switch>
        <Route path='/:name' exact component={Home}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/about' exact component={About}/>
        <Route path='*' exact component={PageNotFound}/>
      </Switch>
    </Router>
   </>
     
   
  );
}

export default App;
