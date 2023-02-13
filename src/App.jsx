import Formimage from "./Components/Formimage/Formimage";
import Formpage from "./Components/Formpage/Formpage";
import classes from "./App.module.css";

function App() {

  return (
    <div className={classes.container}>
        <Formimage />
        <Formpage />
      </div>
  )
} 

export default App;
