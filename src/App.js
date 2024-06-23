import "./App.css";
import Products from "./components/Products";
import Total from "./components/Total";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App container mt-5">
        <h1 className="heading mb-5">React Redux Toolkit Task</h1>
        <Products />
        <Total />
      </div>
    </Provider>
  );
}

export default App;
