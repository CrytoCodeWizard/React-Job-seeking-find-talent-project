import LandingPage from "./Components/LandingPage/LandingPage";
import { AngelList } from "./Components/Jobs/AngelList";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/jobs" component={AngelList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
