import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store.js";
import ThemeComponent from "./component/themeComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeComponent>
          <Router>
            <App />
          </Router>
        </ThemeComponent>
      </Provider>
    </PersistGate>
  </StrictMode>
);
