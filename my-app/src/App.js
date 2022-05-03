import './App.css';
import Fquestions from './Fquestions';
import Home from './Home';
import Staff from './Staff';
import Unanswered from './Unanswered';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import UnansweredAdmin from './UnansweredAdmin';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/staff" element={<Unanswered/>} />
          <Route path="/admin" element={<UnansweredAdmin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
