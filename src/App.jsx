import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BackgroundVideo from "./components/BackgroundVideo";
import rain from "./assets/rain.mp4";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main/Main";

function App() {
  const [input, setInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [data, setData] = useState([]);
  const [stateData, setStateData] = useState([]);

  function clearInput() {
    setInput("");
  }
  function setInputValue(e) {
    setInput(e.target.value);
    // initially setting stateInput because if user changes the country the previous states of the
    // previous country will be shown unless clicked on
    setStateInput("");
    // the value needs to be sliced because the target value contains the short name and full name
    // US - United States of America but what is needed is United States of America for filtering
    const filtered = data.filter(
      (country) => country.country == e.target.value.slice(5)
    );
    // without checking if filtered[0] is defined it throws an error that  cannot 'cities is undefined'
    if (typeof filtered[0] !== "undefined") {
      setStateData(filtered[0].cities);
    } else null;
  }

  function clearStateInput() {
    setStateInput("");
  }
  function setStateInputValue(e) {
    setStateInput(e.target.value);
  }
  // The useEffect runs only on initial mount of the app, at this point the data is fetched
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => console.log(error.message));
    return () => {
      setData([]);
    };
  }, []);

  return (
    <div className="bg-blue-300 min-h-screen lg:overflow-y-hidden">
      <SearchBar
        input={input}
        stateInput={stateInput}
        data={data}
        stateData={stateData}
        clearInput={clearInput}
        setInputValue={setInputValue}
        clearStateInput={clearStateInput}
        setStateInputValue={setStateInputValue}
      />

      {/* <BackgroundVideo videoURL={rain} /> */}
      {input !== "" && stateInput !== "" ? (
        <Main state={stateInput} country={input} />
      ) : null}
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
