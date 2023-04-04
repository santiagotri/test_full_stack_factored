
import StickyFooter from './components/Footer/StickyFooter';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Working from './components/Working/Working';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/about" element={<About></About>}/>
          <Route path="" element={<Home></Home>}/>
          <Route path="working" element={<Working></Working>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
      <StickyFooter></StickyFooter>
    </div>

  );
}

export default App;
