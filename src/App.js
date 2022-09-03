

import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  // const title = 'My react blog site';
  // const likes = 50;
  // const person = {name : 'yoshi', age : '25'};
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div class="content">
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/create">
         <Create/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>
        <Route path = "*">
          <NotFound />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
