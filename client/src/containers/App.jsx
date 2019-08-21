import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import stores from "./store.js";
import PrivateRoute from "./PrivateRoute.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Compiler from "../components/Compiler.jsx";

// if (localStorage.jwtToken) {
//   //   setAuthToken(localStorage.jwtToken);
//   let Object = localStorage.getItem("jwtToken");
//   Object = JSON.parse(Object);

//   stores.dispatch(setCurrentUser(Object));
// }

class App extends React.Component {
  render() {
    return (
      <Provider store={stores}>
        <Router>
          <div align="center">
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={Compiler} />
            <Route
              exact
              path="/BubbleSort"
              render={props => <Compiler props="BubbleSort" />}
            />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
