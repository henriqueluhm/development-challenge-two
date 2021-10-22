import { DisplayPatients } from "./components/DisplayPatients";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Switch>
        
        <Route path='/' component={DisplayPatients} />
      </Switch>
    </Router>
    </>
  );
}

export default App;