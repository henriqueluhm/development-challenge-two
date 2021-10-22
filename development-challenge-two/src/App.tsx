import { DisplayPatients } from "./components/DisplayPatients";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' component={DisplayPatients} />
        </Switch>
      </Router>
      <section className="blue-side"> _</section>
    </>
  );
}

export default App;