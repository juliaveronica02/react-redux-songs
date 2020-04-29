import React from "react";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import SongPage from "./components/SongPage";
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <SongPage />
    </Provider>
  );
}
