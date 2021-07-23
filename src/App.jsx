import LandingPage from "./Components/LandingPage/LandingPage";
import { AngelList } from "./Components/Jobs/AngelList";
import Main from "./Components/Recruit/Main";
import Form from "./Components/Recruit/Form";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/jobs" component={AngelList} />
          <Route path="/recruit" exact component={Main} />
          <Route path="/recruit/create-jobs" component={Form}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

