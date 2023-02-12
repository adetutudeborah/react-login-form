import Formdesign from "./Components/Formdesign/Formdesign";
import Formpage from "./Components/Formpage/Formpage";
import classes from "./App.module.css";

function App() {

  return (
    <div className={classes.container}>
        <Formdesign />
        <Formpage />
    </div>
  )
}

export default App;
