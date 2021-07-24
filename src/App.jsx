import RegisterForm from "./Components/Forms/RegistrationForm/RegisterForm";
import LoginForm from "./Components/Forms/LoginForm/LoginForm";
import RegisterFormRc from "./Components/FormsRecruiter/RegistrationForm/RegisterFormRc";
import LoginFormRc from "./Components/FormsRecruiter/LoginForm/LoginFormRc";
import LandingPage from "./Components/LandingPage/LandingPage";
import { StartUpsPage } from "./Components/StartUpJobsPage/StartUpsPage";
import { AngelList } from "./Components/Jobs/AngelList";
import Main from "./Components/Recruit/Main";
import Form from "./Components/Recruit/Form";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route  path="/" exact component={LandingPage} />
          <Route  path="/jobs" component={AngelList} />
          <Route  path="/recruit" exact component={Main} />
          <Route  path="/recruit/create-jobs" component={Form} />
          <Route exact path='/join' component={RegisterForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/joinrc' component={RegisterFormRc} />
          <Route exact path='/loginrc' component={LoginFormRc} />
          <Route path="/startup-jobs" component={StartUpsPage}/>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;

