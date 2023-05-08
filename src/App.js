// App.js

import './App.css';
import Analysis from "./components/Analysis";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import Sidebar from "./components/Sidebar";
import Visitors from "./components/Visitors";

function App() {
  return (
    <div className='container'>
      <nav className='sidebar'>
        <Sidebar />
      </nav>
      <div className='main'>
        <div className='top-section'>
          <Analysis />
          <Rating />
          <Reviews />
        </div>
        <div className='bottom-section'>
          <Visitors />
        </div>
      </div>
    </div>
  );
}

export default App;
