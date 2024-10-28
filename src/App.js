import s from './App.module.css';
import Main from "./Main/Main.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter className={s.App}>
          <Main/>
      </BrowserRouter>
  );
}

export default App;
