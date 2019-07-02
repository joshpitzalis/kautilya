import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import hi from "react-intl/locale-data/hi";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import Footer from "./features/Footer";
import Navigation from "./features/Navigation";
import { flattenMessages } from "./i18n/helpers";
import messages from "./i18n/messages";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage.jsx";
import "./styles/index.css";
import rootReducer from "./utils/rootReducer";

addLocaleData([...en, ...hi]);

const Routes = () => {
  const [locale, setLocale] = React.useState("en");
  return (
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
          <main className="bg-light-blue pt3-ns">
            <Navigation setLocale={setLocale} locale={locale} />
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
      </Provider>
    </IntlProvider>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
// unregisterServiceWorker();
