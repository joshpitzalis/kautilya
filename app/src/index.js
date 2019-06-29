import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./features/Footer";
import Navigation from "./features/Navigation";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage.jsx";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";

const Routes = () => {
  return (
    <BrowserRouter>
      <main className="bg-light-blue pt3-ns">
        <Navigation />
        <Switch>
          <Route exact path="/" component={() => <Homepage />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route exact path="/books" component={() => <Books />} />
          <Route exact path="/authors" component={() => <Authors />} />
          <Route component={() => <ErrorPage />} />
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
