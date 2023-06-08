import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App(list) {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#02053c";
      showAlert("Dark mode has been activated", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated", "success");
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      {/* <Router> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="my-3"></div>
        <TextForm showAlert={showAlert} title="Enter Text below" mode={mode} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}></Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} title="Enter Text below" mode={mode} />}></Route>

           */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
