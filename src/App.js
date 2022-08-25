

import Navbar from './Navbar';
import Home from './Home';

function App() {

  // const title = 'My react blog site';
  // const likes = 50;
  // const person = {name : 'yoshi', age : '25'};
  return (
    <div className="App">
      <Navbar />
      <div class="content">
      <Home></Home>
      </div>
    </div>
  );
}

export default App;
