import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import preventTampering from "./helpers/preventTampering";
import setTokenHeader from "./helpers/setTokenHeader";
import store from "./store/store";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./Main";

// check if token is available in localstorage and prevent tampering
if (localStorage.token) { setTokenHeader(localStorage.token); preventTampering() }

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="onboarding">

          <NavigationBar />
          <Main />
          <Footer />

        </div>
      </Router>
    </Provider>
  );
}

export default App;
