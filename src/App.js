import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Components/Register/Register';
import Login from "./Components/Login/Login"
import ForgotPass from './Components/ForgotPass/ForgotPass';
import ResetPass from './Components/ResetPass/ResetPass';
import PostJob from './Components/PostJob/PostJob';
import AllJobs from './Components/AllJobs/AllJobs';
import { useState } from 'react';

function App() {

  const [signedIn, setSignedIn] = useState(false);
  const [showRight, setShowRight] = useState(true);

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <HomePage signedIn={signedIn} setSignedIn={setSignedIn} showRight={showRight} />
          </Route>

          <Route exact path="/register">
            <Register signedIn={signedIn} setSignedIn={setSignedIn} showRight={showRight} />
          </Route>

          <Route exact path="/login">
            <Login signedIn={signedIn} setSignedIn={setSignedIn} showRight={showRight} />
          </Route>

          <Route exact path="/forgot">
            <ForgotPass signedIn={signedIn} setSignedIn={setSignedIn} showRight={showRight} />
          </Route>

          <Route exact path="/reset">
            <ResetPass signedIn={signedIn} setSignedIn={setSignedIn} showRight={showRight} />
          </Route>

          <Route exact path="/postJob">
            <PostJob />
          </Route>

          <Route exact path="/alljobs">
            <AllJobs />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
