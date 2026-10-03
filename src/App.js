import "./App.css";

import RamdomNumber from "./components/randomnumber";
import Counter from "./components/Counter";

const App = () => {

    return (
      <div><div className="container">

            <div className="card">
                <RamdomNumber />
            </div>

            <div className="card">
                <Counter />
            </div>

        </div></div>
        
    );
};

export default App;