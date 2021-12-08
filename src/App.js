import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
//import Student from "./components/student";
import Doctor from "./components/doctor";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import UpdateDoctor from "./components/updatedoctor";
import AddDoctors from "./components/adddoctors";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/doctors/update/:id" component={UpdateDoctor} />
        <Route path="/doctors/add" component={AddDoctors} />
        <Route path="/doctors" component={Doctor} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
     
    </div>
  );
}
//<Route path="/students" component={Student} />
export default App;