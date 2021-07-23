import LandingPage from "./Components/LandingPage/LandingPage";
<<<<<<< HEAD
import Recruit from "./Components/Recruit/Recruit";

function App() {
  return (
    <>
    {/* <LandingPage /> */}
    <Recruit />
    </>
=======
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
>>>>>>> f6954de1c018e0bbbe99d2ac430e475b167effcc
  );
}

export default App;
